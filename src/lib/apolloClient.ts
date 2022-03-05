import { ApolloClient, InMemoryCache, createHttpLink, NormalizedCacheObject } from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { split } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { onError } from '@apollo/client/link/error'

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null
const isBrowser = typeof window !== 'undefined'

type HttpOptions = {
  headers?: {
    Authorization?: string
    'x-hasura-admin-secret'?: string
    'x-hasura-role'?: string
  }
  token?: string
}

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message: msg, extensions }) => {
      console.error('graphql error', msg)
      switch (extensions?.['code']) {
        case 'invalid-jwt':
          // perform logout
          break
        default:
          return
      }
    })
  }
  if (networkError) {
    console.error(`Network Error: ${networkError.message}`)
  }
})

const createLink = (opts: HttpOptions = {}) => {
  return createHttpLink({
    uri: process.env.NEXT_PUBLIC_HASURA_ENDPOINT,
    credentials: 'include',
    headers: {
      ...opts.headers,
      'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET,
      'x-hasura-role': 'user',
      Authorization: 'secret'
    }
  })
}

interface Options {
  token?: string
}
export const setAuthToken = (token: string) => {
  const options: HttpOptions = {
    headers: {
        'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET,
        'x-hasura-role': 'user',
        Authorization: 'secret'
    }
  }

  if (apolloClient) {
    const newLink = createLink(options)

    apolloClient.resetStore()
    apolloClient.setLink(errorLink.concat(newLink))
  }
}

function create(initialState: any, options: Options = {}) {
  const client = new ApolloClient({
    connectToDevTools: !isBrowser,
    ssrMode: isBrowser, // Disables forceFetch on the server (so queries are only run once)
    link: createLink(options),
    cache: new InMemoryCache().restore(initialState || {}),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network'
      }
    }
  })

  if (!isBrowser) {
    const httpLink = createLink({
      headers: {
        'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET,
        'x-hasura-role': 'user',
        Authorization: 'secret'
      }
    })

    client.setLink(httpLink)
  }

  return client
}

export default function initApollo(initialState: Record<string, any> = {}, options?: Options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser) {
    return create(initialState, options)
  }
  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options)
  }

  return apolloClient
}

export const client = initApollo()

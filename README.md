# Neno

# 🎉🎉 **Welcome to the Neno project** 🎉🎉

An online word guessing game. The game is played in groups of up to 8 players.

Players are assigned a letter and are to guess words that with the letter. The fastest to guess wins!

## Table Of Contents

- [Neno On-boarding](#neno-on-boarding)
- [🎉🎉 **Welcome to the Neno project** 🎉🎉](#-welcome-to-the-neno-project-)
  - [Table Of Contents](#table-of-contents)
    - [Things to learn](#things-to-learn)
  - [Frontend Technologies](#frontend-technologies)
  - [Backend Technologies](#backend-technologies)
  - [Installation](#installation)
  - [Scripts in the `package.json` file](#scripts-in-the-packagejson-file)
  - [Inside the `/src` folder](#inside-the-src-folder)
    - [`components` folder](#components-folder)
    - [`generated` folder](#generated-folder)
    - [`hooks` folder](#hooks-folder)
    - [`lib` folder](#lib-folder)
    - [`pages` folder](#pages-folder)
    - [`api` folder](#api-folder)
  - [**Code Quality**](#code-quality)
  - [Access Levels (Roles)](#access-levels-roles)
    - [User](#user)

### Things to learn

1. [Hasura Migrations and Metadata](https://hasura.io/docs/1.0/graphql/core/migrations/index.html)
2. [Hasura Actions.](https://hasura.io/docs/1.0/graphql/core/actions/index.html)
3. [Hasura Events](https://hasura.io/docs/1.0/graphql/core/event-triggers/index.html)
4. [Hasura Subscription](https://hasura.io/docs/1.0/graphql/core/subscriptions/index.html)
5. [Next.js _api_ folder](https://nextjs.org/docs/api-routes/introduction)
6. [Docker (learn how to configure and set up a Docker image)](https://www.docker.com/)
7. [GraphQL](https://graphql.org/learn/)

## Frontend Technologies

We use the following tech stack in the frontend part of the project:

- [TypeScript](https://www.typescriptlang.org/): We use TypeScript in all our web dev projects in Neno. this helps us to avoid type errors, write readable code, and maintain consistency throughout our codebase.
- [React](https://reactjs.org/): The most popular JavaScript framework in the world. We majorly use React.js to build projects because it is powerful, fast, and backed by Facebook with a large community. Also, importantly, it is still very in active support and maintained by Facebook.
- [Next.js](https://nextjs.org/): We use Next.js for server-side rendering. Next.js makes it easy to build an SSR-enabled React.js app with almost zero configuration, yet maintaining the powerful features of React.js and highly performant.
- [Apollo](https://www.apollographql.com/docs/react/): We use GraphQL endpoints majorly here at Neno, so we use Apollo in the client-side to communicate with our endpoints/GraphQL APIs. Apollo is very fast and easy to use, and also provide hooks we can use to query/mutate data.

## Backend Technologies

For the backend stack, we use:

- [Hasura](https://hasura.io/) (provides a GraphQL layer to the database) & Actions
- [GraphQL](http://www.graphql.org): Built by Facebook, GraphQL redefined REST. It made APIs very easy to understand and to build without getting unnecessarily complex. GraphQL enabled us to state exactly what we want to be fetched from the server, we have more control on what is returned unlike REST everything is returned by the server and we use the ones we need in our front-end. So, here at Neno we are fond of GraphQL and use it in our web dev projects.

Before we install the project, let's see the tools will be needing for this project:

- [Node.js](https://nodejs.org/en/download/)
- [Git Bash](https://git-scm.com/downloads)
- Browser (Chrome, Safari, Firefox, etc)
- NPM (comes bundled with Node.js)📦
- [Yarn](https://yarnpkg.com/getting-started/install) - a Node packaging manager 📦
- Code Editor ([VS Code](https://code.visualstudio.com/download), [Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/), [Vim](https://www.vim.org/download.php), [Bracket](http://brackets.io/), etc)

## Scripts in the `package.json` file

The `package.json` file has a scripts section 👇, the `scripts` contains commands that can be run in the terminal using yarn or NPM.

```json
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "./node_modules/.bin/prettier --write \"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\"",
    "check-types": "tsc --pretty --noEmit",
    "check-format": "prettier --check .",
    "check-lint": "eslint . --ext ts --ext tsx --ext js",
    "format": "prettier --write .",
    "codegen": "graphql-codegen --config codegen.js",
    "codegen:clean": "yarn codegen:clean-generated && yarn codegen:download && yarn codegen",
    "codegen:clean-generated": "rm -rf src/lib/graphql/**/__generated__ src/lib/graphql/globalTypes.ts src/shared/__generated__",
    "codegen:download": "apollo client:download-schema --config=src/lib/graphql/apollo.schema.config.js src/lib/graphql/schema.graphql"
  },
```

I will explain the commands that you will be using frequently:

`lint`: This command uses the `prettier` library to lint the `.js, .ts, .json, .tsx` files in the project. Linting means it scans for potential errors and wrong code constructs(e.g unused variables, unused imports, etc) and then, rearranges them using the best practices and also calls out the code and code-style errors.

In the terminal, the lint command is run like this:

```bash
➜  neno git:(dev) ✗ yarn lint
```

You will see it outputs the current file it is scanning as it moves through the files, and when finally it outputs `Done` along with the time it took to scan. This linting will cause the prettier to re-write some code-style error in the files, so you may commit the changes if any is found.

It is required to run this command when your about to commit and push your work.

`prettier-check` : This command checks for linting errors in the project. It is merely a check. If there is a code(e.g unused variables, unused imports, etc) or code-style error in the your work, it displays the error and the files on the terminal where the code errors occurred. If there are no errors, the check displays `Done` on the terminal.

To run the command, type this:

```bash
➜  neno git:(dev) ✗ yarn prettier-check
```

`type-check` : This command checks for any type errors in the code. Type errors occurs when there is a mismatch of data-types. A function expects to return a `string` but the return type is a `boolean` . In this condition, a type error will occur in the function head. Now, running the command:

```bash
➜  neno git:(dev) ✗ yarn type-check
```

will check for the mismatch type occurrences and when found displays the error on the terminal.

`dev:next` : This starts the Next.js server at port `3000`.

`build:next` : This builds the project to its production version. This makes sure their no errors when the project is being deployed to prod. Next.js compiles and pre-renders the pages to check for any errors. If any pre-render error occurs, here the tips to fix it:

- Make sure to move any non-pages out of the `pages` folder
- Check for any code that assumes a prop is available even when it might not be. e.g., have default data for all dynamic pages' props.
- Check for any out of date modules that you might be relying on

`codegen:clean` : This command uses `apollo-codegen` to generates relevant types to be mapped to our GraphQL queries and mutations. These generated types are what we then use in our query and mutation hooks to state the types.

To specify to the codegen what we would like to generate, a file `codegen.js` is passed to it.

See in the root folder of the `neno` project, you will see a file `codegen.js` this file holds our configuration:

```bash
module.exports = {
  schema: [
    {
      'https://neno.hasura.app/v1/graphql': {
        headers: {
          'x-hasura-access-key': 'secret'
        }
      }
    }
  ],
  documents: ['./src/lib/graphql/quries/*.ts', './src/**/*.tsx', './src/**/*.ts'],
  overwrite: true,
  generates: {
    './src/generated/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false
      }
    },
    './graphql.schema.json': {
      plugins: ['introspection']
    }
  }
}
```

the schema configuration points to `[https://neno.hasura.app/v1/graphql](https://neno.hasura.app/v1/graphql)` , this is where our GraphQL API lives. The Apollo codgen will fetch our remote schemas from the Hasura URL in the schema configuration. Also, the `documents` array property points to the files in the project where Apollo codegen will scan to generate the schema types of the queries and mutations. See it will search in the `./src/lib/graphql/queries` folder, in the `./src/` folder for `.ts` and `.tsx` files. The `generates` property defines the files the Apollo codegen will generate after scanning and generating the schema types.

1. `graphql.schema.json` - Introspection result of the GraphQL server goes into this file in JSON format.
2. `src/generated/graphql.tsx` - It will generate the necessary types for mapping GraphQL queries to Typescript.

**Note**: The files `graphql.schema.json` and `src/generated/graphql.tsx` are not to be edited. Looking in the files, you will see they contain the TypeScript types of our local queries and mutations and our remote schema.

If you add or modify any of the queries or mutations in the project, you will have to run this command:

```bash
➜  neno git:(dev) ✗ yarn generate
```

The schema types of the query/mutation you modified will be re-generated and stored in the `graphql.schema.json` and `src/generated/graphql.tsx` files.

Our queries and mutations are stored in the `src/lib/graphql` folder. Let's say in the `queries/rooms.ts` file, you modified this:

```tsx
export const GET_ACTIVE_ROOMS = gql`
  query getActiveRooms($privacy: rooms_privacy_enum) {
    rooms(
      where: { privacy: { _eq: $privacy }, active: { _eq: true } }
      order_by: { createdAt: desc }
    ) {
      active
      id
      host {
        email
        lastSeen
        username
      }
      rooms_members {
        id
        role
        member {
          email
          id
          lastSeen
          username
        }
        joinedAt
      }
      capacity
      createdAt
      hostId
      privacy
    }
  }
`;
```

You will have to run the `yarn generate` command to re-generate the schema type for the `GET_ACTIVE_ROOMS` query. If you do not run the command, you will have type errors.

The `GET_ACTIVE_ROOMS` query is used here:

```tsx
const { loading, data } = useQuery<
    GetActiveRoomsQuery,
    GetActiveRoomsQueryVariables
>(GET_ACTIVE_ROOMS, {
  variables: {
    // variables
  },
  fetchPolicy: "cache-and-network",
});
```

The `GetActiveRoomsQuery` is the typing of `GET_ACTIVE_ROOMS`. Let's see the `GetActiveRoomsQuery` definition:

Also, make sure to commit your changes when you modify the queries or mutations in the project. Also, make sure to ask the project manager to tell you if any changes happens on the remote schema so you generate the types for it too.

## Inside the `/src` folder

Let's look into the `src` folder, that’s where a lot of things happen.

The first folder in the `src` folder is the `components` folder.

### `components` folder

This is where all our generic React components are kept. These components are presentational components so they can be re-used anywhere in the project. So following best folder structure practices, we kept them here for easy access and maintainability.

Looking inside the folder you will see components **Paper,** **Card**, **Button**, etc these components renders what their names suggest. So, whenever we need a Map or a **Paper** in our pages when just import them and render.

### `generated` folder

This folder holds the `graphql.tsx` file. This file contains the schema types from our project and the remote schema. It is generated whenever we run the `yarn generate` command.

⚠️ **Do not touch this file.**

### `hooks` folder

This folder contains our custom React hooks. They are re-usable so they are stored here for easy reference and import.

### `lib` folder

Here, the folder you should know for now is the `graphql` folder under this.

`lib/graphql/queries`

- **games.ts**: Contains queries for fetching games.
- **rooms.ts**: Contains queries for fetching employees.
- **users.ts**: contains queries for fetching users.

`lib/graphql/mutations.ts`

- **rooms.ts**: Contains mutations for rooms.
- **users.ts**: Contains mutations for users.

### `pages` folder

The `pages` folder contains Pages and dynamic routes. You will be working more on the `rooms` pages. So if you look in the `rooms` folder, you will see `detail/` , `wizard/` and `index.tsx` . The `index.tsx` contains component that will be rendered when the route `[localhost:3000/rooms](http://localhost:3000/rooms)` is navigated to. The `detail/` folder contains routes for `[localhost:3000/details/*](http://localhost:3000/details/*)` , this is where we can view rooms details, edit rooms, add doctor.

### `api` folder

This contains the APIs of our project. Next.js uses the folders and files in the `api` folder to derive the endpoints of our project.

These are the folders you have to know now.

## Access Levels (Roles)

There are 3 access levels in the application right now (the list might grow), each access level has its own restrictions, meaning there is a limited set of actions each role can perform. Below are the access levels:

- Admin
- Sales
- Clinic

### User

The admin role is the topmost access level because it has permissions to perform most of **Sales** The persons with the admin role have access to perform the below actions:

- can view all rooms
- create, update clinic
- can update clinic status and activities
- approve new rooms created through self-registration
- create, approve and request modifications on contracts

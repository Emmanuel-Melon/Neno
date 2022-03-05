import { gql } from '@apollo/client'

export const GET_ONLINE_USERS = gql`
query getOnlineUsers {
  users {
    id
    name
    guest
}
}`;
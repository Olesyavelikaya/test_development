import { gql } from "@apollo/client";

export const REFRESH_TOKEN = gql`
  mutation RefreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken) {
      access_token
      refresh_token
    }
  }
`;
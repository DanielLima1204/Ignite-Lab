import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oxssrt176301xtgvgh30i9/master',
  cache: new InMemoryCache()
})
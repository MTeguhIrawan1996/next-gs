import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { notifications } from '@mantine/notifications';

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}`,
});

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    const blackList = [
      'ReadAllProvincies',
      'ReadAllRegencies',
      'ReadAllActiveDinases',
      'ReadAllSchools',
      'ReadAllFilterYear',
    ];
    if (blackList.includes(operation.operationName)) {
      return;
    }
    graphQLErrors.forEach(() =>
      notifications.show({
        color: 'red',
        title: 'Terjadi kesalahan',
        message: 'Mohon coba lagi',
      })
    );
  }

  if (networkError) {
    notifications.show({
      color: 'red',
      title: 'Terjadi kesalahan server',
      message: 'Mohon coba lagi',
    });
  }
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, httpLink]),
});

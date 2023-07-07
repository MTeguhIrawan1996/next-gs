import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { notifications } from '@mantine/notifications';

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_GRAPHQL_API_URL}`,
});

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  const blackList = [
    'ReadAllProvincies',
    'ReadAllRegencies',
    'ReadAllActiveDinases',
    'ReadAllSchools',
    'ReadAllFilterYear',
  ];
  const errorActions = {
    BAD_REQUEST: () => {
      if (blackList.includes(operation.operationName)) {
        return;
      }
      notifications.show({
        color: 'red',
        title: 'Terjadi kesalahan',
        message: 'Mohon coba lagi',
      });
    },
    // Tambahkan kode kesalahan lain dan aksi yang sesuai di sini
  };

  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      const errorCode = err.extensions.code;
      const errorAction = errorActions[errorCode as any];
      if (errorAction) {
        errorAction();
      }
    }
  }

  if (networkError) {
    if (blackList.includes(operation.operationName)) {
      return;
    }
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

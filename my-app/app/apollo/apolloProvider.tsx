'use client';

import { ApolloProvider } from '@apollo/client';
import client from './client';

interface ApolloClientProviderProps {
  children: React.ReactNode;
}

const ApolloClientProvider: React.FC<ApolloClientProviderProps> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
};

export default ApolloClientProvider;
import LoginForm from './loginForm';
import ApolloClientProvider from '../apollo/apolloProvider';

export default function LoginPage() {
  return (
    <ApolloClientProvider>
    <div className="flex justify-center items-center h-screen">
      <LoginForm />
    </div>
    </ApolloClientProvider>
  );
}
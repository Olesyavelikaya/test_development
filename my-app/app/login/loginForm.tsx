'use client';

import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LOGIN_MUTATION } from '../apollo/loginMutation';
import { REFRESH_TOKEN } from "../apollo/refreshTokenMutation";
import { useAuthStore } from '../store/userAuthStore';


export default function LoginForm() {
  const [login, { loading: loginLoading, error: loginError }] = useMutation(LOGIN_MUTATION);
  const [refreshToken, { loading: refreshLoading, error: refreshError }] = useMutation(REFRESH_TOKEN);
  const setTokens = useAuthStore((state) => state.setTokens);
  const router = useRouter();
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = (event.target as HTMLFormElement).email.value;
    const password = (event.target as HTMLFormElement).password.value;

    try {
      const { data } = await login({ variables: { email, password } });
      const { access_token, refresh_token } = data.login;
      setTokens(access_token, refresh_token);
      router.push('/my-info/time-off');
      console.log(access_token);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRefreshToken = async () => {
    const refreshTokenFromStore = useAuthStore.getState().refresh_token;
    if (!refreshTokenFromStore) {
      console.error('No refresh token found');
      return;
    }
    try {
      const { data } = await refreshToken({ variables: { refreshToken: refreshTokenFromStore } });
      const { access_token, refresh_token } = data.refreshToken;
      setTokens(access_token, refresh_token);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-sm bg-white">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2 mt-4">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <CardFooter className="mt-4 p-0 ">
              <Button className="w-full bg-black text-white" type="submit" disabled={loginLoading}>
                {loginLoading ? 'Logging in...' : 'Sign in'}
              </Button>
            </CardFooter>
          </form>
          {loginError && <p className="text-red-500">Error: {loginError.message}</p>}
          <Button className="w-full bg-black text-white" onClick={handleRefreshToken} disabled={refreshLoading}>
            {refreshLoading ? 'Refreshing token...' : 'Refresh Token'}
          </Button>
          {refreshError && <p className="text-red-500 ">Error: {refreshError.message}</p>}
        </CardContent>
      </Card>
    </div>
  );
}
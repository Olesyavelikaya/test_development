import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { useAuthStore } from './app/store/userAuthStore';

export function middleware(request: NextRequest) {
  const access_token = useAuthStore.getState().access_token;

  if (!access_token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
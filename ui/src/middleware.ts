import { NextResponse, NextRequest } from 'next/server';
import { getUserFromToken } from './utils/user';

const protectedRoutes = ['/dashboard', '/surveys'];
const authRoutes = ['/login', '/signup'];

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get User and Access Token
  const cookies = request.cookies;
  const accessToken = cookies.get('coe-auth')?.value;
  const { user } = getUserFromToken(accessToken);

  // If not logged in and on a /dashboard/* route, then redirect to sign in
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!user) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  // If logged in and on /login or /signup route, then redirect to Dashboard
  if (authRoutes.some((route) => pathname.startsWith(route))) {
    if (user) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Add paths that should be accessible without authentication
const publicPaths = ['/signin', '/signup', '/forgot-password']

// Helper function to check if a path is public
const isPublicPath = (pathname: string): boolean => {
  return publicPaths.some(path =>
    path === '/' ? pathname === path : pathname.startsWith(path)
  )
}

// Helper function to validate token format
const isValidToken = (token: string | undefined): boolean => {
  if (!token) return false
  // Add your token validation logic here
  // For example, check if it's a valid JWT format
  return token.length > 0
}

export function middleware(request: NextRequest) {
  try {
    const { pathname } = request.nextUrl

    // Check if the path is public
    const isPublic = isPublicPath(pathname)

    // Get and validate the token
    const token = request.cookies.get('accessToken')?.value
    const isAuthenticated = isValidToken(token)


    // If the path is public and user is authenticated, redirect to dashboard
    if (isPublic && isAuthenticated) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    // If the path is protected and user is not authenticated, redirect to signin
    if (!isPublic && !isAuthenticated) {
      console.log("inside protected")
      const signinUrl = new URL('/signin', request.url)
      signinUrl.searchParams.set('from', pathname)
      return NextResponse.redirect(signinUrl)
    }

    return NextResponse.next()
  } catch (error) {
    // Log the error for monitoring
    console.error('Middleware error:', error)

    // In case of error, redirect to error page or home
    return NextResponse.redirect(new URL('/', request.url))
  }
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
} 
import { NextResponse } from 'next/server'
 
export function middleware(request) {
  return NextResponse.redirect(new URL('/redirectme', request.url))
}
 
export const config = {
  matcher: '/middleware-redirect',
}

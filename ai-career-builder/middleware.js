// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
// import { NextResponse } from 'next/server';

// const isProtectedRoute = createRouteMatcher ([
//   "/dashboard(.*)",
//   "/resume(.*)", 
//   "/interview(.*)",
//   "/ai-cover-letter(.*)",

// ])
 
// export default clerkMiddleware(async(auth,req)=> {
//   const {userId} = await auth();
//   if(!userId && isProtectedRoute(req)) {
//     const {redirectToSignIn} = await auth();
//     return redirectToSignIn();
//   }
//   return NextResponse.next();
// });

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// };
// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define which routes require authentication
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/resume(.*)",
  "/interview(.*)",
  "/ai-cover-letter(.*)",
]);

// Apply Clerk middleware
export default clerkMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-up"],

  async afterAuth(auth, req) {
    const { userId, redirectToSignIn } = auth;

    // Redirect to sign-in if the route is protected and the user is not signed in
    if (!userId && isProtectedRoute(req)) {
      return redirectToSignIn();
    }

    return NextResponse.next();
  },
});

// ✅ This tells Next.js which routes to apply middleware to
export const config = {
  matcher: [
    // Match all routes except static files and Next.js internals
    '/((?!_next|favicon.ico|.*\\..*).*)',
  ],
};

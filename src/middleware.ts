// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth({
  pages: {
    signIn: "/auth",
    error: "/auth",
  },
  callbacks: {
    authorized: ({ token }) => {
      // Add additional authorization logic here if needed
      return !!token;
    },
  },
});

export const config = {
  matcher: [
    "/users/:path*",
    "/dashboard/:path*",
    // Only protect specific API routes, not all of them
    "/api/protected/:path*",
    // You can add other specific API routes that need protection
    // "/api/admin/:path*",
    // "/api/user/:path*",

    // DO NOT include "/api/:path*" or "/sanity/:path*" as it blocks registration and other public endpoints
  ],
};

// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth({
  pages: {
    signIn: "/auth",
    error: "/auth",
  },
  callbacks: {
    authorized: ({ token, req }) => {
      // Protect specific routes
      const protectedRoutes = [
        "/studio",
        "/users",
        "/dashboard",
        "/api/protected",
      ];

      const isProtected = protectedRoutes.some((route) =>
        req.nextUrl.pathname.startsWith(route)
      );

      // If accessing a protected route, require authentication
      if (isProtected) {
        return !!token;
      }

      // Allow access to public routes
      return true;
    },
  },
});

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - auth page
     * - room pages (adjust as needed)
     */
    "/((?!_next/static|_next/image|favicon.ico|auth|room|api/public).*)",
  ],
};

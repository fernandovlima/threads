// Resource: https://clerk.com/docs/nextjs/middleware#auth-middleware
// Copy the middleware code as it is from the above resource

import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

export default authMiddleware({
  // An array of public routes that don't require authentication.
  publicRoutes: ["/api/webhook/clerk"],

  // An array of routes to be ignored by the authentication middleware.
  ignoredRoutes: ["/api/webhook/clerk"],
  afterAuth(auth, req, evt) {
    // handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define the public routes
const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)", // Public sign-in page
  "/", // Root page
  "/about(.*)", // About page
  "/services(.*)", // Services page
  "/blog(.*)", // Blog page
  "/project(.*)", // Project page
  "/contact(.*)", // Contact page
]);

export default clerkMiddleware(async (auth, request) => {
  // Save the redirect URL from query parameters if available
  const url = new URL(request.url);
  const redirectUrl = url.searchParams.get("redirect_url");

  if (!isPublicRoute(request)) {
    // Protect routes that are not public
    await auth.protect();
  } else if (redirectUrl) {
    // If user is already authenticated and on sign-in page with a redirect_url parameter
    // redirect them to the specified URL after login
    return Response.redirect(new URL(redirectUrl, request.url));
  } else if (isPublicRoute(request)) {
    // If user is already authenticated and on a public page without redirect_url
    // redirect to default dashboard/home
    return Response.redirect(new URL("/learning", request.url));
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

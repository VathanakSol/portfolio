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
  "/buy-me-coffee(.*)", // Buy me coffee page
  "/ads.txt(.*)", // Ads.txt page
]);

export default clerkMiddleware(async (auth, request) => {
  // Save the redirect URL from query parameters if available
  const url = new URL(request.url);
  const redirectUrl = url.searchParams.get("redirect_url");
  const pathname = url.pathname;

  if (!isPublicRoute(request)) {
    // Protect routes that are not public
    await auth.protect();
  } else if (redirectUrl) {
    // If user is already authenticated and on sign-in page with a redirect_url parameter
    // redirect them to the specified URL after login
    return Response.redirect(new URL(redirectUrl, request.url));
  } else if (pathname.startsWith("/sign-in")) {
    // If user is already authenticated and on the sign-in page
    // redirect to default dashboard/home
    return Response.redirect(new URL("/overview", request.url));
  }
  // Allow authenticated users to access the root page
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

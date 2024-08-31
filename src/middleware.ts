import { auth } from "./lib/auth";

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== "/signin") {
    const newUrl =
      new URL("/signin", req.nextUrl.origin) ||
      new URL("/signup", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
  if (req.auth && req.nextUrl.pathname === "/signin") {
    return Response.redirect(new URL("/", req.nextUrl.origin));
  }
  if (req.auth && req.nextUrl.pathname === "/signup") {
    return Response.redirect(new URL("/", req.nextUrl.origin));
  }
  if (req.nextUrl.pathname === "/") {
    return Response.redirect(new URL("/home", req.nextUrl.origin));
  }
  if (req.nextUrl.pathname === "/nootbook") {
    return Response.redirect(new URL("/nootbook/overview", req.nextUrl.origin));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

import { NextRequest, NextResponse } from "next/server";

const authMiddleware = async (request: NextRequest) => {
  const tokenCookie = await request.cookies.get("token");
  const token = tokenCookie?.value;

  if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
    // Token yoksa ve /dashboard sayfasına istek yapılıyorsa, /login sayfasına yönlendir
    return NextResponse.redirect(new URL("/login", request.url));
  } else if (
    token &&
    (request.nextUrl.pathname.startsWith("/login") ||
      request.nextUrl.pathname.startsWith("/register"))
  ) {
    // Token varsa ve /login veya /register sayfasına istek yapılıyorsa, /dashboard/statistic sayfasına yönlendir
    return NextResponse.redirect(new URL("/dashboard/statistic", request.url));
  }
};

export default authMiddleware;

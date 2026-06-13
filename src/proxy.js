import { NextResponse } from "next/server";

// Keystatic runs in LOCAL mode: the admin UI at /keystatic (and its API) write
// content straight to the local filesystem. That's perfect for editing on your
// machine with `npm run dev`, but it must never be reachable on the deployed
// site — there it would be an unauthenticated write surface, and any change
// wouldn't survive the next git deploy anyway. So we 404 it in production.
export function proxy() {
  if (process.env.NODE_ENV === "production") {
    return new NextResponse("Not found", { status: 404 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/keystatic/:path*", "/api/keystatic/:path*"],
};

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname === "/" &&
    req.headers.get("user-agent")?.includes("curl")
  ) {
    return NextResponse.rewrite(new URL("/api/resume", req.url))
  }

  return NextResponse.next()
}

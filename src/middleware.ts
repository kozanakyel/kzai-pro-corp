import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";


const sessionCache = new Map<string, any>();

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const cacheKey = req.headers.get('cookie') || '';

  if (sessionCache.has(cacheKey)) {
    const session = sessionCache.get(cacheKey);
    console.log('session (from cache): ', session);

    if (!session) {
      return NextResponse.rewrite(new URL('/login', req.url));
    }

    return res;
  }

  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session }
  } = await supabase.auth.getSession();

  console.log('session: ', session);


  sessionCache.set(cacheKey, session);

  if (!session) {
    return NextResponse.rewrite(new URL('/login', req.url));
  }

  return res;
}

// what is this?
// we go to to this middleware except below matcher otherwise we go to middleware results.
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
};
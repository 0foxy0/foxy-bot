import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { fetchValidGuild } from "../../../utils/api";

const validateMiddlewareCookies = (req: NextRequest) => {
    const sessionID = req.cookies["connect.sid"];

    return sessionID 
      ? {
            Cookie: `connect.sid=${sessionID}`,
        }
      : false;
};

export async function middleware(req: NextRequest, fetch: NextFetchEvent) {
    const url = req.nextUrl.clone();
    url.pathname = '/menu';
    const url2 = req.nextUrl.clone();
    url2.pathname = '/';

    const headers = validateMiddlewareCookies(req);
    if (!headers) return NextResponse.redirect(url2);
    if (!req.page.params) return NextResponse.redirect(url);

    const { id } = req.page.params;
    const response = await fetchValidGuild(id, headers);

    return response.status === 200 ? NextResponse.next() : NextResponse.redirect(url);
};
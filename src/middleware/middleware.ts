import { NextApiRequest, NextApiResponse } from 'next';
import { withAuth } from 'next-auth/middleware';

export default withAuth(async function middleware(req) {
  const pathname = req.nextUrl.pathname;
});

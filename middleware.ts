import { NextRequest, NextResponse } from 'next/server';
import { i18n } from './app/i18n/config';

const ALLOWED_IPS = [
  '127.0.0.1',
  '::1',
  '31.146.53.186',
];

export function middleware(request: NextRequest) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    '';

  if (!ALLOWED_IPS.includes(ip)) {
    return new NextResponse('Access denied', { status: 403 });
  }

  const { pathname } = request.nextUrl;

  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/fonts') ||
    pathname.startsWith('/media') ||
    pathname.includes('.')
  ) {
    return;
  }

  const acceptLanguage = request.headers.get('accept-language') || '';
  const detectedLocale = getPreferredLocale(acceptLanguage);

  const locale = detectedLocale || i18n.defaultLocale;
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

function getPreferredLocale(acceptLanguage: string): string | null {
  const languages = acceptLanguage
    .split(',')
    .map((lang) => {
      const [code, quality] = lang.trim().split(';q=');
      return {
        code: code.trim().toLowerCase(),
        quality: quality ? parseFloat(quality) : 1,
      };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { code } of languages) {
    const exact = i18n.locales.find((l) => l === code);
    if (exact) return exact;

    const prefix = code.split('-')[0];
    const match = i18n.locales.find((l) => l === prefix);
    if (match) return match;
  }

  return null;
}

export const config = {
  matcher: ['/((?!_next|api|fonts|media|.*\\..*).*)'],
};

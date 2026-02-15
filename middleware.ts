import { NextRequest, NextResponse } from 'next/server';
import { i18n } from './app/i18n/config';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already has a locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Skip static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/fonts') ||
    pathname.startsWith('/media') ||
    pathname.includes('.') // static files
  ) {
    return;
  }

  // Detect locale from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') || '';
  const detectedLocale = getPreferredLocale(acceptLanguage);

  // Redirect to locale-prefixed path
  const locale = detectedLocale || i18n.defaultLocale;
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

function getPreferredLocale(acceptLanguage: string): string | null {
  const languages = acceptLanguage
    .split(',')
    .map((lang) => {
      const [code, quality] = lang.trim().split(';q=');
      return { code: code.trim().toLowerCase(), quality: quality ? parseFloat(quality) : 1 };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { code } of languages) {
    // Exact match
    const exact = i18n.locales.find((l) => l === code);
    if (exact) return exact;

    // Prefix match (e.g., "en-US" -> "en")
    const prefix = code.split('-')[0];
    const match = i18n.locales.find((l) => l === prefix);
    if (match) return match;
  }

  return null;
}

export const config = {
  matcher: ['/((?!_next|api|fonts|media|.*\\..*).*)'],
};

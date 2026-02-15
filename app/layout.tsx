import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Valaskar — Clean Crypto Infrastructure",
  description:
    "A decentralized virtual world of 10,000 independent lands, powered by blockchain. Built around a flagship AAA survival game.",
  icons: {
    icon: {
      url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 293 344'><path d='M48.3794 0H96.8927L124.986 281.507L131.866 287.24L240.366 4.11155H287.306L144.201 344H86.1829L48.3794 0Z' fill='%23AA9245'/><path d='M15.2109 145.076L292.4 87.1466L277.517 121.547L0 178.88L15.2109 145.076Z' fill='%23AA9245'/><path d='M15.2109 213.876L292.4 155.947L277.517 190.347L0 247.68L15.2109 213.876Z' fill='%23AA9245'/></svg>",
      type: "image/svg+xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

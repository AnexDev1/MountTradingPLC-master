import type { Metadata } from 'next';
import './globals.css';
import { Montserrat, Roboto } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Mount Trading PLC',
  description: 'Enhance Healthcare Together.',
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['900', '700', '400', '500', '300', '100'],
  variable: '--font-montserrat',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['900', '700', '400', '500', '300', '100'],
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${montserrat.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import '../index.css';

export const metadata: Metadata = {
  title: 'AAA',
  description: 'AAA Admin',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}

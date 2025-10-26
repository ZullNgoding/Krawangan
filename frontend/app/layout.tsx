import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Krawangan & Roster Beton - Produk Beton Tarakan',
  description: 'Pemasok profesional produk beton berkualitas tinggi termasuk krawangan dan roster beton di Tarakan. Solusi beton yang tahan lama, handal, dan terjangkau untuk kebutuhan konstruksi Anda.',
  keywords: 'krawangan, roster beton, produk, Tarakan, material konstruksi bangunan',
  authors: [{ name: 'Produk Beton Tarakan' }],
  openGraph: {
    title: 'Krawangan & Roster Beton - Produk Beton Tarakan',
    description: 'Pemasok profesional produk beton berkualitas tinggi di Tarakan',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}

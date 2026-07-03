import './globals.css';

export const metadata = {
  title: 'Is This To Code?',
  description: 'Let it burn',
  manifest: '/manifest.json',
  icons: {
    icon: '/fire.png',
    apple: '/logo192.png',
  },
};

export const viewport = {
  themeColor: '#000000',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

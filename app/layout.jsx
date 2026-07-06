import './globals.css';

export const metadata = {
  title: 'Not much is ok, actually',
  description: 'Band. From Portland, Oregon.',
  manifest: '/manifest.json',
  icons: {
    icon: '/iconUs.png',
    apple: '/iconUs.png',
  },
};

export const viewport = {
  themeColor: '#000000',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="ZSwLCovjiW_aaTKiw5IiqCRLEE76HMrHyD5Os4CMSac" />
      </head>
      <body>{children}</body>
    </html>
  );
}

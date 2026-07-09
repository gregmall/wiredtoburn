import './globals.css';

export const metadata = {
  title: 'New Album Out Now!',
  description: 'Band. From Portland, Oregon.',
  manifest: '/manifest.json',
  icons: {
    icon: '/pulse_icon.ico',
    apple: '/iconUs.png',
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

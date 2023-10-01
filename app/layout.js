import './globals.css';

export const metadata = {
  title: 'My Developer Portfolio',
  description: 'Developer portfolio showcasing the web development skills',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className=''>{children}</body>
    </html>
  );
}

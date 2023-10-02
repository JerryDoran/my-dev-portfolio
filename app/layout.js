import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import 'boxicons/css/boxicons.min.css';

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

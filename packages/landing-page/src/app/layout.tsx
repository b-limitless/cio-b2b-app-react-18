import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import '../../styles/index.scss';

const inter = Poppins({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "Welcome to ensemble crafts! We empower businesses to create unique.",
  description: "We offers a comprehensive solution for businesses seeking to streamline their customization process. Our platform is designed to simplify every step, from uploading product designs to managing customer orders. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Welcome to ensemble crafts! We empower businesses to create unique.</title>
        <link rel="icon" type="image/x-icon" href="/svg/favicon.svg"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

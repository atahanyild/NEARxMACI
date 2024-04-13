import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/components/Provider/AppProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NEVO",
  description: "Generated by Near",
  icons: [
    {
      rel: "icon",
      url: "/icon.png",
      sizes: "100x100",
      type: "image/x-icon",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <AppProvider>
          <div className="bg-white w-full h-screen">{children}</div>
        </AppProvider>
      </body>
    </html>
  );
}

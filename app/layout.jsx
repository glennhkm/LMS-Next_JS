import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "../components/header";
import { Toaster } from "react-hot-toast";
import { localization } from "../components/localization/localization";

export const metadata = {
  title: "LMS Project",
  // description: 'Generated by create next app',
};

export default function RootLayout({ children, pageProps }) {
  return (
    <ClerkProvider localization={localization} {...pageProps}>
      <html lang="en">
        <body className="font-poppins font-normal w-full h-full text-black">
          <div className="sticky top-0">
            <Header />
          </div>
          <div className="px-5 md:px-12 h-full">
            {children}
            <Toaster />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}

import "./globals.css";
import {
  robotoFont,
  montserratFont,
  montserratAlternatesFont,
  openSansFont,
  shantellSansFont,
  paytoneOneFont,
  cormorantFont,
  comfortaaFont,
  playfairFont,
} from "./fonts";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import DesktopNavbar from "@/components/DesktopNavbar";

export const metadata: Metadata = {
  title: "Halyn Lens",
  description:
    "Um mundo onde todos possam expressar quem são sem medo por meio da fotografia.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${robotoFont.variable} ${montserratFont.variable} 
      ${montserratAlternatesFont.variable} ${openSansFont.variable} 
      ${shantellSansFont.variable} ${paytoneOneFont.variable} 
      ${cormorantFont.variable} ${comfortaaFont.variable} ${playfairFont.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen">
            <DesktopNavbar />

            <main className="">
              {/* container to center the content */}
              {children}
            </main>
          </div>
          {/* <Toaster /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}

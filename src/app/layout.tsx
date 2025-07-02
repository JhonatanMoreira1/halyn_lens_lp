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
import Script from "next/script";

export const metadata: Metadata = {
  title: "Halyn Lens",
  description:
    "Um mundo onde todos possam expressar quem são sem medo por meio da fotografia.",
  icons: {
    icon: "/favicon.ico",
  },
};

export {};

declare global {
  interface Window {
    chatbase?: (...args: unknown[]) => void;
  }
}

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
          {/* Chatbase Script */}
          <Script id="chatbase-script" strategy="afterInteractive">
            {`
            (function(){
              if(!window.chatbase || window.chatbase("getState") !== "initialized") {
                window.chatbase = (...arguments) => {
                  if (!window.chatbase.q) {
                    window.chatbase.q = [];
                  }
                  window.chatbase.q.push(arguments);
                };
                window.chatbase = new Proxy(window.chatbase, {
                  get(target, prop) {
                    if (prop === "q") {
                      return target.q;
                    }
                    return (...args) => target(prop, ...args);
                  }
                });
              }
              const onLoad = function() {
                const script = document.createElement("script");
                script.src = "https://www.chatbase.co/embed.min.js";
                script.id = "IbN491ISlGsehwkpJVR34";
                script.domain = "www.chatbase.co";
                document.body.appendChild(script);
              };
              if (document.readyState === "complete") {
                onLoad();
              } else {
                window.addEventListener("load", onLoad);
              }
            })();
          `}
          </Script>
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

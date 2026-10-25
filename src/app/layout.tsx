import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import TopBar from "@/components/layout/top-bar";
import JsonLd from "@/components/seo/jsonld";
import { QueryProvider } from "@/providers/query-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Montserrat, Work_Sans } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
});

export const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://innerspace.com.au"),

  title: {
    default: "InnerSpace",
    template: "%s | InnerSpace",
  },

  description: "Compassionate and personalised disability support services.",

  openGraph: {
    title: "InnerSpace",
    description: "Compassionate and personalised disability support services.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning>
      <body className={`${montserrat.variable} ${workSans.variable}`}>
        <ThemeProvider>
          <QueryProvider>
            <JsonLd />
            <TopBar />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

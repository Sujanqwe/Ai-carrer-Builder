import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import ThemeWrapper from "@/components/theme-wrapper"; // ✅ this
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <ThemeWrapper>
        <div className={inter.className}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
          <footer className="bg-muted/50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-200">
              <p>Made with 💗 by RoadsideCoder</p>
            </div>
          </footer>
        </div>
      </ThemeWrapper>
    </ClerkProvider>
  );
}

"use client";

import { ThemeProvider } from "@/components/provider/theme-provider";

export default function ThemeWrapper({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}

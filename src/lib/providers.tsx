"use client";

import { ComponentProps, ReactNode } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";

export const ThemeProvider = ({
  children,
  ...props
}: ComponentProps<typeof NextThemeProvider>) => {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};

interface Providers {
  children: ReactNode;
}

const Providers = ({ children }: Providers) => {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
      >
        {children}
        <Toaster richColors closeButton />
      </ThemeProvider>
    </ClerkProvider>
  );
};
export default Providers;

import { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import HomeNavbar from "@/modules/home/ui/components/home-navbar";
import HomeSidebar from "@/modules/home/ui/components/home-sidebar.tsx";

interface LayoutProps {
  children: ReactNode;
}

export const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <HomeNavbar />
        <div className="flex min-h-screen pt-[4rem]">
          <HomeSidebar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};

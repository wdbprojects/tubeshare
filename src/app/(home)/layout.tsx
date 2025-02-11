import { ReactNode } from "react";
import { HomeLayout } from "@/modules/home/ui/layouts/home-layout";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <HomeLayout>{children}</HomeLayout>;
};

export default Layout;

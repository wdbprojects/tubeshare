import DarkMode from "@/components/shared/dark-mode";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import SearchInput from "./search-input";
import AuthButton from "@/modules/auth/ui/components/auth-button";

const HomeNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 flex items-center px-2 pr-5 z-50 border-b bg-background">
      <div className="flex items-center justify-between gap-4 w-full">
        {/* Menu & Logo */}
        <div className="flex items-center flex-shrink-0 gap-2">
          <SidebarTrigger className="" />
          <Link href="/">
            <div className="flex flex-row items-center gap-1">
              <Image
                src="/logo.svg"
                height={32}
                width={32}
                alt="Tubeshare Logo"
              />
              <p className="text-foreground font-semibold text-sm tracking-tight">
                TubeShare
              </p>
            </div>
          </Link>
        </div>
        {/* Search box */}
        <div className="flex-1 flex justify-center max-w-[720px] mx-auto">
          <SearchInput />
        </div>
        {/* Buttons and triggers */}
        <div className="flex-shrink-0 items-center flex gap-4">
          <DarkMode />
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
export default HomeNavbar;

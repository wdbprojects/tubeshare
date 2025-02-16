"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { mainMenuItems } from "@/lib/data";
import { useAuth, useClerk } from "@clerk/nextjs";
import Link from "next/link";
const MainSection = () => {
  const clerk = useClerk();
  const { isSignedIn } = useAuth();

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {mainMenuItems.map((item) => {
            const { title, url } = item;
            return (
              <SidebarMenuItem key={title}>
                <SidebarMenuButton
                  asChild
                  tooltip={title}
                  isActive={false} // TODO: change to look at current pathname
                  onClick={(event) => {
                    if (!isSignedIn && item.auth) {
                      event.preventDefault();
                      return clerk.openSignIn();
                    }
                  }}
                >
                  <Link href={url} className="flex items-center gap-4">
                    <item.icon />
                    <span className="text-sm">{title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
export default MainSection;

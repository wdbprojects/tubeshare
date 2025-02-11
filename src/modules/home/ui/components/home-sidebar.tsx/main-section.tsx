"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { mainMenuItems } from "@/lib/data";
import Link from "next/link";
const MainSection = () => {
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
                  onClick={() => {}} // TODO: do something on click
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

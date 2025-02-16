"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { UserCircle2Icon } from "lucide-react";

const AuthButton = () => {
  return (
    <>
      <SignedIn>
        <UserButton />
        {/* // TODO: add menu items for Studio and User profile  */}
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            className="font-medium flex items-center gap-2 justify-center rounded-full shadow-none [&_svg]:size-5"
            variant="default"
          >
            <UserCircle2Icon size="32" strokeWidth={1.25} />
            <span className="font-medium tracking-tighter">Sign in</span>
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
export default AuthButton;

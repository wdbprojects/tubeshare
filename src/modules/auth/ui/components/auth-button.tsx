import { Button } from "@/components/ui/button";
import { UserCircle2Icon } from "lucide-react";

const AuthButton = () => {
  // TODO: add different auth states

  return (
    <Button
      variant="outline"
      className="hover:bg-transparent  font-medium text-default flex items-center gap-2 justify-center rounded-full shadow-none [&_svg]:size-5"
    >
      <UserCircle2Icon size="32" strokeWidth={1.25} />
      <span className="font-semibold tracking-tighter">Sign in</span>
    </Button>
  );
};
export default AuthButton;

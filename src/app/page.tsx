import DarkMode from "@/components/dark-mode";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-rose-400">Welcome to Tubeclone</h1>
      <Button>Testing Button</Button>
      <DarkMode />
    </div>
  );
}

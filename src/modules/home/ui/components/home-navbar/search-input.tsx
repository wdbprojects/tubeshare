import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchInput = () => {
  {
    // TODO: add search functionality
  }
  return (
    <form className="flex w-full max-w-[600px]">
      <div className="relative w-full">
        <Input
          type="text"
          placeholder="Search for videos..."
          className="w-full pl-4 pr-12 shadow-none rounded-l-full focus-visible:outline-none focus-visible:ring-0 border focus:outline-none focus:border-blue-500"
        />
        {/* // TODO: add remove search button */}
      </div>
      <Button
        type="submit"
        className="px-5 py-2.5 border border-l-0 rounded-none rounded-r-full flex items-center justify-center [&_svg]:size-5"
        variant="secondary"
      >
        <Search
          size={28}
          strokeWidth={1.25}
          className="w-20 h-20 text-muted-foreground"
        />
      </Button>
    </form>
  );
};
export default SearchInput;

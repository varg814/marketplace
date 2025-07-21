import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import { Search } from "lucide-react";

interface SearchBarProps {
  className?: string;
}

export default function SearchBar({ className = "" }: SearchBarProps) {
  return (
    <div className={`w-full max-w-[600px] h-10 flex rounded-full bg-white ${className}`}>
      <Input
        className="flex-grow h-full px-3 border rounded-tl-full rounded-bl-full border-r-0 outline-0"
        placeholder="search..."
      />
      <Button
        aria-label="Search"
        className="group h-full px-4 flex items-center justify-center border rounded-tr-full rounded-br-full cursor-pointer hover:bg-black"
      >
        <Search className="w-4 h-4 text-black group-hover:text-white" />
      </Button>
    </div>
  );
}

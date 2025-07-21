import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import { Search } from "lucide-react";

interface SearchBarProps {
  className?: string;
}

export default function SearchBar({ className = "" }: SearchBarProps) {
  return (
    <div className={`w-full max-w-[600px] h-10 flex rounded-full bg-gray-300 ${className}`}>
      <Input
        className="flex-grow h-full px-3 rounded-tl-full rounded-bl-full border-r-0 outline-0 bg-gray-300"
        placeholder="search..."
      />
      <Button
        aria-label="Search"
        className="h-full px-4 flex items-center justify-center rounded-tr-full rounded-br-full cursor-pointer bg-gray-300 hover:bg-gray-400"
      >
        <Search className="w-4 h-4 text-black hover:bg-gray-400" />
      </Button>
    </div>
  );
}

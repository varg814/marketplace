import Logo from "../../atoms/Logo/Logo";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import UserActions from "../../molecules/UserActions/UserActions";

export default function NavBar() {
  return (
    <nav className="w-full bg-gray-200">
      <div className="max-w-[1488px] mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center justify-between w-[55%] gap-5">
          <Logo />
          <SearchBar/>
        </div>
        <UserActions />
      </div>
    </nav>
  );
}

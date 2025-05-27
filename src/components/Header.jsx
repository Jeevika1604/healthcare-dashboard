import { Bell, Search } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 w-full search">
      <div className="flex items-center gap-4">
        <Search color="#2f3299"/>
        <input type="text" placeholder="Search..." className="outline-none " />
      </div>
      <Bell fill="#2f3299" color="#2f3299"/>
    </div>
  );
};

export default Header;

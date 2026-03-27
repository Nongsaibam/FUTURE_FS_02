import { Bell, User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="glass flex justify-between items-center px-6 py-3 rounded-xl m-4">
      <h1 className="text-xl font-bold">🚀 Mini CRM Pro</h1>

      <div className="flex items-center gap-4">
        <Bell className="cursor-pointer hover:text-indigo-400" />
        <div className="flex items-center gap-2 cursor-pointer">
          <User />
          <span>Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
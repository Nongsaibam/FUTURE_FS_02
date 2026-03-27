import { LayoutDashboard, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen glass p-5 flex flex-col gap-6">
      <h2 className="text-2xl font-bold">CRM</h2>

      <Link to="/" className="flex gap-3 items-center hover:text-indigo-400">
        <LayoutDashboard /> Dashboard
      </Link>

      <Link to="/leads" className="flex gap-3 items-center hover:text-indigo-400">
        <Users /> Leads
      </Link>
    </div>
  );
};

export default Sidebar;
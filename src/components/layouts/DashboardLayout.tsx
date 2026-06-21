import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        {/* content */}
        <div className="p-4 bg-gray-100 flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function DashboardLayout() {

  return (
    <section>
      <div className="flex flex-col md:flex-row h-screen">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <div className="hidden md:block">
            <Navbar />
          </div>

          <div className="flex-1 overflow-auto p-4 bg-gray-100 text-black dark:bg-gray-800 dark:text-white">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
}

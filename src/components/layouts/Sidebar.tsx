import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden bg-gray-900 text-white dark:bg-gray-800 p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Dashboard</h2>

        <button onClick={() => setOpen(!open)}>
          <MenuIcon />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-800 text-white flex flex-col p-4 gap-2">
          <Link to="/dashboard" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to="/users" onClick={() => setOpen(false)}>
            Users
          </Link>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 bg-gray-900 text-white flex-col">
        <h2 className="text-xl font-bold p-4 border-b border-gray-700">
          Dashboard
        </h2>

        <nav className="flex flex-col gap-2 p-4">
          <Link to="/dashboard" className="rounded px-3 py-2 hover:bg-gray-800">
            Home
          </Link>

          <Link to="/users" className="rounded px-3 py-2 hover:bg-gray-800">
            Users
          </Link>
        </nav>
      </div>
    </>
  );
}

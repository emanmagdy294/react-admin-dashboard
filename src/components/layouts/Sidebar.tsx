import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-full bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>

      <nav className="flex flex-col gap-4">
        <Link to="/dashboard" className="hover:text-blue-400">
          Home
        </Link>

        <Link to="/users" className="hover:text-blue-400">
          Users
        </Link>
      </nav>
    </div>
  );
}
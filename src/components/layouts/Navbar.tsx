import Button from "@mui/material/Button";
import { useTheme } from "../../context/theme/useTheme";
import { useAuth } from "../../context/auth/useAuth";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="h-14 bg-white shadow flex items-center justify-between px-4">
      <div>
        <h1 className="font-semibold">Admin Dashboard</h1>

        <button
          onClick={toggleTheme}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
      <div>
        <Button variant="contained" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
}

import Button from "@mui/material/Button";
import { useTheme } from "../../context/theme/useTheme";
import { useAuth } from "../../context/auth/useAuth";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="h-14 bg-gray-200 text-blue-950 dark:bg-gray-900 dark:text-white shadow flex items-center justify-between px-4">
      <div>
        <h1 className="font-semibold">{t("adminDashboard")}</h1>
      </div>
      <div className="flex items-center content-center">
        <button onClick={toggleTheme} className="px-3 py-1">
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
        <Button variant="contained" onClick={handleLogout}>
          {t("logout")}
        </Button>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/theme/useTheme";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.documentElement.lang = i18n.language;

    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden bg-gray-200 text-blue-950 dark:bg-gray-900 dark:text-white p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">{t("adminDashboard")}</h2>

        <button onClick={() => setOpen(!open)}>
          <MenuIcon />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-200 text-blue-950 dark:bg-gray-900 dark:text-white flex flex-col p-4 gap-2">
          <Link to="/users" onClick={() => setOpen(false)}>
            {t("users")}
          </Link>

          <Link to="/add-user" onClick={() => setOpen(false)}>
            {t("addUser")}
          </Link>

          <div>
            <button
              onClick={() => {
                const newLang = i18n.language === "en" ? "ar" : "en";

                i18n.changeLanguage(newLang);
                localStorage.setItem("lang", newLang);
              }}
              className="rounded-lg border text-black border-slate-300 bg-white px-4 py-2 shadow-md transition hover:bg-slate-100"
            >
              {i18n.language === "en" ? "العربية" : "English"}
            </button>
          </div>
          <div>
            <button onClick={toggleTheme}>
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 bg-gray-200 text-blue-950 dark:bg-gray-900 dark:text-white flex-col">
        <h2 className="text-xl font-bold p-4">{t("adminDashboard")}</h2>

        <nav className="flex flex-col gap-2 p-4">
          <Link to="/users" className="rounded px-3 py-2 hover:bg-gray-500">
            {t("users")}
          </Link>
          <Link to="/add-user" className="rounded px-3 py-2 hover:bg-gray-500">
            {t("addUser")}
          </Link>

          <div>
            <button
              onClick={() => {
                const newLang = i18n.language === "en" ? "ar" : "en";

                i18n.changeLanguage(newLang);
                localStorage.setItem("lang", newLang);
              }}
              className="rounded-lg border text-black border-slate-300 bg-white px-4 py-2 shadow-md transition hover:bg-slate-100"
            >
              🌐 {i18n.language === "en" ? "العربية" : "English"}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

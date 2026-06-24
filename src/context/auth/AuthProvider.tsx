import { useState } from "react";
import { AuthContext, type User } from "./auth.context";
import { loginApi } from "./auth.api";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(false);

  const login = async (data: { email: string; password: string }) => {
    setLoading(true);

    try {
      const user = await loginApi(data);

      setUser(user);

      localStorage.setItem("user", JSON.stringify(user));
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

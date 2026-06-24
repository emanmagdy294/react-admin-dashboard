import { createContext } from "react";

export type User = {
  name: string;
  email: string;
} | null;

export type AuthContextType = {
  user: User;
  login: (data: { email: string; password: string }) => Promise<void>;
  logout: () => void;
  loading: boolean;
};

export const AuthContext = createContext<AuthContextType | null>(null);

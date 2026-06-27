import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Register";
import Users from "../../pages/dashboard/Users";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";
import AddUser from "../../pages/dashboard/AddUser";
import EditUser from "../../pages/dashboard/EditUser";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/users" element={<Users />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/editUser/:id" element={<EditUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

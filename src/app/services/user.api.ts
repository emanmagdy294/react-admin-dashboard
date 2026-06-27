import axiosInstance from "../api/axios.config";
import type { UserFormData } from "../schemas/user.schema";
import type { User } from "../types/user.type";

export const getUsers = () => {
  return axiosInstance.get<User[]>("/users");
};

export const getUserById = (id: string) => {
  return axiosInstance.get<User>(`/users/${id}`);
};

export const addUser = (data: UserFormData) => {
  return axiosInstance.post("/users", data);
};
export const updateUser = (id: string, data: User) => {
  return axiosInstance.put<User>(`/users/${id}`, data);
};

export const deleteUser = (id: string) => {
  return axiosInstance.delete(`/users/${id}`);
};
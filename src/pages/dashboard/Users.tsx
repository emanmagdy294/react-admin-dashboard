import { useEffect, useState } from "react";
import type { User } from "../../app/types/user.type";
import { deleteUser, getUsers } from "../../app/services/user.api";
import { Link } from "react-router-dom";
import DeleteDialog from "../../components/common/DeleteModal";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [openDelete, setOpenDelete] = useState(false);

  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await getUsers();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  async function confirmDelete() {
    if (!selectedUserId) return;

    try {
      await deleteUser(selectedUserId);

      setUsers((prev) => prev.filter((user) => user.id !== selectedUserId));

      setOpenDelete(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className="p-5">
      <div className="mb-5 flex justify-end">
        <Link
          to="/add-user"
          className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          Add User
        </Link>
      </div>
      <div className="overflow-auto rounded-xl border border-gray-300">
        <table className="table-auto text-center border-collapse border border-gray-400 w-full">
          <thead className="bg-slate-100 rounded-xl">
            <tr>
              <th className="table-style">{t("name")}</th>
              <th className="table-style">{t("email")}</th>
              <th className="table-style">{t("mobile")}</th>
              <th className="table-style">{t("actions")}</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                className="hover:bg-slate-500 transition-colors duration-200"
                key={user.id}
              >
                <td className="border border-gray-300 p-2">{user.name}</td>

                <td className="border border-gray-300 p-2">{user.email}</td>

                <td className="border border-gray-300 p-2">{user.mobile}</td>
                <td className="border border-gray-300 p-3 text-center space-x-2">
                  <button
                    onClick={() => {
                      setSelectedUserId(user.id!);
                      setOpenDelete(true);
                    }}
                    className="rounded-md bg-red-500 px-4 m-1 py-2 text-white transition hover:bg-red-600"
                  >
                    {t("delete")}
                  </button>

                  <button
                    onClick={() => navigate(`/editUser/${user.id}`)}
                    className="rounded m-1 bg-blue-500 px-4 py-2 text-white"
                  >
                    {t("update")}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <DeleteDialog
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        onConfirm={confirmDelete}
      />
    </section>
  );
}

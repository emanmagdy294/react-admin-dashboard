import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { userSchema, type UserFormData } from "../../app/schemas/user.schema";

import { getUserById, updateUser } from "../../app/services/user.api";
import { useTranslation } from "react-i18next";

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  useEffect(() => {
    async function fetchUser() {
      if (!id) return;

      try {
        const { data } = await getUserById(id);

        reset({
          name: data.name,
          email: data.email,
          password: data.password,
          mobile: data.mobile,
        });
      } catch (error) {
        console.log(error);
      }
    }

    fetchUser();
  }, [id, reset]);

  async function onSubmit(data: UserFormData) {
    if (!id) return;

    try {
      await updateUser(id, data);

      navigate("/users");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="max-w-2xl mx-auto mt-8 rounded-xl bg-white p-8 shadow">
      <h2 className="mb-6 text-black text-3xl font-bold">{t("editUser")}</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label>{t("name")}</label>

          <input
            type="text"
            {...register("name")}
            className="mt-1 w-full rounded-lg border p-3"
          />

          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label>{t("email")}</label>

          <input
            type="email"
            {...register("email")}
            className="mt-1 w-full rounded-lg border p-3"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label>{t("password")}</label>

          <input
            type="password"
            {...register("password")}
            className="mt-1 w-full rounded-lg border p-3"
          />

          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <div>
          <label>{t("mobile")}</label>

          <input
            type="text"
            {...register("mobile")}
            className="mt-1 w-full rounded-lg border p-3"
          />

          {errors.mobile && (
            <p className="mt-1 text-sm text-red-500">{errors.mobile.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-700 disabled:bg-gray-400"
        >
          {isSubmitting ? t("updating") : t("update")}
        </button>
      </form>
    </section>
  );
}

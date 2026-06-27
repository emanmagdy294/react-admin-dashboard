import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, type UserFormData } from "../../app/schemas/user.schema";
import { addUser } from "../../app/services/user.api";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AddUser() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  });

  async function onSubmit(data: UserFormData) {
    try {
      await addUser(data);

      reset();

      navigate("/users");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="max-w-2xl mx-auto mt-8 rounded-xl bg-white p-8 shadow">
      <h2 className="mb-6 text-3xl text-black font-bold">{t("addUser")}</h2>

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
          disabled={isSubmitting}
          className="w-full rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-700 disabled:bg-gray-400"
        >
          {isSubmitting ? t("saving") : t("addUser")}
        </button>
      </form>
    </section>
  );
}

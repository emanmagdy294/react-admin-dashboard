import { useState } from "react";
import loginImage from "../../assets/images/login.jpg";
import { useAuth } from "../../context/auth/useAuth";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Email and Password are required");
      return;
    }

    try {
      await login({
        email: form.email,
        password: form.password,
      });

      navigate("/users");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 text-primary">
      <div>
        <img
          src={loginImage}
          className="h-screen w-full object-cover"
          alt="login"
        />

        <div className="absolute top-52 left-20 text-white font-extrabold">
          <h2 className="w-48">Welcome, We are glad to see you again!</h2>
        </div>
      </div>

      <div className="container my-6 p-2 border-gray-800 rounded-xl">
        <h1 className="text-center py-5 font-extrabold">
          Log In to Your Account
        </h1>

        <form onSubmit={handleSubmit} className="mt-11">
          <section>
            <div>
              <label className="block">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                className="input-style"
                placeholder="Enter Your Email"
                onChange={handleChange}
              />
            </div>

            <div className="w-full mt-3">
              <label className="block ">Password</label>
              <input
                name="password"
                type="password"
                value={form.password}
                className="input-style"
                placeholder="Enter Your Password"
                onChange={handleChange}
              />
            </div>
          </section>

          <div className="mt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-32 bg-blue-600 text-white py-2 rounded"
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </div>

          <div className="mt-4">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-600 font-semibold hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

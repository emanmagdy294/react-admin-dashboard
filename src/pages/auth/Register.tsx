import { useState } from "react";
import loginImage from "../../assets/images/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { registerApi } from "../../context/auth/auth.api";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
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

    if (!form.name || !form.email || !form.mobile || !form.password) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);
      await registerApi(form);
      navigate("/login");
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 text-primary">
      <div>
        <img
          src={loginImage}
          className="h-screen w-full relative object-cover"
          alt="login"
        />

        <div className="absolute top-52 left-20 text-white font-extrabold">
          <h2 className="w-48">Welcome, We are glad to see you again!</h2>
        </div>
      </div>

      <div className="container my-6 p-2 border-gray-800 rounded-xl">
        <h1 className="text-center py-5 font-extrabold">
          Register Your Account
        </h1>

        <form onSubmit={handleSubmit} className="mt-11">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block">Name</label>
              <input
                name="name"
                type="text"
                className="input-style"
                placeholder="Enter Your Name"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block">Email</label>
              <input
                name="email"
                type="email"
                className="input-style"
                placeholder="Enter Your Email"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block">Mobile</label>
              <input
                name="mobile"
                type="text"
                className="input-style"
                placeholder="Enter Your Mobile"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block">Password</label>
              <input
                name="password"
                type="password"
                className="input-style"
                placeholder="Password"
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
              {loading ? "Loading..." : "Register"}
            </button>
          </div>

          <div className="mt-4">
            <p className="text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

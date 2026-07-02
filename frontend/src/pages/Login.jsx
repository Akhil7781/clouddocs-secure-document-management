import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import { FaCloud, FaEnvelope, FaLock } from "react-icons/fa";

function Login() {

    const navigate = useNavigate();
    const { login } = useAuth();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const data = await loginUser(form);

            login(data.token);

localStorage.setItem(
    "user",
    JSON.stringify(data.user)
);

            toast.success("Login Successful");

            navigate("/dashboard");

        } catch (err) {

            toast.error(err.response?.data?.message || "Login Failed");

        }

    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 flex items-center justify-center px-4">

            <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">

                <div className="text-center mb-8">

                    <FaCloud className="text-6xl text-blue-600 mx-auto mb-4" />

                    <h1 className="text-4xl font-bold text-gray-800">
                        CloudDocs
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Secure Document Management
                    </p>

                </div>

                <form onSubmit={handleSubmit}>

                    <div className="relative mb-5">

                        <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                    </div>

                    <div className="relative mb-6">

                        <FaLock className="absolute left-4 top-4 text-gray-400" />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
                    >
                        Login
                    </button>

                </form>

                <p className="text-center mt-6 text-gray-600">

                    Don't have an account?

                    <Link
                        to="/register"
                        className="text-blue-600 font-semibold ml-2 hover:underline"
                    >
                        Register
                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Login;
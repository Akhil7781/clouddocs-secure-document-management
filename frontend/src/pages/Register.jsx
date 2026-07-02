import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import toast from "react-hot-toast";
import { FaCloud, FaEnvelope, FaLock, FaUser } from "react-icons/fa";

function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
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

            await registerUser(form);

            toast.success("Registration Successful");

            navigate("/login");

        } catch (err) {

            toast.error(err.response?.data?.message || "Registration Failed");

        }

    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-green-600 via-blue-600 to-indigo-700 flex items-center justify-center px-4">

            <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">

                <div className="text-center mb-8">

                    <FaCloud className="text-6xl text-blue-600 mx-auto mb-4" />

                    <h1 className="text-4xl font-bold text-gray-800">
                        Create Account
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Join CloudDocs Today
                    </p>

                </div>

                <form onSubmit={handleSubmit}>

                    <div className="relative mb-5">

                        <FaUser className="absolute left-4 top-4 text-gray-400" />

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                    </div>

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
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
                    >
                        Register
                    </button>

                </form>

                <p className="text-center mt-6 text-gray-600">

                    Already have an account?

                    <Link
                        to="/login"
                        className="text-blue-600 font-semibold ml-2 hover:underline"
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Register;
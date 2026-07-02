import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {

    const location = useLocation();
    const navigate = useNavigate();
    const { logout } = useAuth();

    const titles = {
        "/dashboard": "Dashboard",
        "/documents": "Documents",
        "/upload": "Upload Document",
        "/profile": "My Profile"
    };

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (

        <div className="bg-white shadow-md h-20 px-8 flex items-center justify-between">

            <div>

                <h1 className="text-3xl font-bold text-gray-800">
                    {titles[location.pathname] || "CloudDocs"}
                </h1>

                <p className="text-gray-500 text-sm">
                    Secure Cloud Document Management
                </p>

            </div>

            <div className="flex items-center gap-6">

                <FaBell
                    className="text-2xl text-gray-600 cursor-pointer hover:text-blue-600"
                />

                <FaUserCircle
                    className="text-4xl text-blue-700"
                />

                <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
                >
                    Logout
                </button>

            </div>

        </div>

    );

}

export default Navbar;
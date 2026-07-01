import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Dashboard() {

    const navigate = useNavigate();

    const { logout } = useAuth();

    const handleLogout = () => {

        logout();

        navigate("/login");

    };

    return (

        <div className="min-h-screen bg-slate-100">

            <div className="bg-blue-700 text-white p-5 flex justify-between">

                <h1 className="text-2xl font-bold">
                    CloudDocs Dashboard
                </h1>

                <button
                    onClick={handleLogout}
                    className="bg-red-500 px-4 py-2 rounded"
                >
                    Logout
                </button>

            </div>

            <div className="p-10">

                <h2 className="text-4xl font-bold">
                    Welcome 👋
                </h2>

                <p className="mt-3 text-gray-600">
                    Authentication completed successfully.
                </p>

            </div>

        </div>

    );

}

export default Dashboard;
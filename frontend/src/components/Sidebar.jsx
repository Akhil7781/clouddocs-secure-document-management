import { NavLink } from "react-router-dom";
import {
    FaHome,
    FaFileAlt,
    FaUpload,
    FaUser,
    FaCloud
} from "react-icons/fa";

function Sidebar() {

    const menu = [
        { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
        { name: "Documents", path: "/documents", icon: <FaFileAlt /> },
        { name: "Upload", path: "/upload", icon: <FaUpload /> },
        { name: "Profile", path: "/profile", icon: <FaUser /> }
    ];

    return (
        <aside className="fixed left-0 top-0 h-screen w-72 bg-slate-900 text-white shadow-2xl">

            <div className="border-b border-slate-700 p-8">

                <div className="flex items-center gap-3">

                    <FaCloud className="text-4xl text-blue-400" />

                    <div>

                        <h1 className="text-3xl font-bold">
                            CloudDocs
                        </h1>

                        <p className="text-slate-400 text-sm">
                            Secure Document Manager
                        </p>

                    </div>

                </div>

            </div>

            <nav className="mt-8 px-4">

                {menu.map((item) => (

                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-4 rounded-xl px-5 py-4 mb-3 transition-all ${
                                isActive
                                    ? "bg-blue-600 text-white shadow-lg"
                                    : "text-slate-300 hover:bg-slate-800"
                            }`
                        }
                    >

                        <span className="text-xl">
                            {item.icon}
                        </span>

                        <span className="font-medium">
                            {item.name}
                        </span>

                    </NavLink>

                ))}

            </nav>

            <div className="absolute bottom-6 left-6 text-sm text-slate-500">
                Version 1.0
            </div>

        </aside>
    );

}

export default Sidebar;
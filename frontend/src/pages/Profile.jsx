import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { getProfile } from "../services/authService";
import {
    FaUserCircle,
    FaEnvelope,
    FaIdBadge,
    FaCloud
} from "react-icons/fa";

function Profile() {

    const [user, setUser] = useState(null);

    useEffect(() => {

        const fetchProfile = async () => {

            try {

                const data = await getProfile();

                setUser(data.user);

            } catch (error) {

                console.log(error);

            }

        };

        fetchProfile();

    }, []);

    if (!user) {

        return (

            <DashboardLayout>

                <div className="flex justify-center items-center h-96">
                    Loading...
                </div>

            </DashboardLayout>

        );

    }

    return (

        <DashboardLayout>

            <div className="max-w-5xl mx-auto">

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 h-44 flex items-center justify-center">

                        <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-lg">

                            <span className="text-5xl font-bold text-blue-700">
                                {user.name?.charAt(0).toUpperCase()}
                            </span>

                        </div>

                    </div>

                    <div className="p-10 text-center">

                        <h1 className="text-4xl font-bold text-gray-800">
                            {user.name}
                        </h1>

                        <p className="text-gray-500 mt-2">
                            CloudDocs Member
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 gap-6 p-10 pt-0">

                        <div className="bg-slate-50 rounded-2xl p-6 shadow-sm">

                            <div className="flex items-center gap-3 mb-3">

                                <FaEnvelope className="text-blue-600 text-2xl" />

                                <h2 className="font-semibold text-lg">
                                    Email
                                </h2>

                            </div>

                            <p className="text-gray-700 break-all">
                                {user.email}
                            </p>

                        </div>

                        <div className="bg-slate-50 rounded-2xl p-6 shadow-sm">

                            <div className="flex items-center gap-3 mb-3">

                                <FaIdBadge className="text-green-600 text-2xl" />

                                <h2 className="font-semibold text-lg">
                                    User ID
                                </h2>

                            </div>

                            <p className="text-gray-700 break-all">
                                {user._id}
                            </p>

                        </div>

                    </div>

                    <div className="border-t p-6 flex items-center justify-center gap-3 text-gray-500">

                        <FaCloud />

                        <span>
                            Securely managing documents with CloudDocs
                        </span>

                    </div>

                </div>

            </div>

        </DashboardLayout>

    );

}

export default Profile;
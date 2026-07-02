import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { getDashboardStats, getDocuments } from "../services/documentService";
import {
    FaFileAlt,
    FaDatabase,
    FaCloudUploadAlt,
    FaFolderOpen,
    FaArrowRight
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Dashboard() {

    const [stats, setStats] = useState({
        totalDocuments: 0,
        totalStorage: 0,
        recentUploads: 0
    });

    const [documents, setDocuments] = useState([]);

    useEffect(() => {

        const loadData = async () => {

            try {

                const statsData = await getDashboardStats();
                setStats(statsData);

                const docs = await getDocuments();
                setDocuments(docs.slice(0, 5));

            } catch (error) {

                console.log(error);

            }

        };

        loadData();

    }, []);

    return (

        <DashboardLayout>

          <div className="mb-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-8 text-white shadow-xl">

    <h1 className="text-4xl font-bold">
        Welcome back 👋
    </h1>

    <p className="mt-2 text-blue-100">
        {new Date().toLocaleDateString("en-IN", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        })}
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">

        <div>

            <p className="text-blue-200">
                Documents
            </p>

            <h2 className="text-3xl font-bold">
                {stats.totalDocuments}
            </h2>

        </div>

        <div>

            <p className="text-blue-200">
                Storage Used
            </p>

            <h2 className="text-3xl font-bold">
                {stats.totalStorage} MB
            </h2>

        </div>

        <div>

            <p className="text-blue-200">
                Status
            </p>

            <h2 className="text-3xl font-bold">
                Active
            </h2>

        </div>

    </div>

</div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

                <div className="bg-blue-600 text-white rounded-2xl p-6 shadow-lg">
                    <FaFileAlt className="text-5xl mb-4" />
                    <p>Documents</p>
                    <h2 className="text-4xl font-bold">{stats.totalDocuments}</h2>
                </div>

                <div className="bg-green-600 text-white rounded-2xl p-6 shadow-lg">
                    <FaDatabase className="text-5xl mb-4" />
                    <p>Storage</p>
                    <h2 className="text-4xl font-bold">{stats.totalStorage} MB</h2>
                </div>

                <div className="bg-purple-600 text-white rounded-2xl p-6 shadow-lg">
                    <FaCloudUploadAlt className="text-5xl mb-4" />
                    <p>Recent Uploads</p>
                    <h2 className="text-4xl font-bold">{stats.recentUploads}</h2>
                </div>

                <div className="bg-orange-500 text-white rounded-2xl p-6 shadow-lg">
                    <FaFolderOpen className="text-5xl mb-4" />
                    <p>Status</p>
                    <h2 className="text-3xl font-bold">Active</h2>
                </div>

            </div>

            <div className="grid lg:grid-cols-3 gap-6">

                <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">

                    <h2 className="text-2xl font-bold mb-5">
                        Recent Documents
                    </h2>

                    {documents.length === 0 ? (

                       <div className="text-center py-10">

    <div className="text-6xl mb-3">
        📂
    </div>

    <h3 className="text-xl font-bold">
        No Documents Yet
    </h3>

    <p className="text-gray-500 mt-2">
        Upload your first document to get started.
    </p>

</div>

                    ) : (

                        documents.map((doc) => (

                            <div
                                key={doc._id}
                                className="flex justify-between items-center border-b py-4"
                            >

                                <div>

                                    <p className="font-semibold">
                                        {doc.originalName}
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        {(doc.fileSize / 1024).toFixed(2)} KB
                                    </p>

                                </div>

                                <FaArrowRight className="text-gray-400" />

                            </div>

                        ))

                    )}

                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">

                    <h2 className="text-2xl font-bold mb-6">
                        Quick Actions
                    </h2>

                    <Link
                        to="/upload"
                        className="block bg-blue-600 text-white text-center py-3 rounded-xl mb-4 hover:bg-blue-700"
                    >
                        Upload Document
                    </Link>

                    <Link
                        to="/documents"
                        className="block bg-green-600 text-white text-center py-3 rounded-xl mb-4 hover:bg-green-700"
                    >
                        View Documents
                    </Link>

                    <Link
                        to="/profile"
                        className="block bg-purple-600 text-white text-center py-3 rounded-xl hover:bg-purple-700"
                    >
                        My Profile
                    </Link>

                </div>

            </div>

        </DashboardLayout>

    );

}

export default Dashboard;
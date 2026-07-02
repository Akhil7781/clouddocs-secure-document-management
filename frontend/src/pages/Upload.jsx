import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { uploadDocument } from "../services/documentService";
import toast from "react-hot-toast";
import { FaCloudUploadAlt, FaFileAlt } from "react-icons/fa";

function Upload() {

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!file) {
            toast.error("Please select a file");
            return;
        }

        try {

            setLoading(true);

            await uploadDocument(file);

            toast.success("Document uploaded successfully");

            setFile(null);

            e.target.reset();

        } catch (error) {

            console.log(error);

            toast.error(error.response?.data?.message || "Upload failed");

        } finally {

            setLoading(false);

        }

    };

    return (

        <DashboardLayout>

            <div className="max-w-3xl mx-auto">

                <div className="bg-white rounded-3xl shadow-xl p-10">

                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        Upload Document
                    </h1>

                    <p className="text-gray-500 mb-8">
                        Upload and securely store your documents in the cloud.
                    </p>

                    <form onSubmit={handleSubmit}>

                        <label
                            htmlFor="file"
                            className="border-2 border-dashed border-blue-400 rounded-2xl p-12 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition"
                        >

                            <FaCloudUploadAlt className="text-7xl text-blue-600 mb-4" />

                            <h2 className="text-2xl font-semibold text-gray-700">
                                Drag & Drop Files
                            </h2>

                            <p className="text-gray-500 mt-2">
                                or click here to browse
                            </p>

                            <input
                                id="file"
                                type="file"
                                hidden
                                onChange={(e) => setFile(e.target.files[0])}
                            />

                        </label>

                        {file && (

                            <div className="mt-6 bg-slate-100 rounded-xl p-4 flex items-center gap-3">

                                <FaFileAlt className="text-3xl text-blue-600" />

                                <div>

                                    <p className="font-semibold">
                                        {file.name}
                                    </p>

                                    <p className="text-sm text-gray-500">
                                        {(file.size / 1024).toFixed(2)} KB
                                    </p>

                                </div>

                            </div>

                        )}
                        <div className="mt-6 bg-blue-50 rounded-xl p-5">

    <h3 className="font-bold text-blue-700 mb-2">
        Supported File Types
    </h3>

    <p className="text-gray-700">
        PDF • DOC • DOCX • TXT • JAVA • JPG • PNG
    </p>

    <p className="text-gray-500 mt-2">
        Maximum upload size: 10 MB
    </p>

</div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-8 w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-4 rounded-xl text-lg font-semibold transition"
                        >
                            {loading ? "Uploading..." : "Upload Document"}
                        </button>

                    </form>

                </div>

            </div>

        </DashboardLayout>

    );

}

export default Upload;
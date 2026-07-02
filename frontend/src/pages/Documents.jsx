import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import {
    getDocuments,
    deleteDocument,
    downloadDocument,
    searchDocuments
} from "../services/documentService";
import {
    FaDownload,
    FaTrash,
    FaSearch,
    FaFilePdf,
    FaFileWord,
    FaFileImage,
    FaFileAlt
} from "react-icons/fa";

function Documents() {

    const [documents, setDocuments] = useState([]);
    const [search, setSearch] = useState("");

    const fetchDocuments = async () => {
        try {
            const data = await getDocuments();
            setDocuments(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchDocuments();
    }, []);

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this document?")) return;

        try {

            await deleteDocument(id);

            fetchDocuments();

        } catch (error) {

            console.log(error);

        }

    };

    const handleSearch = async (e) => {

        const value = e.target.value;

        setSearch(value);

        if (value.trim() === "") {

            fetchDocuments();

            return;

        }

        try {

            const data = await searchDocuments(value);

            setDocuments(data);

        } catch (error) {

            console.log(error);

        }

    };

    const getIcon = (type) => {

        if (type.includes("pdf")) return <FaFilePdf className="text-red-500 text-xl" />;

        if (type.includes("word")) return <FaFileWord className="text-blue-600 text-xl" />;

        if (type.includes("image")) return <FaFileImage className="text-green-600 text-xl" />;

        return <FaFileAlt className="text-gray-600 text-xl" />;

    };

    return (

        <DashboardLayout>

            <div className="flex justify-between items-center mb-6">

                <div>

                    <h1 className="text-4xl font-bold text-gray-800">
                        My Documents
                    </h1>

                    <p className="text-gray-500">
                        Manage all your uploaded files.
                    </p>

                </div>

            </div>

            <div className="relative mb-6">

                <FaSearch className="absolute left-4 top-4 text-gray-400" />

                <input
                    type="text"
                    placeholder="Search documents..."
                    value={search}
                    onChange={handleSearch}
                    className="w-full border rounded-xl py-3 pl-12 pr-4 shadow-sm focus:ring-2 focus:ring-blue-500"
                />

            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

                <table className="w-full">

                    <thead className="bg-slate-100">

                        <tr>

    <th className="p-4 text-left">Document</th>
    <th className="p-4">Type</th>
    <th className="p-4">Size</th>
    <th className="p-4">Uploaded</th>
    <th className="p-4">Actions</th>

</tr>

                    </thead>

                    <tbody>

                        {documents.length === 0 ? (

                            <tr>

                                <td colSpan="4" className="text-center py-12 text-gray-500">

                                    📂 No documents found

                                </td>

                            </tr>

                        ) : (

                            documents.map((doc) => (

                                <tr
                                    key={doc._id}
                                    className="border-b hover:bg-slate-50 transition"
                                >

                                    <td className="p-4 flex items-center gap-3">

                                        {getIcon(doc.fileType)}

                                        <span>{doc.originalName}</span>

                                    </td>

                                    <td className="text-center">

    <span
        className={`px-3 py-1 rounded-full text-xs font-bold ${
            doc.fileType.includes("pdf")
                ? "bg-red-100 text-red-700"
                : doc.fileType.includes("word")
                ? "bg-blue-100 text-blue-700"
                : doc.fileType.includes("image")
                ? "bg-green-100 text-green-700"
                : doc.fileType.includes("text")
                ? "bg-gray-200 text-gray-700"
                : "bg-yellow-100 text-yellow-700"
        }`}
    >
        {doc.fileType.includes("pdf")
            ? "PDF"
            : doc.fileType.includes("word")
            ? "DOCX"
            : doc.fileType.includes("image")
            ? "IMAGE"
            : doc.fileType.includes("text")
            ? "TXT"
            : "FILE"}
    </span>

</td>

                                    <td className="text-center">

                                        {(doc.fileSize / 1024).toFixed(2)} KB

                                    </td>
                                    <td className="text-center text-gray-600">

    {new Date(doc.createdAt).toLocaleDateString("en-IN")}

</td>

                                    <td className="text-center">

                                        <button
                                            onClick={() => downloadDocument(doc._id)}
                                            className="text-blue-600 hover:text-blue-800 mr-5"
                                        >
                                            <FaDownload />
                                        </button>

                                        <button
                                            onClick={() => handleDelete(doc._id)}
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            <FaTrash />
                                        </button>

                                    </td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </table>

            </div>

        </DashboardLayout>

    );

}

export default Documents;
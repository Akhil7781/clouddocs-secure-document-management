import api from "./api";

export const getDashboardStats = async () => {
    const response = await api.get("/documents/stats");
    return response.data;
};

export const getDocuments = async () => {
    const response = await api.get("/documents");
    return response.data;
};

export const searchDocuments = async (keyword) => {
    const response = await api.get(`/documents/search?keyword=${keyword}`);
    return response.data;
};

export const deleteDocument = async (id) => {
    const response = await api.delete(`/documents/${id}`);
    return response.data;
};

export const downloadDocument = async (id) => {

    const response = await api.get(
        `/documents/download/${id}`,
        {
            responseType: "blob"
        }
    );

    const url = window.URL.createObjectURL(new Blob([response.data]));

    const link = document.createElement("a");

    link.href = url;

    link.setAttribute("download", "document");

    document.body.appendChild(link);

    link.click();

    link.remove();

};
export const uploadDocument = async (file) => {

    const formData = new FormData();

    formData.append("document", file);

    const response = await api.post(
        "/documents/upload",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    );

    return response.data;

};
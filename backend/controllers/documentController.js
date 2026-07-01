const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const Document = require("../models/Document");

const uploadDocument = async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({
                message: "No file uploaded"
            });
        }

        const uploadsFolder = path.join(__dirname, "../uploads");

        if (!fs.existsSync(uploadsFolder)) {
            fs.mkdirSync(uploadsFolder);
        }

        const uniqueFileName = `${uuidv4()}-${req.file.originalname}`;

        const filePath = path.join(uploadsFolder, uniqueFileName);

        fs.writeFileSync(filePath, req.file.buffer);

        const document = await Document.create({
            fileName: uniqueFileName,
            originalName: req.file.originalname,
            fileType: req.file.mimetype,
            fileSize: req.file.size,
            fileUrl: `/uploads/${uniqueFileName}`,
            uploadedBy: req.user.id
        });

        res.status(201).json({
            message: "Document Uploaded Successfully",
            document
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Server Error"
        });

    }
};

const getDocuments = async (req, res) => {

    try {

        const documents = await Document.find({
            uploadedBy: req.user.id
        }).sort({
            createdAt: -1
        });

        res.status(200).json(documents);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};

const downloadDocument = async (req, res) => {

    try {

        const document = await Document.findById(req.params.id);

        if (!document) {
            return res.status(404).json({
                message: "Document not found"
            });
        }

        const filePath = path.join(
            __dirname,
            "../uploads",
            document.fileName
        );

        res.download(filePath, document.originalName);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};
const deleteDocument = async (req, res) => {
    try {

        const document = await Document.findById(req.params.id);

        if (!document) {
            return res.status(404).json({
                message: "Document not found"
            });
        }

        const filePath = path.join(__dirname, "../uploads", document.fileName);

        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        await Document.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Document Deleted Successfully"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Server Error"
        });

    }
};
const searchDocuments = async (req, res) => {
    try {

        const keyword = req.query.keyword || "";

        const documents = await Document.find({
            uploadedBy: req.user.id,
            originalName: {
                $regex: keyword,
                $options: "i"
            }
        }).sort({
            createdAt: -1
        });

        res.status(200).json(documents);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Server Error"
        });

    }
};
const getDashboardStats = async (req, res) => {
    try {

        const documents = await Document.find({
            uploadedBy: req.user.id
        });

        const totalDocuments = documents.length;

        let totalSize = 0;

        documents.forEach(doc => {
            totalSize += doc.fileSize;
        });

        const pdfCount = documents.filter(doc =>
            doc.fileType === "application/pdf"
        ).length;

        const imageCount = documents.filter(doc =>
            doc.fileType.startsWith("image/")
        ).length;

        res.status(200).json({
            totalDocuments,
            totalSize,
            pdfCount,
            imageCount
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Server Error"
        });

    }
};

module.exports = {
    uploadDocument,
    getDocuments,
    downloadDocument,
    deleteDocument,
    searchDocuments,
    getDashboardStats
};
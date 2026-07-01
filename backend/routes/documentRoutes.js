const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");
const upload = require("../config/multer");

const controller = require("../controllers/documentController");

console.log("Document Controller:", controller);

router.post(
    "/upload",
    auth,
    upload.single("document"),
    controller.uploadDocument
);
router.get(
    "/stats",
    auth,
    controller.getDashboardStats
);


router.get(
    "/",
    auth,
    controller.getDocuments
);
router.get(
    "/search",
    auth,
    controller.searchDocuments
);

router.get(
    "/download/:id",
    auth,
    controller.downloadDocument
);

router.delete(
    "/:id",
    auth,
    controller.deleteDocument
);

module.exports = router;
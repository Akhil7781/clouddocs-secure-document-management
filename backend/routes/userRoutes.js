const express = require("express");

const router = express.Router();

const { register, login } = require("../controllers/userController");
const auth = require("../middleware/authMiddleware");

router.post("/register", register);

router.post("/login", login);

router.get("/profile", auth, (req, res) => {

    res.json({
        message: "Protected Route Accessed",
        user: req.user
    });

});

module.exports = router;
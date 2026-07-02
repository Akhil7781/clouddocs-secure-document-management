const express = require("express");

const router = express.Router();

const { register, login } = require("../controllers/userController");
const auth = require("../middleware/authMiddleware");

router.post("/register", register);

router.post("/login", login);

router.get("/profile", auth, async (req, res) => {

    try {

        const User = require("../models/User");

        const user = await User.findById(req.user.id).select("-password");

        res.status(200).json({
            user
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

});

module.exports = router;
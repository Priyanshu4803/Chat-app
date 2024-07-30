const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

//for searching all users using ?search=
router.route("/").get(protect, allUsers);
//register
router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports = router;

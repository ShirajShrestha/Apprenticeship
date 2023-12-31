const express = require("express");
const router = express.Router();

const {
  getContact,
  getContacts,
  postContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/tokenHandler");

router.use(validateToken);
router.route("/").get(getContacts).post(postContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;

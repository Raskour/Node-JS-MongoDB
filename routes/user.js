const express = require("express");
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
} = require("../controllers/user");

// we need the this command if we have to work with routes separately
//and use "router" with every request
const router = express.Router();

router.route("/").get(handleGetAllUsers).post(handleCreateNewUser);

// Routes
router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;

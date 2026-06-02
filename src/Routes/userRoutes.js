const express = require("express")

const router = express.Router()

const userController = require("../controlers/userController")

router.get("/", userController.GetAllUsers)

router.get("/:id", userController.GetUserById)

router.post("/", userController.createUser)

router.put("/:id", userController.updateUser)

router.delete("/:id", userController.deleteUser)

module.exports = router
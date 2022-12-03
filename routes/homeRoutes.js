const express = require('express')
const router = express.Router()
//controller
const homeController = require("../controllers/homeController")



router.get('/dashboard', homeController.dashboard)
router.get('/', homeController.showHome)

module.exports = router
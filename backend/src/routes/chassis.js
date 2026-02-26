const express = require('express')
const chassisController = require('../controllers/chassis.controller')

const router = express.Router()

router.get('/', chassisController.get_all)

router.get('/:slug',chassisController.getBySlug)

module.exports = router
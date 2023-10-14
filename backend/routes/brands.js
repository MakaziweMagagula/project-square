const express = require('express')
const { addBrand, getBrands} = require('../controllers/brandsController')

const router = express.Router()

router.get('/getbrands',getBrands)

router.post('/addbrands', addBrand)


module.exports = router
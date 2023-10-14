const Brand = require('../models/brandModel')

const addBrand = async (req,res) => {
    const {brandName,image,brandType} = req.body;
   try{
    const brand = await Brand.create({brandName, image, brandType})
    res.status(200).json(brand)
   }catch(error){
    res.status(400).json({error : error.message})
   }
}

const getBrands = async (req, res)=> {
    const brands = await Brand.find({}).sort({brandName: 1})
    res.status(200).json(brands)
}
module.exports = {
    addBrand,
    getBrands
}
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const brandsSchema = new Schema({
    brandName : {
        type: String,
        required: true
    },
    image : {
        type: String,
        required: true
    },
    brandType : {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Brands', brandsSchema)


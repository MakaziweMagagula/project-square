require('dotenv').config()

const express =  require('express')
const mongoose = require('mongoose')
const brandsRoutes = require('./routes/brands')

const app =  express()

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/brands',brandsRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('listening to port 4000')
        })
    })
    .catch((error) => {
        console.log(error)
    })




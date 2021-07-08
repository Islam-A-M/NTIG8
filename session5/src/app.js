const express= require('express')
const app = express()
require('../db/connection')
const userRoutes= require('../routes/user.route')
const postRoutes= require('../routes/post.route')

app.use(express.json()) // urlencoded
app.use(userRoutes)
app.use(postRoutes)

module.exports=app

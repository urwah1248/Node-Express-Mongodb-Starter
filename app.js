const express = require("express")
const productsRouter = require("./routers/productsRouter")
const middleware = require("./utils/middleware")
const app = express()
const db = require("./db")

//Connecting to Database
db.connect(app)

//Middleware
app.use(express.json())
app.use(middleware.requestLogger)

//Setting Router to work for the /api route
app.use('/api', productsRouter)

app.use(middleware.unknownEndpoint)

module.exports = app

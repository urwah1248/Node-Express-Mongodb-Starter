const express = require("express")
const mongoose = require("mongoose")
const productsRouter = require("./routers/productsRouter")
const middleware = require("./utils/middleware")
const app = express()
const config = require("./utils/config")
const logger = require("./utils/logger")

mongoose.set('strictQuery', false);
mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api', productsRouter)

app.use(middleware.unknownEndpoint)

module.exports = app

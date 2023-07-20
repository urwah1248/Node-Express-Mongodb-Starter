const app = require('./app') // the actual Express application
const config = require('./utils/config')
const { info } = require('./utils/logger')

app.listen(config.PORT, () => {
  info(`Server running on port ${config.PORT}`)
})
const {info, error} =  require("../utils/logger")

//Logs out important info of Requests to the server
const requestLogger = (request, response, next) => {
    info('Method: ', request.method)
    info('Path:  ', request.path)
    info('Body:  ', request.body)
    info('---')
    next()
}

//Returns a valid error in case of an unknown endpoint
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }

module.exports = { requestLogger, unknownEndpoint }
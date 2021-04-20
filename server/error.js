export const errorMessage = (statusCode, message, res) =>
  res.status(statusCode).send(message)

const isProd = process.env.NODE_ENV === 'production'

export function notFound(req, res, next) {
  res.status(404)
  const error = new Error(`Not Found - ${req.originalUrl}`)
  next(error)
}

// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
  // Malformed JSON body
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ message: 'Invalid JSON payload' })
  }

  // Multer upload errors
  if (err.name === 'MulterError') {
    const message =
      err.code === 'LIMIT_FILE_SIZE'
        ? 'File is too large'
        : err.code === 'LIMIT_FILE_COUNT'
        ? 'Too many files uploaded'
        : 'Upload failed'
    return res.status(400).json({ message })
  }

  // Known/expected error types
  if (err.name === 'ValidationError') {
    return res.status(400).json({ message: 'Validation Error', errors: err.errors })
  }
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode

  // Never leak internal error details in production
  const message = isProd
    ? statusCode >= 500
      ? 'Internal server error'
      : 'Request failed'
    : err.message

  console.error(err)

  res.status(statusCode).json({ message })
}

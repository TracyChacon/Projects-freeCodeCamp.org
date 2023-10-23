exports.getIndex = (req, res, next) => {
  res.sendFile(process.cwd() + '/views/index.html')
}

exports.fileanalyse = (req, res, next) => {
  const name = req.file.originalname
  const type = req.file.mimetype
  const size = req.file.size
  res.json({
    name: name,
    type: type,
    size: size,
  })
}

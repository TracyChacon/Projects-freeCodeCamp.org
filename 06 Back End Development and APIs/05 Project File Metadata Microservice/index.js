const express = require('express')
const cors = require('cors')
const multer = require('multer')
require('dotenv').config()

const indexRoutes = require('./routes/index')

const app = express()
const fileStorage = multer.diskStorage({
  destination: (res, file, cb) => {
    cb(null, 'images')
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, '_') + '_' + file.originalname
    )
  },
})

app.use(cors())
app.use('/public', express.static(process.cwd() + '/public'))
app.use(multer({ storage: fileStorage }).single('upfile'))

app.use(indexRoutes)

const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
})

const express = require('express')

const bodyParser = require('body-parser')
const apiRouter = require('./api')
const app = express()
const port = 3000
app.use(express.static('public'))
app.use(bodyParser.json())
app.use('/api',apiRouter);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
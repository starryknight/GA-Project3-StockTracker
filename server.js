const express = require('express')
const logger = require('morgan')
const app = express()
const routes = require('./routes/index')

app.use(logger('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(`${__dirname}/client/build`))

app.use('/', routes)

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
  })

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("connected at port: " + port)
})
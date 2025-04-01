if(!process.env.NODE_ENV) {
    require('dotenv').config({path: ['.env']}) // kebutuhan deployment
}

const express = require('express')
const app = express()
const port = process.env.PORT || 3000 // kebutuhan deployment

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
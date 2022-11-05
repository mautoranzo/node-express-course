const express = require('express')
const app = express()

app.use(express.static('./new-public'))

app.listen(3000)
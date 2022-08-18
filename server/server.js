const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('client'))

require('./router/router.js')(app)

app.listen(4000,console.log("Server running on 4000"))
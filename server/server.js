const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('client'))

require('./router/router.js')(app)

const port = process.env.PORT || 4000

app.listen(port,console.log("Server running on 4000"))
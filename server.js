const express = require("express")
const session = require("express-session")
const MongoStore = require("connect-mongo")
require("dotenv").config()
const router = require("./routes/index")

const app = express()

const PORT = process.env.PORT

app.set("view engine", "ejs")
app.set("views", "./views")
app.use(express.static(__dirname + "/public"))

app.use(express.json())

app.use(
  session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
    cookie: {
      // maxAge: 5000,
    },
  })
)

app.use(router)

app.listen(PORT, () => {
  console.log(`Listening on PORT: http://localhost:${PORT}`)
})

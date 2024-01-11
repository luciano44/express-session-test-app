const express = require("express")
const session = require("express-session")
const MongoStore = require("connect-mongo")
require("dotenv").config()
const router = require("./routes/index")

const app = express()

app.set("view engine", "ejs")
app.set("views", "./views")
app.use(express.static(__dirname + "/public"))

app.use(express.json())

app.use(
  session({
    secret: "my secret",
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
    cookie: {
      // maxAge: 5000,
    },
  })
)

app.use(router)

app.listen(3000, () => {
  console.log(`Listening on PORT: http://localhost:3000`)
})

const { Router } = require("express")
const { checkAuth } = require("../middlewares/index")
const {
  getHome,
  getLogin,
  getRegister,
  getSecret,
  getLogout,
  postAuth,
} = require("../controllers/index")

const router = Router()

router.get("/", getHome)

router.get("/login", getLogin)

router.get("/register", getRegister)

router.get("/secret", checkAuth, getSecret)

router.get("/logout", getLogout)

router.post("/auth", postAuth)

module.exports = router

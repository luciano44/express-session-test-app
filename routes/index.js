const { Router } = require("express")
const { checkAuth } = require("../middlewares/checkAuth")
const {
  getLogin,
  postAuth,
  getSecret,
  getLogout,
  getHome,
} = require("../controllers/index")

const router = Router()

router.get("/", getHome)

router.get("/login", getLogin)

router.post("/auth", postAuth)

router.get("/secret", checkAuth, getSecret)

router.get("/logout", getLogout)

module.exports = router

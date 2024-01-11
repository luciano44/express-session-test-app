const getLogin = (req, res) => {
  if (req.session.isAuth) return res.render("home")
  res.render("login")
}

const postAuth = (req, res) => {
  const { username, password } = req.body

  console.log({ username, password })

  if (username != "luciano" || password != "123") {
    return res.status(403).json({ msg: "invalid username / passowrd" })
  }

  req.session.isAuth = true

  return res.status(200).json({ msg: "succesfully logged in" })
  // res.render("home")
}

const getSecret = (_req, res) => {
  res.render("secret")
}

const getLogout = async (req, res) => {
  await req.session.destroy()
  res.render("home")
}

const getHome = (_req, res) => {
  res.render("home")
}

module.exports = { getLogin, postAuth, getSecret, getLogout, getHome }
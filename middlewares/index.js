function checkAuth(req, res, next) {
  if (!req.session.isAuth) return res.render("forbidden")
  next()
}

module.exports = { checkAuth }

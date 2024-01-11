import axios from "axios"

const form = document.querySelector("form")
const usernameEl = document.querySelector("#username")
const passwordEl = document.querySelector("#password")

async function login(userObject) {
  const res = await axios.post("http://localhost:3000/auth", userObject)
  console.log(res)
  if (res.status === 200) window.location.href = "/"
}

function onSubmitHandler(e) {
  e.preventDefault()

  const formData = new FormData(form)

  const username = formData.get("username")
  const password = formData.get("password")

  usernameEl.value = ""
  passwordEl.value = ""

  login({ username, password })
}

form.addEventListener("submit", (e) => onSubmitHandler(e))

// async function fetchData() {
//   const res = await axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.data)
//   console.log(res)
// }

// fetchData()

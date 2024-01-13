import axios from "axios"

const form = document.querySelector(".register-form")
const usernameEl = document.querySelector("#username")
const passwordEl = document.querySelector("#password")

async function register(userObject) {
  const res = await axios.post("http://localhost:3000/register", userObject)
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

  register({ username, password })
}

form.addEventListener("submit", (e) => onSubmitHandler(e))

// async function fetchData() {
//   const res = await axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.data)
//   console.log(res)
// }

// fetchData()

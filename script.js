const root = document.documentElement
const toggle = document.getElementById("theme-toggle")

if (new Date().getHours() >= 18 || new Date().getHours() < 6) {
  root.setAttribute("data-theme", "dark")
} else {
  root.setAttribute("data-theme", "light")
}

toggle.addEventListener("click", () => {

  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark"

  root.setAttribute("data-theme", next)
  try {
    localStorage.setItem("theme", next)
  } catch (e) {
  }
})

//Copyright year - footer
document.getElementById("year").textContent = new Date().getFullYear()

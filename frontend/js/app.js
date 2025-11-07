// Utility Functions

function getTodayString() {
  const today = new Date()
  return today.toISOString().split("T")[0]
}

function getMenuDateForPrep() {
  const now = new Date()
  const hour = now.getHours()
  const isAfter9PM = hour >= 21

  const menuDate = new Date(now)
  if (isAfter9PM) {
    menuDate.setDate(menuDate.getDate() + 2)
  } else {
    menuDate.setDate(menuDate.getDate() + 1)
  }

  return menuDate
}

function getMenuDateString() {
  const menuDate = getMenuDateForPrep()
  const year = menuDate.getFullYear()
  const month = String(menuDate.getMonth() + 1).padStart(2, "0")
  const day = String(menuDate.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

function getDayNameFromDate(dateString) {
  const date = new Date(dateString + "T00:00:00")
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return days[date.getDay()]
}

function checkAuth(role) {
  if (role === "admin" && !sessionStorage.getItem("admin")) {
    window.location.href = "../index.html"
  }
  if (role === "employee" && !sessionStorage.getItem("employee")) {
    window.location.href = "../index.html"
  }
}

function logout() {
  sessionStorage.clear()
  window.location.href = "../index.html"
}
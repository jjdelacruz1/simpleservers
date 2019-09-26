const increment = document.getElementById("inc")
const decrement = document.getElementById("dec")
const reset = document.getElementById("reset")
const output = document.getElementById("counter")

increment.addEventListener("click", function() {
  console.log("Clicked increment")
  fetch('/increment', {
    method: 'POST'
  })
    .then(function (res) {
      return res.json()
    })
    .then(function (res) {
      output.innerHTML = res
      return
    })
})

decrement.addEventListener("click", function() {
  console.log("Clicked decrement")
  fetch('/decrement', {
    method: 'POST'
  })
    .then(function (res) {
      return res.json()
    })
    .then(function (res) {
      output.innerHTML = res
      return
    })
})

reset.addEventListener("click", function() {
  console.log("Clicked reset")
  fetch('/reset', {
    method: 'POST'
  })
    .then(function (res) {
      return res.json()
    })
    .then(function (res) {
      output.innerHTML = res
      return
    })
})
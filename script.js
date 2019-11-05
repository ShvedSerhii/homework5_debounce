let searchTemplate = document.getElementById("searchTemplate")
let inputText = document.getElementById("inputText")
let totalResult = document.getElementById("totalResult")

let template = ""
let input = ""
let result = 0

searchTemplate.oninput = function() {
  template = searchTemplate.value
}

function search(template, text) {
  let count = 0
  let pos = -1
  while ((pos = text.indexOf(template, pos + 1)) != -1) {
    count++
  }
  result = count
}

function debounce(f, ms) {
  let isCooldown = false
  return function() {
    if (isCooldown) {
      return
    }
    f.apply(this, arguments)
    isCooldown = true
    setTimeout(() => (isCooldown = false), ms)
  }
}

search = debounce(search, 3000)

inputText.oninput = function() {
  input = inputText.value
  search(template, input)
  totalResult.innerHTML = result
}

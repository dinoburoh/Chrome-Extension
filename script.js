const saveButton = document.getElementById("input-btn")
const inputText = document.getElementById("input-el")
const ulText = document.getElementById("ul-el")
let textValues = []

localStorage.setItem("name", "DINO")
localStorage.clear()

saveButton.addEventListener("click", function () {
    textValues.push(inputText.value)
    // ulText.textContent += inputText.value + " "
    const li = document.createElement("li")
    ulText.append(li)   
    li.innerHTML = `
        <a href='${inputText.value}' target='_blank'>
        ${inputText.value}
        </a>
    `
    inputText.value = " "
})


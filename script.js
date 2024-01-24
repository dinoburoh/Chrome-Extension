const saveButton = document.getElementById("input-btn")
const delButton = document.getElementById("del-btn")
const tabButton = document.getElementById("tab-btn")
const inputText = document.getElementById("input-el")
let ulText = document.getElementById("ul-el")
let leads = []
let localStorageLeads = JSON.parse(localStorage.getItem("myLeads"))

// localStorage.setItem("name", "DINO")
// localStorage.clear()


// console.log(localStorageLeads)

if (localStorageLeads) {
    leads = localStorageLeads
    renderLeads()
}

tabButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        leads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(leads))
        renderLeads()
    })
})

saveButton.addEventListener("click", function () {
    leads.push(inputText.value)
    localStorage.setItem("myLeads", JSON.stringify(leads))
    // ulText.textContent += inputText.value + " "
    renderLeads()
    inputText.value = " "
})

delButton.addEventListener("dblclick", function () {
    leads = []
    localStorage.clear()
    renderLeads()
})

function renderLeads() {

    ulText.textContent = " "
    for (let i = 0; i < leads.length; i++) {
        const li = document.createElement("li")
        ulText.append(li)
        li.innerHTML = `
            <a href='${leads[i]}' target='_blank'>
            ${leads[i]}
            </a>
        `
    }
}

// function genSentence(desc, arr) {
//     let values = ""
//     for (let i = 0; i < arr.length; i++) {
//         if(i == arr.length - 1){
//             values += arr[i]
//         }else{
//             values += `${arr[i]}, `
//         }
//     }
//     return `The ${arr.length} ${desc} are ${values}`
// }

// console.log(genSentence("largest countries", ["China", "India", "USA"]))

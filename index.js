// create countEl variable
let countEl = document.getElementById("count-el");
//  create saveBtn variable
let saveBtn = document.getElementById("save-btn");
// create incrementBtn variable
let incrementBtn = document.getElementById("increment-btn");
// create saveEl variable
let saveEl = document.getElementById("save-el");
let count = 0

// create event listeners for incrementBtn and saveBtn
incrementBtn.addEventListener("click", () => {
    count += 1
    countEl.textContent = count

})

saveBtn.addEventListener("click", () => {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
})


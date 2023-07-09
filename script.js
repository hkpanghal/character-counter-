const inputEl = document.getElementById("input")
const totalChar = document.getElementById("character")
const remEl = document.getElementById("rem")
totalChar.innerText
inputEl.addEventListener("keyup",()=>{
   updateCounter()
   
})

function updateCounter()
{
    var a = inputEl.value.length
    var b = 1000 - a
   totalChar.innerText = `Total characters : ${a}`
   
   remEl.innerText =  `Remaining :${b}`
   
}
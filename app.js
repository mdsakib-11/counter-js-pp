const countOutput = document.querySelector('.count')
const start = document.querySelector('.start')
const pause = document.querySelector('.pause')
const reset = document.querySelector('.reset')
const nap = document.querySelector('.nap')
const naps = document.querySelector('.naps')

let count = 0
let interval
let paused = false

const counter = () => {
    countOutput.innerHTML = count 
    ++count
}

start.addEventListener('click', () => {
    interval = setInterval(counter, 200)
})

pause.addEventListener('click', () => {
    if(!paused){
        clearInterval(interval)
        paused = true
        pause.innerHTML = "resume"
    }else{
        interval = setInterval(counter, 200)
        pause.innerHTML = "pause"
        paused = false
    }
})

reset.addEventListener('click', () => {
    countOutput.innerHTML = 0
    pause.innerHTML = "pause"
    clearInterval(interval)
    count = 0
    naps.innerHTML = ''
})

nap.addEventListener('click', () => {
    naps.innerHTML += `<li>Nap: ${count}</li>`
})
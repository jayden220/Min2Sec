let input = document.querySelectorAll('input')[0]
let convert = document.querySelectorAll('button')[0]
let seconds = document.getElementsByClassName('answer')[0]
convert.addEventListener('click',calAns)

function calAns() {
   let answer = input.value * 60 ;
    seconds.innerHTML = `${answer} seconds`
}

let addButton = document.getElementById('plus')
let subButton = document.getElementById('minus')
let final = document.getElementById('final')
let total = 0

final.textContent = total

const add = () => {
    let input = document.getElementById('input').value
    final.textContent = +total + +input
    total = final.textContent
    if(total < 0){
        final.style.color = 'red'
    }
    else{
        final.style.color = 'black'
    }
}

const sub = () => {
    let input = document.getElementById('input').value
    final.textContent = total - input
    total = final.textContent
    if(total < 0){
        final.style.color = 'red'
    }
    else{
        final.style.color = 'black'
    }
}

//Not as pretty as I'd like it, but I got my momentum beat up by being a big dummy!
addButton.addEventListener('click', add)
subButton.addEventListener('click', sub)

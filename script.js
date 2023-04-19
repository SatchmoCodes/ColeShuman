const popUp = document.querySelectorAll('.popUp');
const pic = document.querySelectorAll('.pic')
const xSymbol = document.querySelectorAll('.xSym')

function picClick(e) {
    let x = e.dataset.order
    popUp[x].classList.add('show')
    popUp[x].classList.remove('hidden')
    popUp[x].scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
}

function xClick(e) {
    let x = e.dataset.order
    popUp[x].classList.add('hidden')
    popUp[x].classList.remove('show')
    pic[x].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })

}

function viewWork() {
    pic[1].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
}
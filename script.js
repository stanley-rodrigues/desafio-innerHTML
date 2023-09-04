const input = document.querySelector("#main-input");

function cliqueiNoBotao() {
    alert("clique");
}

function digiteNoInput() {
    console.log(input.value);
}

function colocarNaTela() {
    const p = document.querySelector('.resultado')
   p.innerHTML = input.value
    console.log(p)
}
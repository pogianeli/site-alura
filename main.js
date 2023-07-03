document.getElementById('texto').innerText="Escreva o texto aqui"
const elemento = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

elemento.addEventListener("click", (evento) => {
  resultado.innerHTML = "Fui clicado"
})
var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; 

lista.splice(1,1)

console.log(lista);
const lista = document.querySelector("ul");
document.querySelector("#botao").addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
});

document.querySelector(".close").addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
});
function trocaImagem(cor){
    document.querySelector(".robo").src="img/Robotron 2000 - " + cor + ".png";
 }
 criaElemento(nome.value, quantidade.value)

 nome.value = ""
 quantidade.value = ""
 const nome = evento.target.elements['nome']
 const quantidade = evento.target.elements['quantidade']
 const itemAtual = {
    "nome": nome,
    "quantidade": quantidade
}
localStorage.setItem("itens", JSON.stringify(itens))
const itens = []
itens.push(itemAtual)
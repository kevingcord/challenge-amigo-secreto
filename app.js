// Array para almacenar los nombres
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if(nombre === "") {
        alert("Por favor, ingrese un nombre válido");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    mostrarAmigos();

    //Opcional si queremos verificar en la consola los nombres
    console.log(amigos);
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML = lista.innerHTML + "<li>" + amigos[i] + "</li>";
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Por favor, añade al menos uno");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
}

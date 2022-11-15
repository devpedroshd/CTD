const pratos = [
    { "item": "pipoca", "tempo": 10 },
    { "item": "macarrão", "tempo": 8 },
    { "item": "carne", "tempo": 15 },
    { "item": "feijão", "tempo": 12 },
    { "item": "brigadeiro", "tempo": 8 },
]


function microondas (numeroPrato, tempo){
    const prato = pratos[numeroPrato]

    if(!prato){
        return console.log("Prato inexistente")
    }
}


const tempoMedio = prato.tempo

if (tempo < tempoPadrao) {
    console.log("Tempo insuficiente")
} else if (tempo > tempoPadrao * 2 && tempo <= tempoPadrao * 3) {
  console.log("A comida queimou")
} else if (tempo > tempoPadrao * 3) {
  console.log("Kabummm")
} else {
  console.log("Prato pronto, bom apetite!")
}

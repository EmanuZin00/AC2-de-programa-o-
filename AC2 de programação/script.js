
let n1 = parseFloat(prompt('Digite 1 para comprar cimento\nDigite 2 para comprar Tijolo\nDigite 3 para comprar Massa Corida'));

if (n1 === 1) {
  let quantidade = parseFloat(prompt('Digite a quantidade de Sacos de cimento desejada:'));

} else if (n1 === 2) {
  let quantidade = parseFloat(prompt('Digite a quantidade de tijolos desejada:'));

} else if (n1 === 3) {
  let quantidade = parseFloat(prompt('Digite a quantidade de Sacos de  massa corrida desejada:'));

} else {
  alert('Opção inválida');
}

const peso = 20; // peso fixo de 20 kg
let distancia = parseFloat(prompt("Qual é a distância do nosso centro de distribuição até o local de entrega?"));

let precoPorKg;
let precoPorKm;
let precoTotal;

if (peso >= 0 && peso <= 10 && distancia >= 0 && distancia <= 100) {
  precoPorKg = 10;
  precoPorKm = 1;
  precoTotal = peso * precoPorKg + distancia * precoPorKm;
  alert("Preço total: R$ " + precoTotal.toFixed(2));
} else if (peso >= 0 && peso <= 10 && distancia >= 101 && distancia <= 500) {
  precoPorKg = 20;
  precoPorKm = 2;
  precoTotal = peso * precoPorKg + distancia * precoPorKm;
  alert("Preço total: R$ " + precoTotal.toFixed(2));
} else if (peso >= 11 && peso <= 500 && distancia >= 0 && distancia <= 100) {
  precoPorKg = 15;
  precoPorKm = 1.5;
  precoTotal = peso * precoPorKg + distancia * precoPorKm;
  alert("Preço total: R$ " + precoTotal.toFixed(2));
} else if (peso >= 11 && peso <= 500 && distancia >= 101 && distancia <= 500) {
  precoPorKg = 25;
  precoPorKm = 2.5;
  precoTotal = peso * precoPorKg + distancia * precoPorKm;
  alert("Preço total: R$ " + precoTotal.toFixed(2));
} else {
  alert("Os valores inseridos estão fora das faixas de peso e distância permitidas.");
}







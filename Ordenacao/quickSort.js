function quickSort(lista) {
  // Se a lista tiver tamanho 1 ou menor, ela já está ordenada
  if (lista.length <= 1) {
    return lista;
  }

  // Define um pivot de posição aleatória
  // É muito comum ver algoritmos definirem um pivot de posição fixa, como o primeiro elemento ou o elemento do meio
  // Mas decidimos aqui ficar com o algoritmo clássico 
  const pivot = Math.floor(Math.random() * lista.length);
  const valorPivot = lista[pivot];

  const menores = [];
  const maiores = [];

  // Separa a lista entre os menores e os maiores que o valor pivot
  lista.forEach(valor => {
    if (valor <= valorPivot) {
      menores.push(valor);
    } else {
      maiores.push(valor);
    }
  });

  // Retorna a chamada recursiva de cada uma das listas concatenadas
  return quickSort(menores).concat(quickSort(maiores));
}

module.exports = quickSort;
function bubbleSort(lista) {
  for (let i = 0; i < lista.length; i++) {
    for (let j = i + 1; j < lista.length; j++) {
      // Compara o valor da posição i com todos os valores que estão à frente.
      // Se o valor comparado é menor, troca o valor da posição i com o de posição j
      if (lista[j] < lista[i]) {
        [lista[i], lista[j]] = [lista[j], lista[i]]
      }
    }
  }
}

module.exports = bubbleSort;
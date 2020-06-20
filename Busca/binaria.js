function buscaBinaria(lista, alvo) {
  return buscaBinariaRecursiva(lista, 0, lista.length, alvo);
}

function buscaBinariaRecursiva(lista, inicio, fim, alvo) {
  // Se os ponteiros de inicio e fim colidirem, significa que estamos buscando em um intervalo vazio. 
  // Logo o alvo não está na lista
  if (inicio >= fim) {
    return -1;
  }

  // Salva o ponto do meio da lista
  const meio = Math.floor((inicio + fim) / 2);

  // Define os limites da busca dependendo se o alvo for igual, menor ou maior que o ponto do meio atual
  if (lista[meio] === alvo) {
    return meio;
  } else if (lista[meio] > alvo) {
    return buscaBinariaRecursiva(lista, inicio, meio, alvo);
  } else {
    return buscaBinariaRecursiva(lista, meio + 1, fim, alvo);
  }
}

module.exports = buscaBinaria;
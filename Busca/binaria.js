function buscaBinaria(lista, alvo) {
  return buscaBinariaRecursiva(lista, 0, lista.length, alvo);
}

function buscaBinariaRecursiva(lista, inicio, fim, alvo) {
  if (inicio >= fim) {
    return -1;
  }
  const meio = Math.floor((inicio + fim) / 2);

  if (lista[meio] === alvo) {
    return meio;
  } else if (lista[meio] > alvo) {
    return buscaBinariaRecursiva(lista, inicio, meio, alvo);
  } else {
    return buscaBinariaRecursiva(lista, meio + 1, fim, alvo);
  }
}

module.exports = buscaBinaria;
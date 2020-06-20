function buscaLinear(lista, alvo) {
  // Verifica todos os elementos
  for (let i = 0; i < lista.length; i++) {
    // Se o valor da posição for igual ao alvo, retorna o indíce
    if (lista[i] === alvo) {
      return i;
    }
  }

  // Caso valor não tenha sido encontrado, retorna -1
  return -1;
}

module.exports = buscaLinear;
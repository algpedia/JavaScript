function buscaLinear(lista, alvo) {
  for(let i=0; i<lista.length; i++) {
    if (lista[i] === alvo) {
      return i;
    }
  }
  return -1;
}

module.exports = buscaLinear;
function mergeSort(lista) {
  if (lista.length <= 1) {
    return lista;
  }

  const meio = Math.floor(lista.length / 2);

  const parte1 = lista.slice(0, meio);
  const parte2 = lista.slice(meio);

  return juntarOrdenado(
    mergeSort(parte1),
    mergeSort(parte2)
  )
}

function juntarOrdenado(lista1, lista2) {
  const res = [];
  let index_lista1 = 0;
  let index_lista2 = 0;
  while(index_lista1 < lista1.length || index_lista2 < lista2.length) {
    if (lista1[index_lista1] === undefined || lista2[index_lista2] < lista1[index_lista1]) {
      res.push(lista2[index_lista2]);
      index_lista2++;
    } else if (lista2[index_lista2] === undefined || lista1[index_lista1] <= lista2[index_lista2]) {
      res.push(lista1[index_lista1]);
      index_lista1++;
    }
  }
  return res;
}

module.exports = mergeSort;
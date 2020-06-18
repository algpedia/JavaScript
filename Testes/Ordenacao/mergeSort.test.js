const expect = require('chai').expect;
const mergeSort = require('../../Ordenacao/mergeSort');

describe('Ordenação', function () {
  describe('Merge Sort', function () {
    it('Deve ordenar vetor com valores invertidos', function () {
      expect(mergeSort([3, 2, 1])).to.eql([1, 2, 3]);
    });

    it('Deve manter vetor ja ordenado', function () {
      expect(mergeSort([1, 2, 3, 4, 5])).to.eql([1, 2, 3, 4, 5]);
    });

    it('Deve ordenar com valores misturados', function () {
      expect(mergeSort([1, 3, 2, 7, 5])).to.eql([1, 2, 3, 5, 7]);
    });

    it('Deve ordenar um vetor vazio', function () {
      expect(mergeSort([])).to.eql([]);
    });
  });
})
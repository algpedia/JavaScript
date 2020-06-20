const expect = require('chai').expect;
const quickSort = require('../../Ordenacao/quickSort');

describe('Ordenação', function () {
  describe('Quick Sort', function () {
    it('Deve ordenar vetor com valores invertidos', function () {
      expect(quickSort([3, 2, 1])).to.eql([1, 2, 3]);
    });

    it('Deve manter vetor ja ordenado', function () {
      expect(quickSort([1, 2, 3, 4, 5])).to.eql([1, 2, 3, 4, 5]);
    });

    it('Deve ordenar com valores misturados', function () {
      expect(quickSort([1, 3, 2, 7, 5])).to.eql([1, 2, 3, 5, 7]);
    });

    it('Deve ordenar um vetor vazio', function () {
      expect(quickSort([])).to.eql([]);
    });
  });
});
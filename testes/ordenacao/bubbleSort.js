const expect = require('chai').expect;
const bubbleSort = require('../../Ordenacao/bubbleSort');

describe('Ordenação', function () {
  describe('BubbleSort', function () {
    it('Deve ordenar vetor com valores invertidos', function () {
      const input = [3, 2, 1];
      bubbleSort(input);
      expect(input).to.eql([1, 2, 3]);
    });

    it('Deve manter vetor ja ordenado', function () {
      const input = [1, 2, 3, 4, 5];
      bubbleSort(input);
      expect(input).to.eql([1, 2, 3, 4, 5]);
    });

    it('Deve ordenar com valores misturados', function () {
      const input = [1, 3, 2, 7, 5];
      bubbleSort(input);
      expect(input).to.eql([1, 2, 3, 5, 7]);
    });
  });
})
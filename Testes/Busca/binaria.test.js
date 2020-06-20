const expect = require('chai').expect;
const buscaBinaria = require('../../Busca/binaria');

describe('Busca', function () {
  describe('Binária', function () {
    it('Deve encontrar o valor no primeiro index', function () {
      expect(buscaBinaria([1, 2, 3, 4, 5, 6, 7, 8], 1)).to.equal(0);
    });

    it('Deve encontrar o valor no ultimo index', function () {
      expect(buscaBinaria([1, 2, 3, 4, 5, 6, 7, 8], 8)).to.equal(7);
    });

    it('Deve encontrar o valor no index intermediario', function () {
      expect(buscaBinaria([1, 2, 3, 4, 5, 6, 7, 8], 3)).to.equal(2);
    });

    it('Deve retornar -1 se o valor não existe no vetor', function () {
      expect(buscaBinaria([1, 2, 3, 4, 5, 6, 7, 8], 77)).to.equal(-1);
    });
  });
});
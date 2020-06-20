const expect = require('chai').expect;
const buscaLinear = require('../../Busca/linear');

describe('Busca', function () {
  describe('Linear', function () {
    it('Deve encontrar o valor no primeiro index', function () {
      expect(buscaLinear([2, 1, 3, 7, 1, 5], 2)).to.equal(0);
    });

    it('Deve encontrar o valor no ultimo index', function () {
      expect(buscaLinear([2, 1, 3, 7, 1, 5], 5)).to.equal(5);
    });

    it('Deve encontrar o valor no index intermediario', function () {
      expect(buscaLinear([2, 1, 3, 7, 1, 5], 3)).to.equal(2);
    });

    it('Deve retornar -1 se o valor não existe no vetor', function () {
      expect(buscaLinear([2, 1, 3, 7, 1, 5], 77)).to.equal(-1);
    });
  });
});
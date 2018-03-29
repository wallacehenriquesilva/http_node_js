const CramerBusiness = require("./../bussiness/CramerBusiness");
var equacoes = [];

var cramer = null;

class CramerService {
    /**
     *
     */
    constructor() {
        cramer = new CramerBusiness();
    }

    /**
     *
     * @param values
     */
    calcula(value, callback) {
        this.readParams(value, function (retorno) {
            cramer.calcula(retorno, function (call) {
                callback(JSON.stringify(call));
            })
        });
    }

    /**
     *
     * @param params
     * @returns {*|Array}
     */
    readParams(params, callback) {
        for (var key in params.query) {
            this.read(params.query[key].toLocaleLowerCase(), function (call) {
                equacoes.push(call);
            });
        }
        callback(equacoes);

    }

    read(equacao, callback) {
        var x = equacao.split(" ").join("+");
        var aux = x.split("=");
        var equacaoP = aux[0].replace("[", "").replace("]", "").split(",");

        equacaoP = equacaoP.map(e => {
            if (e.length == 1) {
                e = e.replace(/[a-z]/i, "1");
            } else if (e.length == 2 && e.indexOf("-") == -1 && e.indexOf("+") == -1) {
                e = e.replace(/[a-z]/i, "*1");
            } else if (e.length == 2 && (e.indexOf("-") != -1 || e.indexOf("+") != -1)) {
                e = e.replace(/[a-z]/i, "1");
            } else {
                e = e.replace(/[a-z]/i, "*1");
            }
            return parseFloat(eval(e));
        });
        callback({
            equacao: equacaoP,
            resultado: aux[1]
        });
    }
}

module.exports = CramerService;

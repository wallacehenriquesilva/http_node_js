const FibonacciBusiness = require("./../bussiness/FibonacciBusiness");

var fibonacci = null;

class FibonacciService {
    /**
     *
     */
    constructor() {
        fibonacci = new FibonacciBusiness();
    }

    /**
     *
     * @param values
     */
    calcula(value, callback) {
        this.readParams(value, function (retorno) {
            fibonacci.calcula(retorno, function (call) {
                callback(JSON.stringify(call));
            });
        });
    }

    /**
     *
     * @param params
     * @returns {*|Array}
     */
    readParams(params, callback) {
        callback(parseInt(params.query['num']));
    }
}

module.exports = FibonacciService;

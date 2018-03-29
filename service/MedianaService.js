const MedianaBusiness = require("./../bussiness/MedianaBusiness");

var mediana = null;

class MedianaService {
    /**
     *
     */
    constructor() {
        mediana = new MedianaBusiness();
    }

    /**
     *
     * @param values
     */
    calcula(values, callback) {
        this.readParams(values, function (retorno) {
            mediana.calcula(retorno, function (call) {
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
        callback(params.query['list'].split(",")
            .map(parseFloat)
            .sort());
    }
}

module.exports = MedianaService;

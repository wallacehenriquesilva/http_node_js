const MmqBusiness = require("./../bussiness/MmqBusiness");

var mmq = null;

class MmqService {
    /**
     *
     */
    constructor() {
        mmq = new MmqBusiness();
    }

    /**
     *
     * @param values
     */
    calcula(value, callback) {
        this.readParams(value, function (retorno) {
            mmq.calcula(retorno, function (call) {
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
        var obj = [];

        params.query['valores'].split(";").forEach(x => {
            var i = x.split(",");
            obj.push({x: parseFloat(i[0]), y: parseFloat(i[1])});
        });

        callback(obj);
    }
}

module.exports = MmqService;

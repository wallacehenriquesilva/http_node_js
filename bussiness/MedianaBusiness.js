class MedianaBusiness {
    constructor() {
    }

    calcula(values, callback) {
        var length = values.length;


        if (length % 2 == 0) {
            callback({result: (values[(length / 2) - 1] + values[(length / 2)]) / 2});
        } else {
            callback({result: (values[(length / 2) - 0.5])});
        }
    }
}

module.exports = MedianaBusiness;
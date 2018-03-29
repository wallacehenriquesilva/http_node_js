class FibonacciBusiness {
    constructor() {
        this.result = [0, 1];
        this.pos = 0;
    }

    calcula(value, callback) {
        if (this.pos == value) {
            callback({result: this.result});
        } else {
            this.result.push(this.result[this.pos] + this.result[this.pos + 1]);
            ++this.pos;
            this.calcula(value, callback)
        }
    }
}

module.exports = FibonacciBusiness;
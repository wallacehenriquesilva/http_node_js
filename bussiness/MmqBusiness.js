class MmqBusiness {
    constructor() {
        this.result = [0, 1];
        this.pos = 0;
    }

    calcula(value, callback) {
        var n = value.length;
        var somatoriaXY = 0;
        var somatoriaX = 0;
        var somatoriaY = 0;
        var somatoriaXQ = 0;


        value.forEach(obj => {
            somatoriaXY += (obj.x * obj.y);

            somatoriaX += obj.x;

            somatoriaY += obj.y;

            somatoriaXQ += (obj.x * obj.x);
        });

        var a = (((n * somatoriaXY) - (somatoriaX * somatoriaY)) / ((n * somatoriaXQ) - (somatoriaX * somatoriaX))).toFixed(2);

        var b = ((somatoriaY - (somatoriaX - a)) / n).toFixed(2);


        callback({result: "y = " + a + " . x + " + b});

    }
}

module.exports = MmqBusiness;

//http://localhost:3000/api/v1/calculator/mmq?valores=1,80.5;2,81.6;3,82.1;4,83.7;5,83.9;6,85
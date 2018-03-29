class CramerBusiness {
    constructor() {
        this.result = [0, 1];
        this.pos = 0;
    }


    calcula(value, callback) {
        var matriz = [];

        value.forEach(v => matriz.push(v.equacao));

        var matrizX = this.cloneMatriz(matriz);
        var matrizY = this.cloneMatriz(matriz);
        var matrizZ = this.cloneMatriz(matriz);


        var d = this.determinante(matriz);

        matrizX[0][0] = parseFloat(value[0].resultado);
        matrizX[1][0] = parseFloat(value[1].resultado);
        matrizX[2][0] = parseFloat(value[2].resultado);
        var dx = this.determinante(matrizX);

        matrizY[0][1] = parseFloat(value[0].resultado);
        matrizY[1][1] = parseFloat(value[1].resultado);
        matrizY[2][1] = parseFloat(value[2].resultado);
        var dy = this.determinante(matrizY, function (call) {
            dy = call;
        });


        matrizZ[0][2] = parseFloat(value[0].resultado);
        matrizZ[1][2] = parseFloat(value[1].resultado);
        matrizZ[2][2] = parseFloat(value[2].resultado);
        var dz = this.determinante(matrizZ);

        var x = dx / d;
        var y = dy / d;
        var z = dz / d;

        callback({
            "x": x,
            "y": y,
            "z": z,
            "determinante": d
        });
    }

    determinante(matriz) {
        if (matriz.length == 2) {
            return ((matriz[0][0] * matriz[1][1]) - (matriz[0][1] * matriz[1][0]));
        } else if (matriz.length == 3) {
            return matriz[0][0] * this.determinante(this.deleteRowColumn(matriz, 0)) -
                matriz[0][1] * this.determinante(this.deleteRowColumn(matriz, 1)) +
                matriz[0][2] * this.determinante(this.deleteRowColumn(matriz, 2));
        } else if (matriz.length == 4) {
            var answer = 0;
            for (var i = 0; i < matriz.length; i++) {
                answer += Math.pow(-1, i) * matriz[0][i] * this.determinante(this.deleteRowColumn(matriz, i));
            }
            return (answer);
        }
    }

    deleteRowColumn(matriz, index) {
        var temp = [];
        for (var i = 0; i < matriz.length; i++) {
            temp.push(matriz[i].slice(0));
        }
        temp.splice(0, 1);
        for (var i = 0; i < temp.length; i++) {
            temp[i].splice(index, 1);
        }
        return (temp);
    }

    cloneMatriz(arr) {
        var i, copy;

        if (Array.isArray(arr)) {
            copy = arr.slice(0);
            for (i = 0; i < copy.length; i++) {
                copy[i] = this.cloneMatriz(copy[i]);
            }
            return (copy);
        } else if (typeof arr === 'object') {
            throw 'Cannot clone array containing an object!';
        } else {
            return (arr);
        }

    }


}

module.exports = CramerBusiness;
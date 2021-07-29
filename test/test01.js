function clasificaElementos(index) {



    //index = [10, 0, -8];
    positivos = [];
    negativos = [];
    igualACero = [];

    for (let i = 0; i <= index.length; i++) {



        if (index[i] > 0) {
            positivos.push(index[i]);
        } else if (index[i] < 0) {


            negativos.push(index[i]);

        } else if (index[i] === 0) {
            igualACero.push(index[i]);
        }

    }

    Npositivos = (positivos.length / index.length).toFixed(4);
    Nnegativos = (negativos.length / index.length).toFixed(4);
    Nzero = (igualACero.length / index.length).toFixed(4);

    console.log(Npositivos + ' , ' + Nnegativos + ' , ' + Nzero);




    return [Npositivos, Nnegativos, Nzero];

}


module.exports = { clasificaElementos };
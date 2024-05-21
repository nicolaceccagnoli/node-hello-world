// Definisco una funzione per estrapolare un indice casuale da un array
function getRandomIndex(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Esporto la funzione 
module.exports = getRandomIndex;
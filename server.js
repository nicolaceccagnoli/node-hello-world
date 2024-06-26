// Importo il pacchetto dotenv e lo intrappolo in una variabile
const dotenv = require("dotenv");
// Utilizzo il metodo config di dotenv
dotenv.config();
// Importo l'oggetto HTTP (modulo)
const http = require("http");
const port = process.env.PORT || 8080;
const host = process.env.host || 'localhost';

// Importo il modulo quotes da app.js
const quotes = require('./app.js');

// Importo la funzione da utils.js
const getRandomIndex = require('./utils.js');

// Creo la funzione che definisce cosa avviene quando faccio una richiesta al server 
// (istanzio il server usando la sua proprietà createServer)
const server = http.createServer((req, res) => {
    console.log(`${req.method} | ${req.url} effettuata`);
    if (req.url === '/favicon.ico') {
        res.writeHead(404);
        res.end();
        return;
    }
    res.writeHead(200, {
        // Faccio capire alla risposta che tipo di dato sto inviando
        "Content-Type": "text/html;charset=utf-8"
    });

    // Dichiaro una variabile per la frase casuale, richiamando la funzione getRandomIndex
    const randomQuote = getRandomIndex(quotes);
    res.end(`<h1 style='color:blue'>${randomQuote}</h1>`);
});

// Dico di fare qualcosa al server
server.listen(port, host, () => {
    console.log(`Server avviato su http://${host}:${port}`);
});
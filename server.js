// importo express 
const express = require('express');
// specifico la porta
const PORT = 3000;
// creo una istanza del server
const app = express();

// deifinisco la cartella per gli asset statici
app.use(express.static("public"));

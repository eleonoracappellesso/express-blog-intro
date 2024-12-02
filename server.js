// importo express 
const express = require('express');
const { title } = require('process');
// specifico la porta
const PORT = 3000;
// creo una istanza del server
const app = express();

// deifinisco la cartella per gli asset statici
app.use(express.static("public"));

const posts = [
    {
        title: "Ciambellone",
        content: "Il ciambellone è un dolce soffice e semplice, perfetto per la colazione o per una merenda. Preparato con ingredienti semplici come farina, zucchero, uova e burro, è ideale da gustare insieme a una tazza di tè.",
        img: "images/ciambellone.jpeg",
        tags: ["dolce", "colazione", "merenda", "ciambella", "ricetta semplice"]
    },
    {
        title: "Cracker alla barbabietola",
        content: "I cracker alla barbabietola sono uno snack sano e croccante, con un tocco di colore e sapore dato dalla barbabietola. Perfetti come spuntino o da accompagnare a un antipasto.",
        img: "images/cracker_barbabietola.jpeg",
        tags: ["snack", "barbabietola", "salato", "crunchy", "ricetta facile"]
    },
    {
        title: "Pane fritto dolce",
        content: "Il pane fritto dolce è una ricetta rustica e golosa, preparata con fette di pane inzuppate in una pastella dolce, fritte e poi cosparse di zucchero. Un'idea sfiziosa per una colazione o una merenda dolce.",
        img: "images/pane_fritto_dolce.jpeg",
        tags: ["dolce", "frittura", "pane", "merenda", "ricetta rustica"]
    },
    {
        title: "Pasta alla barbabietola",
        content: "La pasta alla barbabietola è un primo piatto originale, dove la barbabietola conferisce un colore intenso e un sapore unico alla pasta fresca. Perfetta per chi cerca qualcosa di diverso ma gustoso.",
        img: "images/pasta_barbabietola.jpeg",
        tags: ["pasta", "barbabietola", "vegetariano", "primo piatto", "ricetta colorata"]
    },
    {
        title: "Torta paesana",
        content: "La torta paesana è un dolce tradizionale, ricco e morbido, preparato con ingredienti semplici come pane raffermo, latte, cacao e frutta secca. Un dolce della tradizione che sa di casa e di famiglia.",
        img: "images/torta_paesana.jpeg",
        tags: ["dolce", "tradizionale", "ricetta della nonna", "frutta secca", "torta"]
    }
];

//console.log(posts);

// rotte
app.get('/', (req, res) => {
    res.send("Server del mio blog");
});

app.get('/bacheca', (req, res) => {
    res.json({
        posts: posts,
        count: posts.length
    });
});


app.get('/ciambellone', (req, res) => {
    res.send('<img src="images/ciambellone.jpeg" alt="ciambellone">');
});

app.get('/cracker', (req, res) => {
    res.send('<img src="images/cracker_barbabietola.jpeg" alt="cracker-barbabietola">');
});

app.get('/pane', (req, res) => {
    res.send('<img src="images/pane_fritto_dolce.jpeg" alt="pane-fritto">');
});

app.get('/pasta', (req, res) => {
    res.send('<img src="images/pasta_barbabietola.jpeg" alt="pasta-barbabietola">');
});

app.get('/torta', (req, res) => {
    res.send('<img src="images/torta_paesana.jpeg" alt="torta-paesana">');
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>Not Found !</h1>');
});

//metto il server in ascolto su localhost alla porta 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
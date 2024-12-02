// importo express 
const { count } = require('console');
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

// app.get('/bacheca', (req, res) => {
//     res.json({
//         posts: posts,
//         count: posts.length
//     });
// });

// root che filtra i post in base ai tags
app.get("/bacheca", (req, res) => {
    // dalla query string prendo il tag da filtrare
    const tagName = req.query.tags;
    // inizializzo postList con tutti i post
    let postList = [...posts];

    //se è stato specificato un tag, filtro i post in base a quel tag
    if (tagName) {
        postList = posts.filter((post) => {
            //filtro i post in base ai tag specificati
            return post.tags.includes(tagName.toLowerCase());
        });
        // se non ci sono post con il tag specificato restituisce un errore
        if (postList.length === 0) {
            postList = { Errore: `Nessun post contiene il tag ${(req.query.tags).toUpperCase()}` };
        }
    }
    // restituisco un oggetto json con i post filtrati e il conteggio dei post
    res.json({
        posts: postList,
        count: postList.length
    }
    );
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>Error 404 - Not Found</h1>');
});

//metto il server in ascolto su localhost alla porta 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// Import des modules nécessaires
const express = require('express');
const bodyParser = require('body-parser');
const os = require('os');

// Création de l'application Express
const app = express();

// Middleware pour décoder le corps des requêtes en JSON
app.use(bodyParser.json());

// Route pour gérer les requêtes GET à la racine "/"
app.get('/', (req, res) => {
  res.send('Bonjour, ceci est la réponse à une requête GET !');
});

// Route pour gérer les requêtes POST à la racine "/"
app.post('/', (req, res) => {
  // Récupération des données du corps de la requête
  const donneesDuCorps = req.body;
  console.log(donneesDuCorps);

  // Envoyer une réponse au client
  res.send('Données reçues et traitées !');
});

// Démarrer le serveur sur le port 8080
const port = 8080;
app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});

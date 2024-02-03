// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Données simulées pour les actions
let actions = [
    { id: 1, nom: 'TechCorps', prix: 100 },
    { id: 2, nom: 'HealthMed', prix: 150 },
    { id: 3, nom: 'EcoEnergy', prix: 120 },
    { id: 4, nom: 'BourseSaa', prix: 180 },
    { id: 5, nom: 'PlanCript', prix: 200 },
    // Ajoutez plus d'actions ici...
  ];

app.use(cors());
app.use(express.json());

// Route pour récupérer les actions
app.get('/actions', (req, res) => {
    res.json(actions);
  });

// Route pour Ajouter une action  
app.post('/actions', (req, res) => {
  if (!req.body.nom || req.body.prix == null) {
      return res.status(400).send('Les données de la nouvelle action sont incomplètes.');
  }
  const nouvelleAction = { id: actions.length + 1, nom: req.body.nom, prix: req.body.prix };
  actions.push(nouvelleAction);
  res.status(201).json(nouvelleAction);
});

// Route pour supprimer une action 
app.delete('/actions/:id', (req, res) => {
    const id = parseInt(req.params.id);
    actions = actions.filter(action => action.id !== id);
    res.status(204).send();
  });

  
// Fonction pour ajuster le prix d'une action de manière aléatoire
function ajusterPrixAction(action) {
    const pourcentageDeVariation = 0.10; // 10% de variation
    const variation = action.prix * pourcentageDeVariation * (Math.random() - 0.10) * 2;
    action.prix = Math.max(0, action.prix + variation);
  }
  
  // Fonction pour mettre à jour les prix de toutes les actions
  function miseAJourPrixActions() {
    actions.forEach(ajusterPrixAction);
  }
  
  // Exécuter la mise à jour des prix toutes les 5 secondes
  setInterval(miseAJourPrixActions, 4000);
  

// Route pour mettre à jour le prix d'une action
app.put('/actions/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const nouveauPrix = parseFloat(req.body.prix);

  if (isNaN(nouveauPrix) || nouveauPrix <= 0) {
      return res.status(400).send('Le prix doit être un nombre valide et supérieur à 0.');
  }

  let action = actions.find(action => action.id === id);
  if (!action) {
      return res.status(404).send('Action non trouvée.');
  }

  action.prix = nouveauPrix;
  res.json(action);
});

// Gestion des erreurs 404 pour les routes non définies
app.use((req, res) => {
    res.status(404).send('Page non trouvée');
  });

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
  });

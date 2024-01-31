Projet de Suivi des Actions

Ce projet consiste en un serveur backend Express qui gère les données des actions 
et un frontend React qui affiche ces données sous forme de graphiques.
Configuration du serveur (server.js)

Le serveur Express fournit plusieurs routes pour gérer les actions :

    GET /actions : Récupère la liste des actions.
    POST /actions : Ajoute une nouvelle action.
    DELETE /actions/:id : Supprime une action par son ID.
    PUT /actions/:id : Met à jour le prix d'une action spécifique.

Des fonctions supplémentaires ajustent les prix des actions de manière aléatoire.
Démarrage du Serveur

    Installez Node.js et npm si ce n'est pas déjà fait.
    Exécutez npm install pour installer les dépendances.
    Lancez le serveur avec node server.js.
    Le serveur sera accessible à http://localhost:3000.

Composant React : MainPanel (MainPanel.jsx)

Le composant MainPanel utilise Axios pour récupérer les données des actions du serveur et les affiche sous forme de graphiques différents (ligne, barre, prix).
Utilisation

    Assurez-vous que le serveur Express est en cours d'exécution.
    Intégrez MainPanel dans votre application React.
    Les graphiques se mettront à jour automatiquement avec les données du serveur.

Technologies Utilisées

    Backend : Node.js, Express.js
    Frontend : React.js
    Bibliothèques : Axios, Chart.js
	
Par Nap.
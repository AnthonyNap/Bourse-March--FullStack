const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send({ message: 'Aucun token fourni.' });

  jwt.verify(token, process.env.SECRET, function(err, decoded) {
    if (err) return res.status(500).send({ message: `Échec de l'authentification du token.` });
    
    // Si tout est bon, sauvegarder dans la requête pour l'utilisation dans d'autres routes
    req.userId = decoded.id;
    next();
  });
}

export default verifyToken;


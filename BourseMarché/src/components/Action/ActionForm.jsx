// /src/components/ActionForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

function ActionForm({ setActions, actionToEdit }) {
  const [nom, setNom] = useState(actionToEdit ? actionToEdit.nom : '');
  const [prix, setPrix] = useState(actionToEdit ? actionToEdit.prix : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const actionData = { nom, prix: Number(prix) };

    try {
      if (actionToEdit) {
        // Mise à jour d'une action existante
        const response = await axios.put(`http://localhost:3000/actions/${actionToEdit.id}`, actionData);
        setActions((prevActions) => prevActions.map(action => action.id === actionToEdit.id ? response.data : action));
      } else {
        // Ajout d'une nouvelle action
        const response = await axios.post('http://localhost:3000/actions', actionData);
        setActions((prevActions) => [...prevActions, response.data]);
      }
      // Réinitialiser le formulaire
      setNom('');
      setPrix('');
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire :', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Nom de l'action" />
      <input type="number" value={prix} onChange={(e) => setPrix(e.target.value)} placeholder="Prix de l'action" />
      <button type="submit">Soumettre</button>
    </form>
  );
}

export default ActionForm;


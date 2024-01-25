// /src/components/ActionItem.jsx
import React from 'react';
import axios from 'axios';

function ActionItem({ action, setActions }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/actions/${action.id}`);
      setActions(prevActions => prevActions.filter(a => a.id !== action.id));
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'action :', error);
    }
  };

  const handleEdit = () => {
    // Logique pour modifier une action
  };

  return (
    <div>
      <span>{action.nom} - {action.prix}€</span>
      <button onClick={handleEdit}>Modifier</button>
      <button onClick={handleDelete}>Supprimer</button>
    </div>
  );
}

export default ActionItem;


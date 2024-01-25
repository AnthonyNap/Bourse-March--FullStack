// /src/components/ActionList.jsx
import React from 'react';
import ActionItem from './ActionItem';

function ActionList({ actions, setActions }) {
  return (
    <div>
      {actions.map(action => (
        <ActionItem key={action.id} action={action} setActions={setActions} />
      ))}
    </div>
  );
}

export default ActionList;

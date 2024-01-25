// /components/MessageTicker.jsx
import React from 'react';
import './StyleCss/MessageTicker.css';

const messages = [
    "Ensemble, nous construisons un avenir numérique meilleur.",
    "Nouvelle version de notre application maintenant disponible !",
    "En ces temps difficiles, nous sommes là pour vous aider.",
];

const MessageTicker = () => {
    return (
        <div className="message-ticker">
            {messages.map((message, index) => (
                <span key={index}>{message} - </span>
            ))}
        </div>
    );
};

export default MessageTicker;
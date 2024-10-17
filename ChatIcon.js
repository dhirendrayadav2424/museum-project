import React, { useState } from 'react';
import Chatbot from './Chatbot'; // Import the Chatbot component
import './Chatbot.css'; // Ensure styles are applied


const ChatIcon = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChatbox = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="chat-icon" onClick={toggleChatbox}>
                {/* Update logo with the new image */}
                <img src={`${process.env.PUBLIC_URL}/Chatbot icon.jpeg`}  alt="Chatbot Logo" className="chat-bubble" />
            </div>
            {isOpen && <Chatbot />}
        </div>
    );
};

export default ChatIcon;

import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import SearchBar from './SearchBar'; // Import the SearchBar component

const responses = {
    "Get a Ticket": "Here’s the link to get your ticket: [Ticket Link]",
    "Quick Guide": "You can find the quick guide here: [Guide Link]",
    "Hello": "Hi there! How can I help you today?",
    "Help": "Sure! What do you need help with?",
    "Bye": "Goodbye! Have a great day!",
    "Museum Timings": "The museum is open from 10 AM to 6 PM, every day.",
    "Special Exhibits": "Currently, we have exhibits on Indian Art and History. Would you like to know more?",
    "Cultural Heritage": "India has a rich cultural heritage, including classical dance forms, music, and art. Do you want to learn about a specific aspect?",
    "Famous Monuments": "India is home to many famous monuments like the Taj Mahal, Qutub Minar, and Hampi. Would you like details on any of these?",
    "Events This Month": "This month, we have a special exhibition on Mughal Architecture. It runs from the 15th to the 30th. Would you like to book a ticket?",
};

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const simulateBotResponse = (userInput) => {
        setIsTyping(true);
        setTimeout(() => {
            const botMessage = {
                text: getBotResponse(userInput),
                sender: 'bot',
            };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
            setIsTyping(false);
        }, 1000);
    };

    const getBotResponse = (userInput) => {
        return responses[userInput] || "Sorry, I don't have that information. Can I help you with something else?";
    };

    const quickReply = (reply) => {
        const userMessage = { text: reply, sender: 'user' };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        simulateBotResponse(reply);
    };

    const handleSearch = (query) => {
        if (responses[query]) {
            const userMessage = { text: query, sender: 'user' };
            setMessages((prevMessages) => [...prevMessages, userMessage]);
            simulateBotResponse(query);
        } else {
            const userMessage = { text: `No results for "${query}"`, sender: 'user' };
            setMessages((prevMessages) => [...prevMessages, userMessage]);
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="chatbot-container">
            <SearchBar onSearch={handleSearch} /> {/* Add SearchBar here */}
            <div className="chat-window">
                <div className="messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={msg.sender}>
                            {msg.text}
                        </div>
                    ))}
                    {isTyping && <div className="bot typing">Bot is typing...</div>}
                    <div ref={messagesEndRef} /> {/* Scroll reference */}
                </div>
                <div className="quick-replies">
                    {Object.keys(responses).map((key) => (
                        <button key={key} onClick={() => quickReply(key)}>
                            {key}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Chatbot;

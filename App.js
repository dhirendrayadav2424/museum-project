import React from 'react';
import SearchBar from './SearchBar'; // Import the SearchBar component
import ChatIcon from './ChatIcon'; // Import the ChatIcon component
import './Chatbot.css';


function App() {
    const handleSearch = (query) => {
        console.log('Searching for:', query); // Handle search logic here
    };
<div ><img src={`${process.env.PUBLIC_URL}/background14.jpeg`} alt="logo"  />='logo' 

> </div>
    return (
        <div className="BOT">
            
 
            <SearchBar onSearch={handleSearch} />
            <ChatIcon />
        </div>
    );
}

export default App;
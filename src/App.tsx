import React, {useState } from 'react';
import './App.css';
import Chat from './Chat';
import Form from './Form';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="app-container">
      <div className="view-container">
        <header className="header">
          <h1>{isChatOpen ? 'CHAT' : 'FORM'}</h1>
          <button className="toggle-button" onClick={toggleChat}>
            {isChatOpen ? 'Go to Form' : 'Go to Chat'}
          </button>
        </header>
        {isChatOpen ? <Chat /> : <Form />}
      </div>
    </div>
  );
};

export default App;

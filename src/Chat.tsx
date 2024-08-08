import React, { useState, useEffect } from 'react';
import './Chat.css';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight < window.outerHeight / 2) {
        setIsKeyboardOpen(true);
      } else {
        setIsKeyboardOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`chat-container ${isKeyboardOpen ? 'keyboard-open' : ''}`}>
      <main className="chat-main">
        {messages.map((msg, index) => (
          <div key={index} className="message">{msg}</div>
        ))}
      </main>
      <footer className="chat-footer">
        <form onSubmit={handleSendMessage}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
          />
          <button type="submit">Send</button>
        </form>
      </footer>
    </div>
  );
};

export default Chat;

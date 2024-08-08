import React, { useEffect, useState } from 'react';
import './Form.css';

const Form: React.FC = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

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
    <div className={`container ${isKeyboardOpen ? 'keyboard-open' : ''}`}>
      <main className="main-content">
        <h1>Fill out the form below:</h1>
        <form>
          <label>
            Name:
            <input type="text" placeholder="Enter your name" />
          </label>
          <label>
            Email:
            <input type="email" placeholder="Enter your email" />
          </label>
          <label>
            Message:
            <textarea placeholder="Enter your message"></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </main>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default Form;

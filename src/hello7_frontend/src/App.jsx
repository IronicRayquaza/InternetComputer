import React from 'react';
import './App.css'; // Import the CSS file for styling

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>About Me</h1>
      </header>

      <section className="intro">
        <h2>Introduction</h2>
        <p>
          Hello! My name is [Your Name], and I am a [Your Profession or Title]. I have a passion for [Your Passion or Field] and have been working in this area for [Number] years. 
          I enjoy [Hobbies or Interests] and am always looking for new challenges and opportunities to learn and grow.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
          <li>Skill 4</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <p>
          You can reach me via:
        </p>
        <ul>
          <li>Email: [your.email@example.com]</li>
          <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></li>
          <li>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a></li>
        </ul>
      </section>

      <footer className="footer">
        <p>&copy; 2024 [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

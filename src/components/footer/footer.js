import React, { useState } from 'react';
import './footer.css';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      category,
    };

    try {
      const response = await fetch('http://localhost:9292/subscribers/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Newsletter subscription successful!');
        setName('');
        setEmail('');
        setCategory('');
        alert('Newsletter subscription successful! To unsubscribe, contact Admin.');
      } else {
        console.error('Error submitting newsletter subscription');
      }
    } catch (error) {
      console.error('Error submitting newsletter subscription', error);
    }
  };

  return (
    <footer className="footer-container">
      <h2 className="footer-title">Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit} className="footer-form">
        <input
          className="footer-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="footer-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <select
          className="footer-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          <option value="Indoors">Indoors</option>
          <option value="Outdoors">Outdoors</option>
          <option value="Team building">Team building</option>
          <option value="Survival">Survival</option>
        </select>
        <button type="submit" className="footer-button">Subscribe</button>
      </form>
    </footer>
  );
};

export default Footer;

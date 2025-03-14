// src/components/BookCard.jsx
import React from 'react';
import "./BookCard.css"; 

const BookCard = ({ title, author, description, cover }) => {
  return (
    <div style={styles.card}>
      <img src={cover} alt={title} style={styles.image} />
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p>{description}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '1rem',
    borderRadius: '8px',
    margin: '1rem',
    width: '250px',
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    marginBottom: '1rem',
  },
};

export default BookCard;
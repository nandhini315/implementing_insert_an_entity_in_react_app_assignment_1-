// src/components/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookCard from "./components/BookCard";
import books from "./booksData";
import "./Home.css"; // Import the CSS for styling

const sampleBooks = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'A novel about the American dream.',
    cover: 'https://covers.openlibrary.org/b/id/7222246-L.jpg',
  },
  {
    title: '1984',
    author: 'George Orwell',
    description: 'A dystopian novel on surveillance and freedom.',
    cover: 'https://covers.openlibrary.org/b/id/153541-L.jpg',
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>📚 Book Library</h1>
      <button onClick={() => navigate('/add-book')} style={styles.button}>
        ➕ Add Book
      </button>
      <div style={styles.bookList}>
        {sampleBooks.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            author={book.author}
            description={book.description}
            cover={book.cover}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  button: {
    padding: '0.75rem 1.5rem',
    margin: '1rem 0',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  bookList: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
};

export default Home;
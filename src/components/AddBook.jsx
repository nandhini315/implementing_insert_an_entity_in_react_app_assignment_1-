// src/components/AddBook.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [form, setForm] = useState({
    title: '',
    author: '',
    description: '',
    cover: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Book submitted (functionality not implemented)');
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <h2>📘 Add a New Book</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={form.title}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
          rows="4"
          style={styles.textarea}
        />
        <input
          type="url"
          name="cover"
          placeholder="Cover Image URL"
          value={form.cover}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Submit</button>
        <button onClick={() => navigate('/')} style={styles.backButton}>← Back to Home</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  form: {
    maxWidth: '400px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.75rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  textarea: {
    padding: '0.75rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    resize: 'vertical',
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  backButton: {
    padding: '0.5rem',
    marginTop: '0.5rem',
    backgroundColor: '#6c757d',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
};

export default AddBook;
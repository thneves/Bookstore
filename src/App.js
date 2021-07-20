import React from 'react';
import BookForm from './components/BooksForm';
import BooksList from './components/BooksLists';

function App() {
  return (
    <div>
      <h1>Magic Books Inc.</h1>
      <BookForm />
      <BooksList />
    </div>
  );
}

export default App;

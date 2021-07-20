import React from 'react';

import BookForm from './containers/BookForm';
import BooksList from './containers/BooksLists';

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

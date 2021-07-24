import React from 'react';

import BookForm from './containers/BookForm';
import BooksList from './containers/BooksLists';

function App() {
  return (
    <div>
      <BooksList />
      <BookForm />
    </div>
  );
}

export default App;

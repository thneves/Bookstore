import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions/actions';

const BookForm = () => {
  const categories = ['Action', 'Biography', 'Mistery', 'Sci-Fi', 'Drama', 'Learning'];

  const dispatch = useDispatch();

  const [book, setBook] = useState({
    id: Math.floor(Math.random() * 1000000),
    title: '',
    author: '',
    category: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setBook({ ...book });
    dispatch(createBook(book));
    setBook({
      ...book,
      id: 0,
      title: '',
      author: '',
      category: '',
    });
    console.log(book);
  };

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'book-title':
        setBook({
          ...book,
          id: Math.floor(Math.random() * 100000),
          title: e.target.value,
        });
        break;
      case 'book-author':
        setBook({
          ...book,
          author: e.target.value,
        });
        break;
      default:
        setBook({
          ...book,
          category: e.target.value,
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="book-title">
          <input type="text" name="title" id="book-title" placeholder="Title" onChange={handleChange} value={book.title} />
        </label>
        <label htmlFor="author">
          <input type="text" name="author" id="book-author" placeholder="Author" onChange={handleChange} value={book.author} />
        </label>
        <select name="categories" id="category" value={book.category} onChange={handleChange}>
          {categories.map((cat) => (<option title="Categories" key={Math.floor(Math.random() * 10000000)}>{cat}</option>))}
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;

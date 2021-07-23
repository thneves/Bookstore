import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions';
import '../styles/BookForm.css';

const BookForm = () => {
  const categories = ['Thriller', 'Biography', 'Mistery', 'Sci-Fi', 'Drama', 'Learning'];

  const dispatch = useDispatch();

  const [book, setBook] = useState({
    id: Math.floor(Math.random() * 1000000),
    title: '',
    author: '',
    category: 'Thriller',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.title === '' || book.author === '') {
      alert('What u doing? Fill the forms! And remember...'); /* eslint-disable-line no-alert */
      return;
    }
    setBook({ ...book });
    dispatch(createBook(book));
    setBook({
      ...book,
      id: 0,
      title: '',
      author: '',
      category: 'Thriller',
    });
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
    <>
      <hr />
      <div id="book-form-div">
        <h1 className="form-h1"> ADD NEW BOOK</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="book-title">
            <input className="form-inputs" type="text" name="title" id="book-title" placeholder="Book title" minLength="2" onChange={handleChange} value={book.title} />
          </label>
          <label htmlFor="author">
            <input className="form-inputs" type="text" name="author" id="book-author" placeholder="Book Author" minLength="6" onChange={handleChange} value={book.author} />
          </label>
          <select name="categories" id="categories" required className="form-inputs select-input" value={book.category} onChange={handleChange}>
            {categories.map((cat) => (
              <option key={Math.floor(Math.random() * 10000000)}>
                {cat}
              </option>
            ))}
          </select>
          <button className="form-button" type="submit">ADD BOOK</button>
        </form>
      </div>
    </>
  );
};

export default BookForm;

import PropTypes from 'prop-types';
import '../styles/Book.css';

function Book({ book, handleClickRemove }) {
  const handleClick = () => {
    handleClickRemove(book);
  };

  return (
    <div id="book-box">
      <div className="book-details">
        <span className="book-cat">{book.category}</span>
        <h2 className="book-title">{book.title}</h2>
        <p className="book-author">{book.author}</p>
      </div>
      <div className="buttons-div">
        <span className="book-buttons comment-btn">Comments</span>
        <button className="book-buttons remove-btn" type="button" onClick={handleClick}>Remove</button>
        <span className="book-buttons edit-btn">Edit</span>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleClickRemove: PropTypes.func.isRequired,
};

export default Book;

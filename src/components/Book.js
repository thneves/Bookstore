import PropTypes from 'prop-types';
import '../styles/Book.css';

function Book({ book, handleClickRemove }) {
  const handleClick = () => {
    handleClickRemove(book);
  };

  return (
    <div id="book-panel">
      <div className="book-box">
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
      <div className="progress-div">
        <div className="percentage-box">
          <div className="progress-circle">
            <span />
          </div>
          <div className="status-box">
            <span className="percentage">90%</span>
            <span className="percentage-status">Completed</span>
          </div>
        </div>
        <div className="chapter-box">
          <h4 className="chapter-box-h4">CURRENT CHAPTER</h4>
          <p className="current-chapter">Chapter 7</p>
          <button className="chapter-btn" type="button">UPDATE PROGRESS</button>
        </div>
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

import PropTypes from 'prop-types';

function Book({ book, handleClickRemove }) {
  function handleClick() {
    handleClickRemove(book);
  }
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.category}</td>
      <td><button type="button" onClick={handleClick}>REMOVE BOOK</button></td>
    </tr>
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

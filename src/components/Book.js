import PropTypes from 'prop-types';

function Book({ book }) {
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.category}</td>
    </tr>
  );
}

Book.propTypes = {
  book: PropTypes.instanceOf(Object),
};

Book.defaultProps = {
  book: {},
};

export default Book;

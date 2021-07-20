import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook, removeBook } from '../actions/actions';
import Book from '../components/Book';

function BooksList({ books }) {
  return (
    <div className="table-div">
      <table>
        <tr>
          <th>Book Id</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
        </tr>
        {
           books.map((book) => <Book key={book} book={book} />)
         }
      </table>
    </div>
  );
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => ({ books: state.books });
const mapDispatchToProps = (dispatch) => ({
  create: (book) => dispatch(createBook(book)),
  delete: (book) => dispatch(removeBook(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);

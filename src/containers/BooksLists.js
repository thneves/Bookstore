import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook, removeBook } from '../actions/actions';
import Book from '../components/Book';

function BooksList({ books }) {
  return (
    <div className="table-div">
      <table>
        <tbody>
          <tr>
            <th>Book Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
          </tr>
          {
             books.map((book) => <Book key={book.id} book={book} />)
           }
        </tbody>
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

export default BooksList;

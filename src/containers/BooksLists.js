import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../actions/actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

function BooksList() {
  const list = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleRemoveBook(e) {
    dispatch(removeBook(e));
  }

  function handleFilterChange(e) {
    console.log(e.target.value);
  }

  const printList = list.books.map((book) => (
    <Book
      key={book.id}
      book={book}
      handleClickRemove={handleRemoveBook}
    />
  ));

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
          { printList }
        </tbody>
      </table>
      <hr />
      <CategoryFilter handleClick={handleFilterChange} />
    </div>
  );
}

export default BooksList;

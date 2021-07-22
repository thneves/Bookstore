import { useSelector, useDispatch } from 'react-redux';
import { removeBook, changeFilter } from '../actions/actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

function BooksList() {
  const bookListState = useSelector((state) => state.books);
  const filterState = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  function handleRemoveBook(e) {
    dispatch(removeBook(e));
  }

  function handleFilterChange(e) {
    dispatch(changeFilter(e.target.value.toString()));
  }

  const printFilteredBookList = bookListState.map((book) => {
    let filtered = [];
    if (book.category === filterState) {
      filtered.push(book);
    }
    filtered = filtered.map((book) => (
      <Book
        key={book.id}
        book={book}
        handleClickRemove={handleRemoveBook}
      />
    ));
    return filtered;
  });

  const printBookList = bookListState.map((book) => (
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
          { filterState === 'All' ? printBookList : printFilteredBookList }
        </tbody>
      </table>
      <hr />
      <CategoryFilter handleFilter={handleFilterChange} />
    </div>
  );
}

export default BooksList;

import { useSelector, useDispatch } from 'react-redux';
import { removeBook, changeFilter } from '../actions';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = () => {
  const bookListState = useSelector((state) => state.books);
  const filterState = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleRemoveBook = (e) => {
    dispatch(removeBook(e));
  };

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value.toString()));
  };

  const PrintBook = bookListState.filter((book) => book.category === filterState || filterState === 'All').map((book) => (
    <Book key={book.id} book={book} handleClickRemove={handleRemoveBook} />
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
          { PrintBook }
        </tbody>
      </table>
      <hr />
      <CategoryFilter handleFilter={handleFilterChange} />
    </div>
  );
};

export default BooksList;

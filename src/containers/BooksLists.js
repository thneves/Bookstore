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
    <>
      <CategoryFilter handleFilter={handleFilterChange} />
      <div className="table-div">
        { PrintBook }
        <hr />
      </div>
    </>
  );
};

export default BooksList;

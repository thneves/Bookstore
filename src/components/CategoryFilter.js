import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilter }) => {
  const categories = ['All', 'Thriller', 'Biography', 'Mistery', 'Sci-Fi', 'Drama', 'Learning'];

  return (
    <>
      <label htmlFor="books-categories">
        Filter by Category:
        <select id="books-categories" name="categories" onChange={handleFilter}>
          { categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
        </select>
      </label>
    </>
  );
};

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;

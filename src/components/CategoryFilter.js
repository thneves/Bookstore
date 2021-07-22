import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilter }) => (
  <>
    <label htmlFor="books-categories">
      Filter by Category:
      <select id="books-categories" name="categories" onChange={handleFilter}>
        <option>All</option>
        <option value="Thriller">Thriller</option>
        <option value="Biography">Biography</option>
        <option value="Mistery">Mistery</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Drama">Drama</option>
        <option value="Learning">Learning</option>
      </select>
    </label>
  </>
);

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;

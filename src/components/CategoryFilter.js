import PropTypes from 'prop-types';
import ProfileIcon from '../images/profile-icon.png';
import '../styles/CategoryFilter.css';

const CategoryFilter = ({ handleFilter }) => {
  const categories = ['All', 'Thriller', 'Biography', 'Mistery', 'Sci-Fi', 'Drama', 'Learning'];

  return (
    <header id="top-panel">
      <nav className="nav">
        <h1 className="bookstore-h1">Bookstore - CMS</h1>
        <h4 className="books-h4">BOOKS</h4>
        <label htmlFor="books-categories" className="books-categories">
          CATEGORIES&nbsp;&nbsp;
          <select id="books-categories" name="categories" onChange={handleFilter}>
            { categories.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </label>
      </nav>
      <figure className="profile-circle">
        <img className="profile-icon" src={ProfileIcon} alt="user icon" />
      </figure>
    </header>
  );
};

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;

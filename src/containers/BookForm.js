export default function BookForm() {
  const categories = ['Action', 'Biography', 'Mistery', 'Sci-Fi', 'Drama', 'Learning'];

  return (
    <div>
      <form>
        <label htmlFor="book-title">
          <input type="text" name="title" id="book-title" placeholder="Title" />
        </label>
        <label htmlFor="author">
          <input type="text" name="author" placeholder="Author" />
        </label>
        <select name="categories" value="categories">
          {categories.map((cat) => (<option title="Categories" key={Math.random}>{cat}</option>))}
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

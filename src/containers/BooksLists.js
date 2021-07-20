import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { connect } from 'react-redux';

export default function BooksList({ book }) {
  return (
    <div className="table-div">
      <table>
        <tr>
          <th>Book Id</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
        </tr>
        <tr>
          <td>{book.id}</td>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.category}</td>
        </tr>
      </table>
    </div>
  );
}

BooksList.propTypes = {
  book: PropTypes.instanceOf(Object),
};

BooksList.defaultProps = {
  book: {
    id: '1',
    title: 'Fly',
    author: 'JK',
    category: 'Mistery',
  },
};

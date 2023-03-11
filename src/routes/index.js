import CreateBook from '../handler/createBook.js';
import GetAllBook from '../handler/getAllBooks.js';
import GetBookByID from '../handler/getBookById.js';
import UpdateBook from '../handler/updateBook.js';
import DeleteBook from '../handler/deleteBook.js';

const router = [
  {
    method: 'POST',
    path: '/books',
    handler: CreateBook,
  },

  {
    method: 'GET',
    path: '/books',
    handler: GetAllBook,
  },

  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: GetBookByID,
  },

  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: UpdateBook,
  },

  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: DeleteBook,
  },
];

export default router;

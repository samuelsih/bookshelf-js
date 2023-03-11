import CreateBook from '../handler/createBook';
import GetAllBook from '../handler/getAllBooks';
import GetBookByID from '../handler/getBookById';
import UpdateBook from '../handler/updateBook';
import DeleteBook from '../handler/deleteBook';

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

import * as store from '../store/books.js';

const DeleteBook = (req, handler) => {
  const { bookId } = req.params;

  const exist = store.getById(bookId);

  if (!exist) {
    const response = handler.response({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan',
    });

    response.code(404);

    return response;
  }

  store.destroy(bookId);

  const response = handler.response({
    status: 'success',
    message: 'Buku berhasil dihapus',
  });

  response.code(200);

  return response;
};

export default DeleteBook;

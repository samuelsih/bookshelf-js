import * as store from '../store/books.js';
import validatePayload from '../validation/validate.js';

const UpdateBook = (req, handler) => {
  const { bookId } = req.params;

  const exist = store.getById(bookId);
  if (!exist) {
    const response = handler.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    });

    response.code(404);

    return response;
  }

  const { name, pageCount, readPage } = req.payload;

  const errorMsg = validatePayload(name, readPage, pageCount);
  if (errorMsg) {
    const response = handler.response({
      status: 'fail',
      message: errorMsg,
    });

    response.code(400);
    return response;
  }

  store.update(bookId, {
    updatedAt: new Date().toISOString(),
    finished: readPage === pageCount,
    ...req.payload,
  });

  const response = handler.response({
    status: 'success',
    message: 'Buku berhasil diperbarui',
  });

  response.code(200);

  return response;
};

export default UpdateBook;

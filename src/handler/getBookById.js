import * as store from '../store/books.js';

const GetBookByID = (req, handler) => {
  const { bookId } = req.params;

  const result = store.getById(bookId);

  if (result) {
    const response = handler.response({
      status: 'success',
      data: {
        book: result,
      },
    });

    response.code(200);

    return response;
  }

  const response = handler.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });

  response.code(404);

  return response;
};

export default GetBookByID;

import { nanoid } from 'nanoid';
import * as store from '../store/books.js';
import validatePayload from '../validation/validate.js';

const CreateBook = (req, handler) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = req.payload;

  const errorMsg = validatePayload(name, readPage, pageCount, 'CREATE');
  if (errorMsg) {
    const response = handler.response({
      status: 'fail',
      message: errorMsg,
    });

    response.code(400);
    return response;
  }

  const id = nanoid();
  store.set({
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished: readPage === pageCount,
    insertedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  const response = handler.response({
    status: 'success',
    message: 'Buku berhasil ditambahkan',
    data: {
      bookId: id,
    },
  });

  response.code(201);

  return response;
};

export default CreateBook;

import * as store from '../store/books.js';

const GetAllBooks = (req, handler) => {
  const { name, reading: queryReading, finished: queryFinished } = req.query;
  const reading = Number(queryReading);
  const finished = Number(queryFinished);

  const listBooks = store.getAll(name, reading, finished);

  const response = handler.response({
    status: 'success',
    data: {
      books: listBooks,
    },
  });

  response.code(200);

  return response;
};

export default GetAllBooks;

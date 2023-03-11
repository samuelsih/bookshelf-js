let books = [];

export const getAll = (name, reading, finished) => {
  let currentBooks = books;

  if (name !== undefined) {
    currentBooks = currentBooks
      .filter((book) => book.name.toLowerCase().includes(name.toLowerCase()));
  }

  if (reading !== undefined && !Number.isNaN(reading)) {
    const currentReading = reading === 1;
    currentBooks = currentBooks.filter(
      (book) => book.reading === currentReading,
    );
  }

  if (finished !== undefined && !Number.isNaN(finished)) {
    const currentFinished = finished === 1;
    currentBooks = currentBooks.filter(
      (book) => book.finished === currentFinished,
    );
  }

  return currentBooks;
};

export const getById = (id) => {
  for (let i = 0; i < books.length; i += 1) {
    if (books[i].id === id) {
      return books[i];
    }
  }

  return null;
};

export const set = (value) => {
  books.push(value);
};

// there should be more elegant solution for this o(￣┰￣*)ゞ
export const update = (
  id,
  {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished,
    updatedAt,
  },
) => {
  books
    .filter((book) => book.id === id)
    .forEach((book) => {
      book.name = name;
      book.year = year;
      book.author = author;
      book.summary = summary;
      book.publisher = publisher;
      book.pageCount = pageCount;
      book.readPage = readPage;
      book.reading = reading;
      book.finished = finished;
      book.updatedAt = updatedAt;
    });
};

export const destroy = (id) => {
  books = books.filter((book) => book.id !== id);
};

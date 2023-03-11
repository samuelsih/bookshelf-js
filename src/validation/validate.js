const validatePayload = (name, readPage, readCount) => {
  if (name === undefined || name === '') {
    return 'Gagal menambahkan buku. Mohon isi nama buku';
  }

  if (readPage > readCount) {
    return 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount';
  }

  return '';
};

export default validatePayload;

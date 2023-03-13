const validatePayload = (name, readPage, readCount, mode) => {
  if (name === undefined || name === '') {
    return mode === 'CREATE'
      ? 'Gagal menambahkan buku. Mohon isi nama buku'
      : 'Gagal memperbarui buku. Mohon isi nama buku';
  }

  if (readPage > readCount) {
    return mode === 'CREATE'
      ? 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
      : 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount';
  }

  return '';
};

export default validatePayload;

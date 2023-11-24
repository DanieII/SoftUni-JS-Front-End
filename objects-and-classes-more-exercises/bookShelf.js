function bookShelf(input) {
  const shelves = [];

  for (const action of input) {
    if (action.includes("->")) {
      const [id, genre] = action.split(" -> ");
      let isValidID = true;

      for (const shelf of shelves) {
        if (shelf.id === id) {
          isValidID = false;
          break;
        }
      }

      if (isValidID) {
        shelves.push({ id, genre, books: [] });
      }
    } else if (action.includes(":")) {
      const [bookTitle, bookInfo] = action.split(": ");
      const [bookAuthor, bookGenre] = bookInfo.split(", ");

      for (const shelf of shelves) {
        if (shelf.genre === bookGenre) {
          shelf.books.push({ bookTitle, bookAuthor });
          break;
        }
      }
    }
  }

  const sortedShelves = shelves.sort((a, b) => b.books.length - a.books.length);

  for (const shelf of sortedShelves) {
    console.log(`${shelf.id} ${shelf.genre}: ${shelf.books.length}`);

    const sortedBooks = shelf.books.sort((a, b) =>
      a.bookTitle.localeCompare(b.bookTitle),
    );

    for (const book of sortedBooks) {
      console.log(`--> ${book.bookTitle}: ${book.bookAuthor}`);
    }
  }
}

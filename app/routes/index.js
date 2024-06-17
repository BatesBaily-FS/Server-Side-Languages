const express = require("express");
const router = express.Router();

const books = [
  { id: 1, title: "The Great Gatsby" },
  { id: 2, title: "1984" },
  { id: 3, title: "The Hobbit " },
];

// localhost:3000/books
router.get("/", (req, res) => {
  res.status(200).json({
    message: "GET to API ",
    books: books,
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

// localhost:3000/api/anything
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const book = books.find((book) => book.id === parseInt(id));

  if (book) {
    res.status(200).json({
      message: "GET by Id for /books",
      id: book.id,
      title: book.title,
      metadata: {
        hostname: req.hostname,
        method: req.method,
      },
    });
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
  console.log(id);
  console.log(book.title);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const bookIndex = books.findIndex((book) => book.id === parseInt(id));

  if (bookIndex !== -1) {
    const updatedBook = { ...books[bookIndex], title };
    books[bookIndex] = updatedBook;
    console.log(`Book with ID ${id} updated. New title: ${title}`);
    res.status(200).json({
      message: "PUT by Id for /books",
      id: id,
      title: title,
      metadata: {
        hostname: req.hostname,
        method: req.method,
      },
    });
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const bookIndex = books.findIndex((book) => book.id === parseInt(id));

  if (bookIndex !== -1) {
    const deletedBook = books.splice(bookIndex, 1)[0];
    console.log(`Deleted book: ${deletedBook.title} (ID: ${deletedBook.id})`);
    res.status(200).json({
      message: "DELETE by Id for /books",
      id: deletedBook.id,
      title: deletedBook.title,
      metadata: {
        hostname: req.hostname,
        method: req.method,
      },
    });
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});

router.post("/", (req, res) => {
  const { data } = req.body;
  res.status(200).json({
    message: "POST to /books",
    data,
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
  console.log(req.body);
});

module.exports = router;

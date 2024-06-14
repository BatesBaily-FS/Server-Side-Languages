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
  res.status(200).json({
    message: "GET by Id for /books",
    id: id,
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
  console.log(id);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: "PUT by Id for /books",
    id: id,
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
  console.log(id);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: "DELETE by Id for /books",
    id: id,
    metadata: {
      id: id,
      hostname: req.hostname,
      method: req.method,
    },
  });
  console.log(id);
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

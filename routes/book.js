const express = require("express");
const bookrouter = express.Router();
const BookController = require("../controllers/BookController")

bookrouter.route('/book')
.get(BookController.index).
post(BookController.store)

bookrouter.route("/book/:id")
.get(BookController.show)
.patch(BookController.update)
.delete(BookController.delete)


module.exports = bookrouter
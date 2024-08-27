import Book from "../model/book.model.js";

// well do get request by importing model
// trying to communicate with db so, it has to be async
export const getBook = async (req, res) => {
  try {
    const book = await Book.find(); //model.find
    // if we get data, send response:
    res.status(200).json(book); //send date in json format
  } catch (error) {
    console.log("error in api created", error);
    res.status(500).json(error);
  }
};

// controller is ready
// now create book route file
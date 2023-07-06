const Library = require("../model/Library");

const getAllLibrarys = async (req, res, next) => {
  let librarys;
  try {
    librarys = await Library.find();
  } catch (err) {
    console.log(err);
  }

  if (!librarys) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ librarys });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let library;
  try {
    library = await Library.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!library) {
    return res.status(404).json({ message: "No Library found" });
  }
  return res.status(200).json({ library });
};

const addLibrary = async (req, res, next) => {
  const { id, title, location, number, nonaval, status } = req.body;
  let library;
  try {
    library = new Library({
      id,
      title,
      location, 
      number, 
      nonaval, 
      status,
    });
    await library.save();
  } catch (err) {
    console.log(err);
  }

  if (!library) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ library });
};

const updateLibrary = async (req, res, next) => {
  const idd = req.params.id;
  const { id, title, location, number, nonaval, status } = req.body;
  let library;
  try {
    library = await Library.findByIdAndUpdate(id, {
        id,
        title,
        location, 
        number, 
        nonaval, 
        status,
    });
    library = await library.save();
  } catch (err) {
    console.log(err);
  }
  if (!library) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ library });
};

const deleteLibrary = async (req, res, next) => {
  const id = req.params.id;
  let library;
  try {
    library = await library.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!library) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
};

exports.getAllLibrarys = getAllLibrarys;
exports.addLibrary = addLibrary;
exports.getById = getById;
exports.updateLibrary = updateLibrary;
exports.deleteLibrary = deleteLibrary;
const express = require("express");
const router = express.Router();
const Library = require("../model/Library");
const librarysController = require("../controllers/librarys-controller");

// router.get("/", async (req, res, next) => {
//     let lib;
//     try {
//         lib = await Library.find();
//     } catch (err){
//         console.log(err);
//     }
    
//     if (!lib){
//         return res.status(404).json({message:"No library fond"})
//     }
//     return res.status(202).json({ lib })
// });



router.get("/", librarysController.getAllLibrarys);
router.post("/", librarysController.addLibrary);
router.get("/:id", librarysController.getById);
router.put("/:id", librarysController.updateLibrary);
router.delete("/:id", librarysController.deleteLibrary); 

module.exports = router;
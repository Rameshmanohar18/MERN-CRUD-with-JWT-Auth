// const express = require("express");
// const router = express.Router();
// const controller = require("../controller/categoryController");

// router.post("/", controller.createCategory);
// router.get("/", controller.getCategories);
// router.delete("/:id", controller.deleteCategory);

// module.exports = router;
// import express from "express";
// import {
//   createCategory,
//   getCategories,
//   deleteCategory
// } from "../controller/categoryController";

   
const express = require("express");       
const controller  = require("../controller/categoryController")
   
const router = express.Router();    

router.post("/", controller.createCategory  ); 
router.get("/", controller.getCategories );
router.delete("/:id", controller.deleteCategory);

module.exports = router;

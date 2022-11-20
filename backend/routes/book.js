var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/Book.js');

// GET ALL BOOKS http://localhost:8080/get
// router.get('/', function(req, res, next) {
//   Book.find(function (err, products) {
//     if (err) return next(err);
//     res.json(products);
//   });
// });


// GET ALL BOOKS http://localhost:8080/book/get
router.get('/get', async(req,res)=>{
  Book.find().exec((err,Book)=>{
     if(err){
         return res.status(400).json({
             error:err
         });
     }return res.status(200).json({
         success:"true",
         Book
     });
  });
 
 });

/* GET SINGLE BOOK BY ID */
router.get('/:id', function(req, res, next) {
  Book.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Add BOOK  */
router.post('/add', function(req, res, next) {
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK  by id*/
router.put('/:id', function(req, res, next) {
  Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK by id */
router.delete('/:id', function(req, res, next) {
  Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
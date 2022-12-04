var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Author = require('../models/Author.js');

// GET ALL Author http://localhost:8080/author/get
router.get('/get', (req,res)=>{
    Author.find().exec((err,Author)=>{
       if(err ){
           return res.status(400).json({
               error:err
           });
       }return res.status(200).json({
           success:"true",
           AuthorArray:Author
       });
    });
   });
  
  /* GET SINGLE Author BY ID */
  router.get('/:id', function(req, res, next) {
    Author.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* Add Author */
  router.post('/add', function(req, res, next) {
    Author.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  //Update author by id
router.put('/:id', function(req, res, next) {
  Author.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
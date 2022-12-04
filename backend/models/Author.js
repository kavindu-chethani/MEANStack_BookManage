const { text } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

  const AuthorSchema=  new mongoose.Schema(
    {
        first_name:{
            type: String,
            required: true,
        },
        last_name:{
            type: String,
            required: true,
        }
       
    }
);
module.exports = mongoose.model('Author', AuthorSchema);

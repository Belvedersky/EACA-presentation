const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
 Не надо добавлять id в схему, Mongoose cам все сделает 
*/

const PresentationSchema = new Schema({
  name: String,
  release_date: String,
  author: String,
  description: String,
});

module.exports = mongoose.model('Presentation', PresentationSchema);
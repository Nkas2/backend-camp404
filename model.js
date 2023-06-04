const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema(
   {
      judul : {type: String, require: true},
      pengarang : {type: String,  require: true}
   },
   {collection: 'koleksiBuku'}
)

module.exports = mongoose.model('BukuModel', BookSchema);
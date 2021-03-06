const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/employee', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});
const conn = mongoose.connection;

const uploadSchema = new Schema({
  imagename: String
});

const uploadModel = mongoose.model('uploadimages', uploadSchema);

module.exports = uploadModel;
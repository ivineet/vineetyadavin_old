const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HomepageSchema = new Schema({
    name: {type: String, required: true, max: 100},
    
});


// Export the model
module.exports = mongoose.model('Homepage', HomepageSchema);



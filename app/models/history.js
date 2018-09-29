var mongoose = require('mongoose');

module.exports = mongoose.model('History', {
    title: {type: String,default: ''}
});
const mongoose = require('mongoose')

const DataSchema  = new mongoose.Schema({
    code: { type: String,  index: true },
    size: { type: String},
    startDate: { type: Date},
    endDate: { type: Date},
    color: { type: String},
    time: { type: String},
    status: { type: String, default: 'active' },
    mainDropdown: { type: String},
    subName : { type: String}
});

const data = mongoose.model('Data', DataSchema);
module.exports = data;
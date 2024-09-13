const mongoose = require('mongoose');

const subDropdownSchema = new mongoose.Schema({
    mainDropdownId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dropdown',
        required: true
    },
    subName: {
        type: String,
        required: true
    },
    colorCode: {
        type: String,
    }
});

module.exports = mongoose.model('SubDropdown', subDropdownSchema);

const validator = require('validator');

// @TODO WIP
module.exports = (email) => {
    if (!validator.isEmail(email)) {
        // @TODO throw Error
    }
};

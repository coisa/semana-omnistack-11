const process = require('process');

const events = require('../src/Event/ErrorEvent');

module.exports = {
    register () {
        Object.keys(events).forEach(event => process.on(event, events[event]));
    },

    unregister () {
        Object.keys(events).forEach(event => process.off(event));
    }
};

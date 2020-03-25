module.exports = {
    uncaughtException (err, origin) {
        console.error('Uncaught Exception:', err, 'origin:', origin);
    },

    unhandledRejection (reason, promise) {
        console.warn('Unhandled Rejection at:', promise, 'reason:', reason);
    }
};

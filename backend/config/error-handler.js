module.exports = {
    uncaughtException(err, origin) {
        console.log('Uncaught Exception:', err, 'origin:', origin);
    },

    unhandledRejection(reason, promise) {
        console.log('Unhandled Rejection at:', promise, 'reason:', reason);
    }
};
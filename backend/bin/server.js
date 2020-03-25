const errorHandler = require('../config/error-handler');
const app = require('../src/App');

errorHandler.register();
app.listen(process.env.PORT || 3333);

const express = require('express');
const PORT = process.env.PORT || 3001;
const router = require('./routes');
const middlewares = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json());
app.use(router);
app.use(middlewares.errorMiddleware);
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

module.exports = app;

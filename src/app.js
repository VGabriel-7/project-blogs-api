const express = require('express');
const loginRoutes = require('./routes/loginRoutes');
const userRoutes = require('./routes/userRouter');

// ...

const app = express();

app.use(express.json());

// ...
app.use('/login', loginRoutes);

app.use('/user', userRoutes);

// É importante exportar a constante `app`
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

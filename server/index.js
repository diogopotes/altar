const express = require('express');

const routes = require('./routes/routes');

const app = express();

routes(app);

app.listen(5000);
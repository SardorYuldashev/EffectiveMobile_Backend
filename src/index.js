const express = require('express');
const cors = require('cors');
const config = require('./shared/config');
const handleError = require("./shared/errors/handle");
const usersRoute = require('./modules/users/_api');
const activityRoute = require('./modules/activity/_api');
const { NotFoundError } = require('./shared/errors');

const app = express();

app.use(express.json());
app.use(cors());

app.use(usersRoute);
app.use(activityRoute);

app.use('*', () => {
  throw new NotFoundError("Недействительный путь");
});

app.use(handleError);

const PORT = config.port || 3000;
app.listen(PORT, () => {
  console.log(`Server ${PORT}-portda run bo'ldi`);
});
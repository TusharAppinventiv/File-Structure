const express = require('express');
const app = express();

const routes = require('./routes/routes');

app.use(express.json());
app.use('/api', routes);

const port = 3087;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
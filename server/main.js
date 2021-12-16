const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
//middler-ware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//routes
const api = require('./routers/routes');
app.use('/api', api);

const port = process.env.PORT || 5000;

app.get('/', (req, resp) => {
  resp.send('Hello world');
});
app.listen(port, () =>
  console.log(`Server berjalan pada port http://localhost:${port}`)
);

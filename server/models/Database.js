const mongoose = require('mongoose');

const path = 'mongodb://127.0.0.1:27017/e-raport';

mongoose.connect(path, { useNewUrlParser: true });

const conn = mongoose.connection;

conn.once('open', () => console.log(`database connected on: ${path}`));
conn.on('error', err => console.log(`connection error: ${err}`));

const express = require('express');
const cors = require('cors');

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// app.use('/api/v1/hostels');

module.exports = app;

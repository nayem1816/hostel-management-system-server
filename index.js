const mongoose = require('mongoose');
require('dotenv').config();
const app = require('./app');

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DATABASE).then(() => {
    console.log('Database is connected successfully.');
});

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Route is working');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

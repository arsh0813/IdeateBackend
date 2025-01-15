const connectDB = require('./config/db');
const express = require('express');
require('dotenv').config();
const cors = require('cors');
// const session = require('express-session');

connectDB().catch(err => {
    console.error('Failed to connect to the database:', err.message);
    process.exit(1);
});

const app = express();

app.use(cors()); // Add specific options if needed
const Port = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/auth', require('./Routes/user'));
app.use('/api/ideas', require('./Routes/Ideas'));

app.listen(Port, () => {
    console.log(`Server is running on port ${Port} in ${process.env.NODE_ENV || 'development'} mode`);
});

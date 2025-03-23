
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// const MONGODB_URL = process.env.MONGODB_URL;
mongoose.connect(process.env.MONGODB_URL, {
}).then(() => {
    console.log("✅ Database is connected");
}).catch(err => {
    console.error("❌ Cannot connect to the database:", err);
});

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`🚀 Server is running on Port: ${PORT}`);
});

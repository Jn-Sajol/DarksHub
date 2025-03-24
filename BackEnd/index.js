
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authrouter = require('./routes/auth/auth-router');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// const MONGODB_URL = process.env.MONGODB_URL;
mongoose.connect(process.env.MONGODB_URL, {
}).then(() => {
    console.log("✅ Database is connected");
}).catch(err => {
    console.error("❌ Cannot connect to the database:", err);
});

app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "DELETE", "PUT"],
      allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "Pragma",
      ],
      credentials: true,
    })
  );

app.use(bodyParser.json());
app.use('/api/auth', authrouter);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on Port: ${PORT}`);
});

const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const contactRouter = require('./Routes/api');
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", contactRouter);

const PORT = process.env.PORT || 5100;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
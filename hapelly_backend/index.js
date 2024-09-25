require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.SERVER_PORT || 501;
app.listen(port, () => console.info(`Server is running in port ${port}`));
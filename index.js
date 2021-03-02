const express = require("express");
const router = require('./routes/api');
const app = express();
const port = 5001;
require('./db');
require("dotenv").config();

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded( {extended: true })); //Parse URL-encoded bodies

app.use('/api', router);

app.listen(port, () => {
  console.log(`🚀 Estamos conectados 🚀 Servidor funcionando ✅ en http://localhost:${port} 👏`);
});


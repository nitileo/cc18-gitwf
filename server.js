const express = require("express");
const app = express();

const port = process.env.PORT || 8000;
app.listen(9000, () => console.log("Server running on Port", 9000));

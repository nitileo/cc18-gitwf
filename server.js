const express = require("express");
const authRoute = require("./routes/auth-routes");
const app = express();

app.use("/auth", authRoute);

const port = process.env.PORT || 8000;
app.listen(9000, () => console.log("Server running on Port", 9000));

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const userRouter = require("./routes/user");

const app = express();
const port = process.env.PORT || 4000;

//middle--
app.use(cors());
app.use(express.json());
app.use("/api", userRouter);

//ruta--
app.get("/", (req = "", res) => {
  res.send("Hola mi nombre es anton ");
});

//mongoDB conection--¿
mongoose
  .set("strictQuery", true)
  .connect(process.env.MongoDB_URL)
  .then(() => console.log("contectao a mongoDB atlas"))
  .catch((error) => console.error(error));

app.listen(port, () => [
  console.log(`Elserver se esta iniciando en http://localhost:${port}`),
]);

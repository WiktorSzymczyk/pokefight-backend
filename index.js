const express = require("express");
const app = express();
const port = process.env.PORT || 5020;
const cors = require("cors");

const pokemonRouter = require("./routes/pokemonRouter");

app.use(cors());
app.use("/pokemon", pokemonRouter);

app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});

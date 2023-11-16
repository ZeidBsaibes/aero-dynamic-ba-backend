const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT;

// const formRoutes = require("./routes/form-routes");
const passengerRoutes = require("./routes/passenger-routes");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("this is the / api endpoint ");
});

app.use("/api/passengers", passengerRoutes);
// app.use("/api/forms", formRoutes);

app.listen(PORT, () => {
  console.log(`aerodynamic  running at http://localhost:${PORT}`);
});

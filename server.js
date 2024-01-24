const express = require('express');
const homeRoutes = require('./routes/home-routes');
const apiRoutes=require("./routes/api-routes")
const PORT = process.env.PORT || 3001;

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(apiRoutes)
app.use(homeRoutes);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
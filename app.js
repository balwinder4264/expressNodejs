const express = require('express');
const app = express();
const bodyParser = require("body-parser")
//middleware all the equest goes through midllware

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop")

app.use(bodyParser.urlencoded({extended: false}))

app.use(adminRoutes);
app.use(shopRoutes)


app.listen(3000);
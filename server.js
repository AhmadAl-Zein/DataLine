const { sequelize } = require("./models");
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const errorHandler = require("./middleware/error");
const xss = require("xss-clean");
const helmet = require("helmet");
const hpp = require("hpp");
const router = require("./router");

dotenv.config({ path: "./config/config.env" });

const app = express();

//Prevent XSS attacks
app.use(xss());
app.use(helmet());

app.use(
  cors({
    origin: "http://127.0.0.1:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(fileUpload());

app.use(hpp());

app.use(router);

app.use(errorHandler);

app.listen(process.env.PORT, async () => {
  console.log(`SERVER RUNNING ON PORT = ${process.env.PORT}`.yellow);
  await sequelize.authenticate();
  console.log(`DataBase Connected`.green);
});

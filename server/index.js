const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./services/passport");
require("./db/mongoose");
const authRouter = require("./routes/authRoutes");

const app = express();

app.use(express.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(authRouter);

const PORT = process.env.PORT || 9001;
app.listen(PORT);

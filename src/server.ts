import { Request, Response } from "express";

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || "8080";
// 

const middleware = require("./middleware/index");

const eventRoutes = require("./routes/events");
const userRoutes = require("./routes/users");
const taskRoutes = require("./routes/tasks");
const eventUserRoutes = require("./routes/event_users");
const stripeRoutes = require("./routes/stripe");

function solveCorsIssue(req: Request, res: Response, next: any) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
}

app.use(solveCorsIssue);
app.use(express.json());
app.use(cors());
app.use(middleware.decodeToken);
app.use("/tasks", taskRoutes);
app.use("/events", eventRoutes);
app.use("/users", userRoutes);
app.use("/eventusers", eventUserRoutes);
app.use("/stripe", stripeRoutes);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

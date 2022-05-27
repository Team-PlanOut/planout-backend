import express from "express";

const eventRoutes = require("./routes/events");
const userRoutes = require("./routes/users");
const taskRoutes = require("./routes/tasks");
const eventUserRoutes = require("./routes/event_users");

const app = express();
const PORT = process.env.PORT || "8080";

app.use(express.json())

app.use("/tasks", taskRoutes);
app.use("/events", eventRoutes);
app.use("/users", userRoutes);
app.use("/eventusers", eventUserRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

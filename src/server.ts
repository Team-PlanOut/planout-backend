const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || "8080";

const middleware = require("./middleware/index");

const eventRoutes = require("./routes/events");
const userRoutes = require("./routes/users");
const taskRoutes = require("./routes/tasks");
const eventUserRoutes = require("./routes/event_users");


app.use(express.json());
app.use(cors());
app.use("/tasks", taskRoutes);
app.use("/events", eventRoutes);
app.use("/users", userRoutes);
app.use("/eventusers", eventUserRoutes);

app.use(middleware.decodeToken);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

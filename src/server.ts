const express = require("express");
const eventRoutes = require("./routes/events");
const userRoutes = require("./routes/users");
const taskRoutes = require("./routes/tasks");
const middleware = require("./middleware");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || "8080";
app.use(cors());

app.use(express.json());

app.use("/tasks", taskRoutes);
app.use("/events", eventRoutes);
app.use("/users", userRoutes);
app.use(middleware.decodeToken);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const express = require("express");
const eventRoutes = require("./routes/events");
const userRoutes = require("./routes/users");
const taskRoutes = require("./routes/tasks");
<<<<<<< HEAD
const middleware = require("./middleware/index");
=======
const middleware = require("./middleware");
>>>>>>> de6ab11c6c293ff91caccb7bd4d4ba071442ac46
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || "8080";
app.use(cors());

app.use(express.json());
app.use(cors());
app.use("/tasks", taskRoutes);
app.use("/events", eventRoutes);
app.use("/users", userRoutes);
app.use(middleware.decodeToken);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || "8080";

import middleware from "./middleware/index";

import userRoutes from "./routes/users";
import taskRoutes from "./routes/tasks";
import eventRoutes from "./routes/events";
import eventUserRoutes from "./routes/event_users";

app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);
app.use("/events", eventRoutes);
app.use("/eventusers", eventUserRoutes);

app.use(middleware.decodeToken);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

import express from "express";
import { rootHandler, helloHandler } from "./handlers";

const app = express();
const PORT = process.env.PORT || "8080";

app.get("/", rootHandler);
app.get("/hello/:name", helloHandler);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

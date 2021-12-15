import express from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from "dotenv";
import role from "./routes/role.js";
import user from "./routes/user.js";
//import proyect from "./routes/proyect.js";
import list from "./routes/list.js";
import task from "./routes/task.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/role", role);
app.use("/api/user", user);
app.use("/api/list", list);
app.use("/api/task", task);
//app.use("/api/proyect", proyect)


app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: " + process.env.PORT)
);

db.dbConnection();

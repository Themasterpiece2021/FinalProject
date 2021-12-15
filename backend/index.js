import express from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from "dotenv";
import proyect from "./routes/proyect.js";
//import role from "./routes/role.js";
//import user from "./routes/user.js";
//import board from "./routes/board.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/proyect",proyect);
// app.use("/api/role", role);
// app.use("/api/user", user);
// app.use("/api/list", list);
// app.use("/api/task", task)
// app.use("/api/user", user)


app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: " + process.env.PORT)
);

db.dbConnection();

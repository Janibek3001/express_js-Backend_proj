import { config } from "dotenv";
import express from "express";
import { connectDB, disconnectDB } from "./config/db.js";

// Import routers
import movieRoutes from "./routes/movieRoutes.js";
import authRoutes from "./routes/authRoutes.js";

config();
await connectDB();

const app = express();
//body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/movies", movieRoutes);
app.use("/auth", authRoutes);

const PORT = 5001;
const server = app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

// database connection error
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

process.on("uncaughtException", async (err) => {
  console.error("Uncaught Exception:", err);
  await disconnectDB();
  process.exit(1);
});

process.on("SIGTERM", async () => {
  console.log("SIGTERM received, shutting down gracefully");
  server.close(async () => {
    await disconnectDB();
    process.exit(0);
  });
});

// GET, POST, PUT, DELETE
// http://localhost:5001/

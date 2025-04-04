// src/app.js
import express from "express";
import cors from "cors";
import reservasRoutes from "./routes/reservas.js";

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/reservas", reservasRoutes);

export default app;

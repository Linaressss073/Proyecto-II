import express from "express";
import { crearReserva, obtenerReservas } from "../controllers/reservasController.js";

const router = express.Router();

// Ruta para crear una reserva
router.post("/", crearReserva);
// Ruta para obtener todas las reservas
router.get("/", obtenerReservas);

export default router;
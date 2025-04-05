import express from 'express';
import { 
    crearReservaController, 
    obtenerReservasController, 
    obtenerReservaPorIdController, 
    actualizarReservaController, 
    eliminarReservaController 
} from '../controllers/reservasController.js';

const router = express.Router();

router.post("/", crearReservaController);
router.get("/", obtenerReservasController);
router.get("/:id", obtenerReservaPorIdController);
router.put("/:id", actualizarReservaController);
router.delete("/:id", eliminarReservaController);

export default router;

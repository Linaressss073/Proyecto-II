import { crearReserva, obtenerReservas, obtenerReservaPorId, actualizarReserva, eliminarReserva } from '../models/reservaModel.js';

export const crearReservaController = async (req, res) => {
    try {
        const db = req.app.locals.db;
        await crearReserva(db, req.body);
        res.status(201).json({ mensaje: "Reserva creada correctamente" });
    } catch (error) {
        console.error("Error al crear la reserva:", error);
        res.status(500).json({ mensaje: "Error al crear la reserva" });
    }
};

export const obtenerReservasController = async (req, res) => {
    try {
        const db = req.app.locals.db;
        const reservas = await obtenerReservas(db);
        res.json(reservas);
    } catch (error) {
        console.error("Error al obtener reservas:", error);
        res.status(500).json({ mensaje: "Error al obtener reservas" });
    }
};

export const obtenerReservaPorIdController = async (req, res) => {
    try {
        const db = req.app.locals.db;
        const reserva = await obtenerReservaPorId(db, req.params.id);
        if (!reserva) return res.status(404).json({ mensaje: "Reserva no encontrada" });
        res.json(reserva);
    } catch (error) {
        console.error("Error al obtener reserva:", error);
        res.status(500).json({ mensaje: "Error al obtener reserva" });
    }
};

export const actualizarReservaController = async (req, res) => {
    try {
        const db = req.app.locals.db;
        await actualizarReserva(db, req.params.id, req.body);
        res.json({ mensaje: "Reserva actualizada correctamente" });
    } catch (error) {
        console.error("Error al actualizar la reserva:", error);
        res.status(500).json({ mensaje: "Error al actualizar la reserva" });
    }
};

export const eliminarReservaController = async (req, res) => {
    try {
        const db = req.app.locals.db;
        await eliminarReserva(db, req.params.id);
        res.json({ mensaje: "Reserva eliminada correctamente" });
    } catch (error) {
        console.error("Error al eliminar la reserva:", error);
        res.status(500).json({ mensaje: "Error al eliminar la reserva" });
    }
};

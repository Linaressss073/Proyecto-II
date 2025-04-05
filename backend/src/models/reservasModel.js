// Importamos la conexión a la base de datos desde app.locals

import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export const crearReserva = async (db, data) => {
    const { nombre, documento, correo, adultos, niños, dias } = data;
    return db.run(
        `INSERT INTO reservas (nombre, documento, correo, adultos, niños, dias) VALUES (?, ?, ?, ?, ?, ?)`,
        [nombre, documento, correo, adultos, niños, dias]
    );
};

export const obtenerReservas = async (db) => {
    return db.all(`SELECT * FROM reservas`);
};

export const obtenerReservaPorId = async (db, id) => {
    return db.get(`SELECT * FROM reservas WHERE id = ?`, [id]);
};

export const actualizarReserva = async (db, id, data) => {
    const { nombre, documento, correo, adultos, niños, dias } = data;
    return db.run(
        `UPDATE reservas SET nombre = ?, documento = ?, correo = ?, adultos = ?, niños = ?, dias = ? WHERE id = ?`,
        [nombre, documento, correo, adultos, niños, dias, id]
    );
};

export const eliminarReserva = async (db, id) => {
    return db.run(`DELETE FROM reservas WHERE id = ?`, [id]);
};

// src/controllers/reservaController.js
export const crearReserva = async (req, res) => {
    try {
      const db = req.app.locals.db;
      const { nombre, documento, correo, adultos, niños, dias } = req.body;
  
      await db.run(`
        INSERT INTO reservas (nombre, documento, correo, adultos, niños, dias)
        VALUES (?, ?, ?, ?, ?, ?)
      `, [nombre, documento, correo, adultos, niños, dias]);
  
      res.status(201).json({ mensaje: "Reserva creada correctamente" });
  
    } catch (error) {
      console.error("❌ Error al crear la reserva:", error);
      res.status(500).json({ mensaje: "Error al crear la reserva" });
    }
  };
  
  export const obtenerReservas = async (req, res) => {
    try {
      const db = req.app.locals.db;
      const reservas = await db.all('SELECT * FROM reservas');
      res.json(reservas);
    } catch (error) {
      console.error("❌ Error al obtener reservas:", error);
      res.status(500).json({ mensaje: "Error al obtener las reservas" });
    }
  };
  
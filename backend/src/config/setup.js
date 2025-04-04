import connectDB from './db.js';

const setup = async () => {
  const db = await connectDB();

  await db.exec(`
    CREATE TABLE IF NOT EXISTS reservas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      documento TEXT NOT NULL,
      correo TEXT NOT NULL,
      adultos INTEGER,
      niños INTEGER,
      dias INTEGER NOT NULL
    );
  `);

  console.log('✅ Tablas listas o ya existentes.'.cyan);
};

export default setup;

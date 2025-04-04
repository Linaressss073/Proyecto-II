// index.js
import app from './src/app.js';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './src/config/db.js';
import setup from './src/config/setup.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  const db = await connectDB();       // 1. Conexión
  await setup();                      // 2. Setup (creación de tablas)
  app.locals.db = db;                 // 3. Inyectar conexión en app

  app.listen(PORT, () => {
    console.log(colors.green(`🚀 Backend corriendo en http://localhost:${PORT}`));
  });
};

startServer();

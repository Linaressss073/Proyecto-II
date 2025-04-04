import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import { fileURLToPath } from 'url';

// Para obtener __dirname en ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const connectDB = async () => {
  try {
    const dbPath = path.join(__dirname, 'database.sqlite'); // ✅ Ruta absoluta
    const db = await open({
      filename: dbPath,
      driver: sqlite3.Database
    });

    console.log('📦 Base de datos conectada con éxito'.cyan);
    return db;
  } catch (error) {
    console.error('❌ Error conectando a la base de datos:'.red, error);
  }
};

export default connectDB;

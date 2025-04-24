import { db } from '@/app/lib/db';
import { z } from 'zod';

//buenas noches 

// ✅ Schema de validación con zod
export const clienteSchema = z.object({
  nombre: z.string().min(1, 'El nombre es requerido'),
  documento: z.string().min(5, 'El documento debe tener al menos 5 caracteres'),
  correo: z.string().email('Correo inválido'),
  telefono: z.string().min(10,'El numero debe tener 10 digitos'),
});

// ✅ Tipo TypeScript derivado del schema   
export type Cliente = {
  id_cliente: number;
  nombre: string;
  documento: string;
  correo: string;
  telefono: string;
};

export type NuevoCliente = z.infer<typeof clienteSchema>;

// ✅ Obtener todos los clientes
export async function getAllClientes(): Promise<Cliente[]> {
  return await db.all('SELECT * FROM Cliente');
}

// ✅ Obtener un cliente por ID
export async function getClienteById(id: number): Promise<Cliente | undefined> {
  return await db.get('SELECT * FROM Cliente WHERE id_cliente = ?', [id]);
}

// ✅ Crear un nuevo cliente
export async function createCliente(data: NuevoCliente): Promise<{ success: boolean }> {
  const { nombre, documento, correo, telefono } = data;

  await db.run(
    `INSERT INTO Cliente (nombre, documento, correo, telefono)
     VALUES (?, ?, ?, ?)`,
    [nombre, documento, correo, telefono]
  );

  return { success: true };
}

// ✅ Actualizar un cliente
export async function updateCliente(id: number, data: Partial<NuevoCliente>): Promise<{ success: boolean }> {
  const clienteExistente = await getClienteById(id);
  if (!clienteExistente) {
    throw new Error('Cliente no encontrado');
  }

  const { nombre, documento, correo, telefono } = { ...clienteExistente, ...data };

  await db.run(
    `UPDATE Cliente
     SET nombre = ?, documento = ?, correo = ?, telefono = ?
     WHERE id_cliente = ?`,
    [nombre, documento, correo, telefono, id]
  );

  return { success: true };
}

// ✅ Eliminar cliente
export async function deleteCliente(id: number): Promise<{ success: boolean }> {
  await db.run('DELETE FROM Cliente WHERE id_cliente = ?', [id]);
  return { success: true };
}

// src/app/api/clientes/route.ts
import { NextResponse } from 'next/server';
import { createCliente } from '@/app/models/clienteModel';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, documento, correo, telefono } = body;

    const result = createCliente ({ nombre, documento, correo, telefono });
    if (await !result.success) {
      return NextResponse.json({error: result.message}, { status: 400 });
    }

    return NextResponse.json({ message: 'Cliente registrado exitosamente' });
  } catch (error) {
    return NextResponse.json({ error: 'Error al registrar cliente' }, { status: 500 });
  }
}

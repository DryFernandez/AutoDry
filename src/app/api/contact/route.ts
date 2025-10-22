import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, message } = body;

    // Validación básica
    if (!name || !company || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Aquí puedes integrar con servicios como:
    // - Nodemailer para enviar emails
    // - Formspree
    // - SendGrid
    // - Mailgun
    // Por ahora, solo logueamos los datos

    console.log('Nuevo mensaje de contacto:', {
      name,
      company,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulación de envío exitoso
    // En producción, aquí iría la lógica real de envío de email
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje recibido correctamente' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al procesar el mensaje:', error);
    return NextResponse.json(
      { error: 'Error al procesar el mensaje' },
      { status: 500 }
    );
  }
}

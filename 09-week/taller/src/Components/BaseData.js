export const BaseData = {
  // Médicos
  medicos: [
    {
      id: '1',
      nombre: 'Luis',
      apellido: 'Gómez',
      documento: '56789012',
      fechaNacimiento: '1980-11-15',
      direccion: 'Calle Médicos 301',
      telefono: '555-234-5678',
      correo: 'luis.gomez@example.com',
      especialidad: 'Cardiología',  // Campo adicional
      numeroLicenciaMedica: 'LM12345'  // Campo adicional
    },
    {
      id: '2',
      nombre: 'María',
      apellido: 'Pérez',
      documento: '67890123',
      fechaNacimiento: '1979-06-10',
      direccion: 'Calle Médica 202',
      telefono: '555-456-7890',
      correo: 'maria.perez@example.com',
      especialidad: 'Pediatría',  // Campo adicional
      numeroLicenciaMedica: 'LM54321'  // Campo adicional
    }
  ],

  // Enfermeros
  enfermeros: [
    {
      id: '1',
      nombre: 'Ana',
      apellido: 'Martínez',
      documento: '67890123',
      fechaNacimiento: '1990-02-10',
      direccion: 'Calle Salud 504',
      telefono: '555-345-6789',
      correo: 'ana.martinez@example.com',
      turnoAsignado: 'Noche',  // Campo adicional
      areaAtencion: 'Urgencias'  // Campo adicional
    },
    {
      id: '2',
      nombre: 'Carlos',
      apellido: 'López',
      documento: '78901234',
      fechaNacimiento: '1985-11-20',
      direccion: 'Calle Sanidad 303',
      telefono: '555-567-8901',
      correo: 'carlos.lopez@example.com',
      turnoAsignado: 'Mañana',  // Campo adicional
      areaAtencion: 'Pediatría'  // Campo adicional
    }
  ],

  // Recepcionistas
  recepcionistas: [
    {
      id: '1',
      nombre: 'Juan',
      apellido: 'Pérez',
      documento: '78901234',
      fechaNacimiento: '1995-01-25',
      direccion: 'Calle Recepción 100',
      telefono: '555-567-8901',
      correo: 'juan.perez@example.com',
      horarioLaboral: '8 AM - 5 PM',  // Campo adicional
      extensionTelefonica: '2020'  // Campo adicional
    },
    {
      id: '2',
      nombre: 'Laura',
      apellido: 'González',
      documento: '89012345',
      fechaNacimiento: '1992-09-10',
      direccion: 'Avenida Salud 444',
      telefono: '555-123-4567',
      correo: 'laura.gonzalez@example.com',
      horarioLaboral: '9 AM - 6 PM',  // Campo adicional
      extensionTelefonica: '3030'  // Campo adicional
    }
  ],

  // Pacientes
  pacientes: [
    {
      id: '1',
      nombre: 'Pedro',
      apellido: 'González',
      documento: '78901234',
      fechaNacimiento: '1992-03-12',
      direccion: 'Calle Central 101',
      telefono: '555-123-4567',
      correo: 'pedro.gonzalez@example.com',
      tipoAfiliacion: 'EPS',  // Campo adicional
      numeroHistoriaClinica: 'HC12345'  // Campo adicional
    },
    {
      id: '2',
      nombre: 'Laura',
      apellido: 'Martínez',
      documento: '89012345',
      fechaNacimiento: '1987-09-25',
      direccion: 'Avenida del Sol 456',
      telefono: '555-987-6543',
      correo: 'laura.martinez@example.com',
      tipoAfiliacion: 'Particular',  // Campo adicional
      numeroHistoriaClinica: 'HC54321'  // Campo adicional
    }
  ]
};

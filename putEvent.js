// Requiere la librería axios para realizar peticiones HTTP
const axios = require("axios");

const eventId = "PyLrWJniaGKzTGl4kz3l"; // ID del evento
// URL de la API, con un ID específico para identificar el evento a actualizar
const url = `https://apirest-nodehost.onrender.com/apiV1/events/${eventId}`;

// Datos que se enviarán en el cuerpo de la solicitud PUT para actualizar el evento
const data = {
  titulo: "Taller de Programación en Python", // Título del evento
  fechaInicio: "2025-04-10T14:00:00Z", // Fecha de inicio del evento en formato ISO 8601
  fechaFin: "2025-04-10T17:00:00Z", // Fecha de fin del evento en formato ISO 8601
  ubicacion: {
    ciudad: "Guadalajara", // Ciudad donde se llevará a cabo el evento
    pais: "Mexico", // País donde se llevará a cabo el evento
  },
  capacidadMaxima: 100, // Capacidad máxima de participantes en el evento
  lugaresDisponibles: 95, // Número de lugares disponibles para los participantes
  participantes: [
    {
      nombre: "Jorge Betancourt", // Nombre del primer participante
      correo: "joisbetancourtes@ittepic.edu.com", // Correo electrónico del primer participante
      asistenciaConfirmada: true, // Si el primer participante ha confirmado su asistencia
    },
    {
      nombre: "Teresa Espericueta", // Nombre del segundo participante
      correo: "tesjeesoca@gmail.com", // Correo electrónico del segundo participante
      asistenciaConfirmada: true, // Si el segundo participante ha confirmado su asistencia
    },
    {
      nombre: "Ana Gómez", // Nombre del tercer participante
      correo: "ana.gomez@hotmail.com", // Correo electrónico del tercer participante
      asistenciaConfirmada: false, // Si el tercer participante ha confirmado su asistencia
    },
    {
      nombre: "Luis Hernández", // Nombre del cuarto participante
      correo: "luis.hernandez@yahoo.com", // Correo electrónico del cuarto participante
      asistenciaConfirmada: true, // Si el cuarto participante ha confirmado su asistencia
    },
  ],
};

// Realizar una petición PUT a la URL especificada, enviando los datos para actualizar el evento
axios
  .put(url, data) // Realiza la solicitud PUT con los datos proporcionados
  .then((response) => {
    // Si la petición es exitosa
    // Mostrar la respuesta exitosa en consola, formateada en JSON
    console.log(JSON.stringify(response.data, null, 2));
  })
  .catch((error) => {
    // Si ocurre un error en la petición
    if (error.response) {
      // Si la respuesta de la API está disponible
      // Mostrar el mensaje de error de la API
      console.error("Error en la API: ", error.response.data);
    } else {
      // Si no hay una respuesta de la API, mostrar el mensaje de error general
      console.error("Error al enviar la solicitud: ", error.message);
    }
  });

// Requiere la librería axios para realizar peticiones HTTP
const axios = require("axios");

// URL de la API donde se enviarán los datos
const url = "https://apirest-nodehost.onrender.com/apiV1/events";

// Datos que se enviarán en el cuerpo de la petición POST
const data = {
  titulo: "Taller de Programación en Python",  // Título del evento
  fechaInicio: "2025-04-10T14:00:00Z",  // Fecha de inicio del evento en formato ISO 8601
  fechaFin: "2025-04-10T17:00:00Z",  // Fecha de fin del evento en formato ISO 8601
  ubicacion: {
    ciudad: "Guadalajara",  // Ciudad donde se llevará a cabo el evento
    pais: "Mexico",  // País donde se llevará a cabo el evento
  },
  capacidadMaxima: 80,  // Capacidad máxima de participantes en el evento
  lugaresDisponibles: 75,  // Número de lugares disponibles para los participantes
  participantes: [
    {
      nombre: "Jorge Betancourt",  // Nombre del primer participante
      correo: "joisbetancourtes@ittepic.edu.com",  // Correo electrónico del primer participante
      asistenciaConfirmada: true,  // Si el primer participante ha confirmado su asistencia
    },
    {
      nombre: "Ana Gómez",  // Nombre del segundo participante
      correo: "ana.gomez@hotmail.com",  // Correo electrónico del segundo participante
      asistenciaConfirmada: false,  // Si el segundo participante ha confirmado su asistencia
    },
    {
      nombre: "Luis Hernández",  // Nombre del tercer participante
      correo: "luis.hernandez@yahoo.com",  // Correo electrónico del tercer participante
      asistenciaConfirmada: true,  // Si el tercer participante ha confirmado su asistencia
    },
  ],
};

// Realizar una petición POST a la URL especificada, enviando los datos en el cuerpo de la solicitud
axios
  .post(url, data)  // Realiza la solicitud POST con los datos proporcionados
  .then((response) => {  // Si la petición es exitosa
    // Mostrar la respuesta exitosa en consola
    console.log("Respuesta exitosa: ", response.data);
  })
  .catch((error) => {  // Si ocurre un error en la petición
    if (error.response) {  // Si la respuesta de la API está disponible
      // Mostrar el mensaje de error de la API
      console.error("Error de la API: ", error.response.data);
    } else {  // Si no hay una respuesta de la API, mostrar el mensaje de error general
      console.error("Error al enviar la solicitud: ", error.message);
    }
  });

// Importa el módulo 'axios' para realizar solicitudes HTTP
const axios = require("axios");

// ID del evento que se va a confirmar
const id = "VUc0wFNORXZOIoSqJe7w";

// Correo electrónico del participante que confirmará su asistencia
const correo = "jismaelbetin@gmail.com";

// Construye la URL dinámica para confirmar la asistencia
// La URL sigue el formato: /apiV1/events/{id}/confirmar/{correo}
const url = `https://apirest-nodehost.onrender.com/apiV1/events/${id}/confirmar/${correo}`;

// Realiza una solicitud PATCH a la URL para confirmar la asistencia
axios
  .patch(url) // Enviar la solicitud PATCH
  .then((response) =>
    // Si la solicitud es exitosa, muestra la respuesta en formato JSON
    console.log(JSON.stringify(response, null, 2))
  )
  .catch((error) => {
    // Si ocurre un error, verifica si hay una respuesta desde la API
    if (error.response) {
      // Si la API responde con un error, imprime el contenido de la respuesta
      console.log(error.response.data);
    } else {
      // Si el error ocurre antes de recibir una respuesta, imprime el mensaje del error
      console.error("Error al enviar la solicitud: ", error.message);
    }
  });

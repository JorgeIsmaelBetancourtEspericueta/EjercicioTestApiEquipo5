const axios = require("axios");

// ID del evento para el que se enviarán los recordatorios
const eventId = "GhtSchu5OMd5gkydQm6y";

// URL de la API con el ID del evento
const url = `https://apirest-nodehost.onrender.com/apiV1/events/${eventId}/recordatorio`;

// Hacer la solicitud POST para enviar recordatorios
axios
  .post(url)
  .then((response) => {
    console.log("Recordatorio enviado:");
    console.log(JSON.stringify(response.data, null, 2));
  })
  .catch((error) => {
    if (error.response) {
      // Si la API responde con un error, imprime el mensaje
      console.error(
        `Error (${error.response.status}):`,
        error.response.data.message
      );
    } else {
      // Si hay un error en la solicitud (por ejemplo, conexión fallida)
      console.error("Error al enviar la solicitud: ", error.message);
    }
  });

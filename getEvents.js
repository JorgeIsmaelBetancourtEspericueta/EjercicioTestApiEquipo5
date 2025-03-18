// Requiere la librería axios para realizar peticiones HTTP
const axios = require("axios");

// Definir la URL de la API a la que se va a hacer la solicitud
const url = "https://apirest-nodehost.onrender.com/apiV1/events";

// Realizar una petición GET a la API utilizando axios
axios
  .get(url) // Realiza la petición GET a la URL especificada
  .then((response) => {
    // Si la petición es exitosa
    // Mostrar la respuesta en consola, formateada en JSON con indentación
    console.log(JSON.stringify(response.data, null, 2));
  })
  .catch((error) => {
    // Si ocurre un error en la petición
    // Mostrar el mensaje de error en consola
    console.error("Error al consumir la API:", error.response.data);
  });

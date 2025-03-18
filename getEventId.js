// Requiere la librería axios para realizar peticiones HTTP
const axios = require("axios");

// URL con un ID válido para realizar la solicitud
const url = "https://apirest-nodehost.onrender.com/apiV1/events/GhtSchu5OMd5gkydQm6y";

// URL con un ID no válido para probar el manejo de errores
const url2 = "https://apirest-nodehost.onrender.com/apiV1/events/GhtSchu";

// Realizar una petición GET con un ID válido
axios
  .get(url)  // Realiza la solicitud GET a la URL con el ID válido
  .then((response) => {  // Si la petición es exitosa
    // Mostrar los datos recibidos en consola
    console.log("Datos recibidos: ", response.data);
  })
  .catch((error) => {  // Si ocurre un error en la petición
    // Mostrar el mensaje de error en consola (error de tipo mensaje)
    console.error("Error al consumir la API: ", error.message);
  });

// Realizar una petición GET con un ID no válido
axios
  .get(url2)  // Realiza la solicitud GET a la URL con el ID no válido
  .then((response) => {  // Si la petición es exitosa
    // Mostrar los datos recibidos en consola
    console.log("Datos recibidos: ", response.data);
  })
  .catch((error) => {  // Si ocurre un error en la petición
    // Mostrar el mensaje de error en consola (error con la respuesta de la API)
    console.error("Error al consumir la API: ", error.response.data);
  });

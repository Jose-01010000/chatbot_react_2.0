import axios from "axios";

export const obtenerRespuestaDeAPI = async (message) => {
  try {
    const data = { message };
    const response = await axios.post("http://localhost:3001/chatbot", data);
    const respuestaDeFulfillment = response.data.message.fulfillmentText;
    const responseData = {
      text:
        respuestaDeFulfillment !== ""
          ? respuestaDeFulfillment
          : "Lo siento, no lo entendí. ¿Podrías repetirlo, por favor?",
      isBot: true,
    };
    return responseData;
  } catch (error) {
    console.log("Error: ", error);
    throw new Error("Error al obtener la respuesta de la API.");
  }
};

// export const obtenerRespuestaDeAPI2 = (message) => {
//   const data = { message };
//   axios
//     .post("http://localhost:3001/chatbot", data)
//     .then( (resp) => {
//       let respuestaDeFulfillment =  resp.data.message.fulfillmentText;
//       console.log(resp);
//       const responseData = {
//         text:
//           respuestaDeFulfillment !== ""
//             ? respuestaDeFulfillment
//             : "Lo siento, no lo entendí. ¿Podrías repetirlo, por favor?",
//         isBot: true,
//       };
//       return responseData;
//     })
//     .catch((error) => {
//       console.log("Error: ", error);
//       throw new Error("Error al obtener la respuesta de la API.");
//     });
// };

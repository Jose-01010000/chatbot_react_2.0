import axios from "axios";

// export const handleMessageSubmit = (message) => {
//   const data = {
//     message,
//   };

//   let responses = [];

//   axios
//     .post("http://localhost:3001/chatbot", data)
//     .then((response) => {
//       const responseData = {
//         text:
//           response.data["message"]["fulfillmentText"] !== ""
//             ? response.data["message"]["fulfillmentText"]
//             : "Sorry, I can't get it. Can you please repeat once?",
//         isBot: true,
//       };

//       responses.push(responseData.text);
//     })
//     .catch((error) => {
//       console.log("Error: ", error);
//     });

//   console.log(responses);
//   return responses;
// };

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

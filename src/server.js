import axios from "axios";

export const obtenerRespuestaDeAPI = async (message) => {
  try {
    const data = { message };
    const response = await axios.post("http://localhost:3001/chatbot", data);
    const respuestaDeFulfillment = response.data.message;
    const responseData = {
      text:
        respuestaDeFulfillment.fulfillmentText !== ""
          ? respuestaDeFulfillment.fulfillmentText
          : "Lo siento, no lo entendí. ¿Podrías repetirlo, por favor?",
      intents: respuestaDeFulfillment.action,
      queryText: respuestaDeFulfillment?.queryText ?? "No responde",
      sentimentAnalysisResult:
        respuestaDeFulfillment?.sentimentAnalysisResult ?? 0,
    };
    return responseData;
  } catch (error) {
    console.log("Error: ", error);
    throw new Error("Error al obtener la respuesta de la API.");
  }
};

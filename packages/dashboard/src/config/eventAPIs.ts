import { isDev } from "../env";

export const BASE_URI =  isDev() ? 'http://localhost:8000/api' : 'https://api.ensemblecrafts.com/api';
// You might use enum type for the key of sse event
// Imagine you have event like this, newOrderReceivedEvent, paymentReceivedEvent, callReceivedEvent

export const SSEEventAPIs = {
  listen: `${BASE_URI}/notification/listener`,
};

import axios from "axios";
import rateLimit from "axios-rate-limit";

export const api = rateLimit(axios.create(), {
  maxRequests: 5,
  perMilliseconds: 1000,
  maxRPS: 5,
});

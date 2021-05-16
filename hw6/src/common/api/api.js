import axios from "axios";
import { URLDB } from "./variabels";

export const api = axios.create({
    baseURL: URLDB,
    headers: { "Content-Type": "application/json" },
})
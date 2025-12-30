import axios from 'axios';

// --- DEBUG: Esto imprimirá la dirección en la consola del navegador ---
console.log(">>>> URL DETECTADA POR VITE:", import.meta.env.VITE_API_URL);
// -------------------------------------------------------------------

const apiUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';

const api = axios.create({
    baseURL: apiUrl,
});

export default api;
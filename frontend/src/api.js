import axios from 'axios';

// Si existe la variable de entorno (Vercel), usa esa. Si no, usa localhost (Tu PC).
const apiUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';

const api = axios.create({
    baseURL: apiUrl,
});

export default api;
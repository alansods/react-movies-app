// http://sujeitoprogramador.com/r-api/?api=filmes/

// https://pokeapi.co/api/v2/pokemon/ditto


import axios from 'axios';

const api = axios.create({
  baseURL: 'http://sujeitoprogramador.com'
});

export default api;
import express from 'express';
import * as pokemonController from '../controllers/pokemon.js';

const pokemonsRouter = express.Router();

pokemonsRouter.route("/").get(pokemonController.getAllPokemons);

export default pokemonsRouter;
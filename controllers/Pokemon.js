import Pokemon from '../models/Pokemon.js';

export const getAllPokemons = async (req, res, next) => {
  try {
    const pokemons = await Pokemon.find();
    console.log(pokemons)
    if (!pokemons.length) {
      //   throw new Error();
      //   throw { message: 'book not found' };
      throw { statusCode: 404, message: 'pokemon not found' };
    }
    res.json(pokemons);
  } catch (error) {
    next(error);
  }
};

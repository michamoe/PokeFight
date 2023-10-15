import Pokemon from "../models/Pokemon.js";

export const getAllPokemons = async (req, res, next) => {
  try {
    const pokemons = await Pokemon.find();
    console.log("Pokemons:", pokemons);

    if (!pokemons.length) {
      //   throw new Error();
      //   throw { message: 'book not found' };
      throw { statusCode: 404, message: "pokemon not found" };
    }
    res.json(pokemons);
  } catch (error) {
    next(error);
  }
};


export const getPokemonById = async (req, res, next) => {
  try {
    const { id } = req.params; 
    const pokemon = await Pokemon.findOne({ id }); 

    if (!pokemon) {
     
      return res.status(404).json({ message: "Pokémon not found" });
    }

    res.json(pokemon); 
  } catch (error) {
    next(error);
  }
};

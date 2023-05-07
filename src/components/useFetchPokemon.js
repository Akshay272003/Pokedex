import {useState, useEffect} from 'react';
import Pokedex from 'pokedex-promise-v2';

let prevFetched = {}
const useFetchPokemon = (name) => {
    const p = new Pokedex()
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const [pokeError, setPokeError] = useState(null);
    name = name.trim();

    useEffect(()=>{
        if(prevFetched && prevFetched[name]){
            setPokemonDetails(prevFetched[name]);
        }
        else{
            // pokemon detail fetching here 
            p.getPokemonByName(name)
            .then(res => {
                setPokemonDetails(res);
                prevFetched[name] = res;
                setPokeError(null);
                
            })
            .catch(error => {
                setPokeError(error.message);
            })
        }

    
    }, [name]);

    return {pokemonDetails, pokeError};

}
 
export default useFetchPokemon;
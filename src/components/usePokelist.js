import { useState, useEffect } from 'react';
import Pokedex from 'pokedex-promise-v2';

const usePokelist = (option) => {
    const p = new Pokedex();
    
    // allpokemons is the array of results 
    const [allPokemons, setallPokemons] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(()=>{
        p.getPokemonsList()
        .then(res => {
            setallPokemons(res.results);
            setError(null);
        }).catch(error => {
            setError(error.message);
        })
    }, [option])
    
    return {allPokemons, error};
}
 
export default usePokelist;
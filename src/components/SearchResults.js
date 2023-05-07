import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetchPokemon from "./useFetchPokemon";

const SearchResults = ({ name }) => {

    const { pokemonDetails, pokeError } = useFetchPokemon(name);
    const [types, setTypes] = useState(null);
    const [pokemonImgSrc, setpokemonImgSrc] = useState('');
    const [pokeName, setPokeName] = useState(name);

    useEffect(() => {
        if (pokemonDetails) {
            setTypes(pokemonDetails.types);
            setpokemonImgSrc(pokemonDetails.sprites.other["official-artwork"].front_default);
            setPokeName(pokemonDetails.name);
        }

    }, [pokemonDetails])


    return (
        <>
            {pokemonDetails &&
                <div className="w-fit my-8">
                    {/* pokemon img  */}
                    <Link to={`details/${pokeName}`}>
                        <div className="img-container">
                            <img className=" md:h-56 md:w-64" src={pokemonImgSrc} alt="" />
                        </div>
                    </Link>
                    {/* pokemon name */}
                    <div className="my-2">
                        <span className="text-2xl font-semibold text-slate-700 capitalize">{pokeName}</span>
                    </div>
                    {/* pokemon type/s  */}
                    <div className="flex flex-wrap my-2">
                        {types && types.map((val, idx) => {
                            return (
                                <div key={idx} className="mr-2 mt-2 bg-blue-100 rounded-xl px-2">
                                    {val.type.name}
                                </div>
                            )
                        })}
                    </div>
                    <Link to={`details/${pokeName}`} className ="my-1 text-sm text-sky-700 hover:text-sky-500 cursor-pointer">
                        more info...
                    </Link>
                </div>
            }
        </>
    );
}

export default SearchResults;
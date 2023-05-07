import useFetchPokemon from "./useFetchPokemon";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import StatsBarGraph from "./StatsBarGraph";

const PokemonDetails = () => {
    const { name } = useParams();
    const { pokemonDetails, pokeError } = useFetchPokemon(name.trim());
    // if there is error then navigate user to 404 page

    const [pokeName, setPokeName] = useState(name);
    const [types, setTypes] = useState(null); //array
    const [pokemonImgSrc, setpokemonImgSrc] = useState('');
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [abilities, setAbilities] = useState(null); //its an array
    const [stats, setStats] = useState(null);   //array


    useEffect(() => {
        if (pokemonDetails) {
            setTypes(pokemonDetails.types);
            setpokemonImgSrc(pokemonDetails.sprites.other["official-artwork"].front_default);
            setPokeName(pokemonDetails.name);
            setAbilities(pokemonDetails.abilities);
            setHeight(pokemonDetails.height);
            setWeight(pokemonDetails.weight);
            setStats(pokemonDetails.stats);

        }

    }, [pokemonDetails])

    return (
        <>
            {pokeError && <div className="mt-10 mb-4 w-4/5 mx-auto text-red text-center">{pokeError}</div>}
            {pokemonDetails &&
                <div className="mt-10 mb-4 max-w-4xl w-11/12 mx-auto">

                    <div className="w-full my-4 flex justify-center align-middle">
                        <div className="text-4xl md:text-6xl break-words font-semibold text-slate-700 capitalize">{pokeName}</div>
                    </div>

                    <div className="flex flex-wrap mt-10">

                        <div className="w-full md:w-1/2 flex justify-center md:justify-end rounded-xl">
                            <img className="img-container detail-hover md:pr-2" src={pokemonImgSrc} alt="Loading..." />
                        </div>

                        <div className="w-full md:w-[48%] md:ml-3 flex flex-col rounded-xl mt-10 md:my-0">

                            {/* types  */}
                            <div className="bg-cyan-400 rounded-xl detail-hover">
                                <div className="mx-3 my-3">
                                    <h3 className="text-4xl flex font-semibold text-slate-700">Type</h3>
                                </div>
                                <div className="flex flex-wrap my-3 mx-3">
                                    {types && types.map((val, idx) => {
                                        return (
                                            <div key={idx} className="mr-2 mt-2 bg-cyan-100 capitalize text-lg rounded-xl px-5 py-1">
                                                {val.type.name}
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>

                            {/* abilities  */}
                            <div className="bg-emerald-400 rounded-xl my-3 detail-hover">
                                <div className="mx-3 my-3">
                                    <h3 className="text-4xl flex font-semibold text-slate-700">Abilities</h3>
                                </div>
                                <div className="flex flex-wrap m-3">
                                    {abilities && abilities.map((val, idx) => {
                                        return (
                                            <div key={idx} className="mr-2 mt-2 bg-emerald-100 capitalize text-lg rounded-xl px-5 py-1">
                                                {val.ability.name}
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>

                            {/* {height & weight } */}
                            <div className=" my-3 flex">
                                <div className="rounded-xl w-5/12 bg-emerald-100 mr-3 detail-hover">
                                    <h3 className="text-3xl flex font-semibold text-slate-700 m-3">Height</h3>
                                    <h4 className="text-2xl font-semibold text-slate-700 m-3">{height}</h4>

                                </div>
                                <div className="rounded-xl w-5/12 bg-lime-400 detail-hover">
                                    <h3 className="text-3xl flex font-semibold text-slate-700 m-3">Weight</h3>
                                    <h4 className="text-2xl font-semibold text-slate-700 m-3">{weight}</h4>

                                </div>

                            </div>


                        </div>
                    </div>
                    
                    {/* bar chart here  */}
                    <div className="flex flex-wrap">
                        <div className="chart-container mt-4 flex justify-center md:justify-end w-full md:w-1/2">
                            <StatsBarGraph raw_data={stats} />
                        </div>
                        <div className="w-0 md:w-1/2">
                                    {/* weakness here  */}
                        </div>
                    </div>
                    

                </div>
            }
        </>
    );
}

export default PokemonDetails;
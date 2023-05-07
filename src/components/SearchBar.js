import { useState, useEffect } from "react";
import SearchResults from "./SearchResults";

const SearchBar = ({ list }) => {
    const [inSearch, setInSearch] = useState('');
    const [listBySearch, setListBySearch] = useState(null);
    const [pokemonName, setPokemonName] = useState('');

    useEffect(() => {
        if(inSearch != ''){
            const newList = list.filter(vals => {
                return vals.name.includes(inSearch.toLowerCase());
            })
            if(newList){
                setListBySearch(newList.slice(0, 4));
            }
        }
        if(inSearch == ''){
            setListBySearch(null);
        }
    }, [inSearch]);


    const handleSuggestClick = (e) => {
        document.querySelector("#search").value = e.target.innerHTML;
        setInSearch(e.target.innerHTML);
    }
    const handleSearch = (e) => {
        document.querySelector("#search").value = '';
        setInSearch('');
        setPokemonName(inSearch);
    }

    return (
        <>
                <div className="flex flex-row align-middle py-3 mx-auto">
                <div className="flex flex-col m-2">
                    <label className="text-xl md:text-3xl font-semibold text-slate-700 ml-2">Pokémon Name</label>
                    <div className="flex mt-2">
                        <input
                            id="search"
                            className="search-input"
                            onChange={(e) => setInSearch(e.target.value)}
                            type="text"
                        />
                        <button
                            className="search-btn"
                            onClick={handleSearch}
                        >Search
                        </button>

                    </div>
                    <div className="suggestion-list">
                        {listBySearch && listBySearch.map((vals, idx) => {
                            return (
                                <div 
                                    key={idx} 
                                    className="text-lg cursor-pointer bg-slate-100 hover:bg-[#E3350D] hover:text-white rounded p-2 duration-150"
                                    onClick={handleSuggestClick} 
                                >{vals.name}</div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="flex align-middle w-11/12 mx-auto">
                <SearchResults name={pokemonName} />
            </div>

        </>
    );
}

export default SearchBar;
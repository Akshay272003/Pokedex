import { useState, useEffect } from "react";
import SearchResults from "./SearchResults";

const PokemonShowcaseList = ({list}) => {
    const limit = 12;
    const [offset, setOffset] = useState(0);
    const [showCaseList, setShowCaseList] = useState(null);

    useEffect(()=>{
        if(list){
            setShowCaseList(list.slice(0, offset+limit));
        }
    }, [list, offset])

    return ( 
        <div>
        <div className="flex flex-wrap w-11/12 mx-auto gap-3">
            {showCaseList && showCaseList.map((val, idx) => {
                return (
                    <SearchResults name={val.name} key={idx} />
                    )
                })}
        </div>
        <div className="block bg-red-500 text-white hover:bg-red-100" onClick={()=>{setOffset(offset+limit)}}>
            <button>Load more...</button>
        </div>
        </div>
    );
}
 
export default PokemonShowcaseList;
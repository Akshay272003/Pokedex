import usePokelist from './usePokelist';
import SearchBar from './SearchBar';
import PokemonShowcaseList from './PokemonShowcaseList';

const Home = () => {
    const {allPokemons, error} = usePokelist('all');   


    return (
        <>
            {/* search bar */}
            {error && <div>{error}</div>}
            {allPokemons && <SearchBar list={allPokemons} />}

            <div className='w-full flex flex-col justify-center align-denter'>
                {allPokemons && <PokemonShowcaseList list={allPokemons} />}
            </div>
        </>
    );
}
 
export default Home;
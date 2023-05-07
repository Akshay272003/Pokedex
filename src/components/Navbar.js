import { Link } from "react-router-dom";
const Navbar = () => {

    return (
        <nav className="flex w-full align-middle bg-[#E3350D] py-2">
            {/* add link for home page tp this heading */}
            <Link to="/">
                <legend className="text-2xl md:text-4xl text-white p-2">Pokédex</legend>
            </Link>
            
        </nav>
    );
}
 
export default Navbar;
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";


function SearchBar({value,onChange})
{


    return(
        <div className="flex text-black h-12 bg-white items-center rounded-3xl overflow-hidden w-2/6">
         
         <input placeholder="Search.." onChange={onChange} value={value} className="focus:outline-none mx-2 h-12 w-full"/>
         <IconContext.Provider value={{ color: "#4169e1", className: "mx-4" }}>
                <FaSearch />
         </IconContext.Provider>
        </div>
    )
}

export default SearchBar;
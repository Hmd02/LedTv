import SearchBar from "./SearchBar";

function NavBar({value,onChange})
{
  return(
    <div className="h-[8%] fixed bg-dark-second/80 backdrop-blur-lg flex top-0 w-[100%] md:h-[12%] text-white justify-center items-center  ">
       <span className="absolute left-[2%] text-xl  font-bold text-rose-600"> LedTv.com </span>
           <SearchBar value={value} onChange={onChange}/>
    </div>
  )
}


export default NavBar;
import { useState } from "react"
import { FaArrowUp , FaArrowDown} from "react-icons/fa";
function Filter({sortPrice,setPriceOrder})
{
    const [showModal,setShowModal]=useState(false)
   

    const handleClick=()=>
    {
       setShowModal(prev=>!prev)
    }

    const handleFilter=(e)=>
    {
       setPriceOrder(e.target.name)
    }

return(
    <div className="mt-32 mx-[45%] hover:cursor-pointer">

    <div className="flex flex-col w-32 rounded-xl p-2 bg-gray-600  text-white" onClick={handleClick}>
     <div>  Sort By {sortPrice==="Increasing"? <span>Price <FaArrowUp className="inline"/></span>:<span>Price <FaArrowDown className="inline"/></span>}</div>
    {showModal==true?
    <div className="flex flex-col items-center">
     <div name="Increasing" onClick={handleFilter}>Price <FaArrowUp className="inline"/></div>
     <div name="Decreasing" onClick={handleFilter}>Price <FaArrowDown className="inline"/></div>
    </div>
    :<></>
    }
    </div>   
    </div>
)
}

export default Filter;
import { HiOutlineEmojiSad } from "react-icons/hi";
import { IconContext} from "react-icons";

function NotFound()
{
  return(
    <div className="text-white text-xl font-medium">
    <IconContext.Provider value={{ color: "#4169e1", className: "text-5xl inline mx-2" }}>
      <HiOutlineEmojiSad />
         </IconContext.Provider>
      No Matching Results
    </div>
  )
}

export default NotFound;
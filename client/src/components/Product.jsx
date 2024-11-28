import { TbBrandAppgallery } from "react-icons/tb";
import { IconContext} from "react-icons";
import { PiRankingFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";


function Product({product})
{
  var formatter = new Intl.NumberFormat("en-IN");
 return(
    <div className="flex flex-col items-stretch max-w-[30%] text-white m-2 px-2 items-center">
        {/* <div className="flex justify-center bg-gray-100"> */}
        <img src={product.Img} className="h-[90%]"/>
        {/* </div> */}
      <div>{product.Name}</div> 
      <div className="flex mt-2 items-center justify-center">
      <div className="text-sm md:text-lg lg:text-2xl font-bold lg:mr-4 md:mr-2 mr-[4px]">&#8377;{formatter.format(product.DiscPrice)}</div>
      <div className="text-sm md:text-sm lg:text-lg font-normal lg:mr-4 md:mr-2 mr-[4px]"><s>&#8377;{formatter.format(product.Mrp)}</s></div>  
      <div className="border-[0px] px-[2px] rounded-lg text-red-600 md:text-md font-bold">-{product.Discount}</div>
      </div>
      <div className="flex  items-center mt-2 justify-center">
      <div className="mr-2">
      <IconContext.Provider value={{ color: "#4169e1", className: "mx-1 inline mb-[2px]" }}>
      <TbBrandAppgallery />
         </IconContext.Provider>
        {product.Brand}</div>  
      <div className="mr-2"><IconContext.Provider value={{ color: "#4169e1", className: "mx-1 inline mb-[2px]" }}><PiRankingFill /></IconContext.Provider>{ product.Ranking }</div>

      <div className="mr-2">
      <IconContext.Provider value={{ color: "#4169e1", className: "mx-1 mb-[3px] inline" }}>
      <FaStar />
         </IconContext.Provider>
    { product.Rating }
        </div>
      </div>
    </div>
 )
}

export default Product;
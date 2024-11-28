import NotFound from "./NotFound";
import Product from "./Product";



function SearchResults({value,products,sortPrice})
{
    console.log(products[0])
    const re= new RegExp(`${value}`,"i")
    const sortedArray= sortPrice==="Increasing"?products.sort((a,b)=>a.Mrp-b.Mrp):products.sort((a,b)=>b.Mrp-a.Mrp)
    const filteredItems= sortedArray.filter(checkKeyword);
    const items=filteredItems.map((product)=><Product product={product}/>)
   
    function checkKeyword(product)
    {
      return re.test(product.Name) || re.test(product.Brand) || re.test(product.Mrp.toString()) || re.test(product.DiscPrice.toString()) || re.test(product.Rating.toString())
    }

 return(
    <div className="flex items-center flex-wrap justify-center m-[8%] mt-[2%]">
      {items.length===0?
      <NotFound/>:items}
    </div>
 ) 
}

export default SearchResults;

const MyModel=require("./model")
const express=require("express")
const mongoose=require("mongoose")
const dotenv = require('dotenv');
const cors=require("cors")

dotenv.config();

const app=express();
const mongoURI=process.env.CONNSTRING

app.use(cors())

mongoose.connect(mongoURI).then(()=>
{
  console.log("Connected to mongoose")
})
.catch((e)=>
{
  if(e.name=="MongoNetworkError")
    console.log("Network Error")
  else
   console.log(e)
})

const db=mongoose.connection;


const getData=async()=>
{
  
   const data=await MyModel.find({})

    return data
 
}

app.get("/",(req,res)=>
{

  fetch("https://api.croma.com/searchservices/v1/search?currentPage=0&query=led%20tv%3Arelevance&fields=FULL&channel=WEB&channelCode=400049&spellOpt=DEFAULT")
  .then((response)=>response.json())
.then((data)=>
{
  
  let products=[]
  data.products.forEach(product => {
    products.push({
      Name:product.name , 
      Brand : product.manufacturer , 
      Mrp : product.mrp.value , 
      DiscPrice: product.price.value,
      Discount : product.discountValue,
      Ranking : product.rankingScore,
      Rating : Number(product.averageRating.toFixed(2)),
      Img : product.plpImage
    }
    )
  })

  // MyModel.insertMany(products,{
  //   ordered:true
  // })
    
  res.send(products)
  })
  
})


app.get("/products",(req,res)=>
{

  getData()
  .then((products)=>
  {
    res.send(products)
  })

})




app.listen(8000,()=>
{
  console.log("Server Running")
})
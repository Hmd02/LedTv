import './App.css';
import { useEffect, useState } from 'react';
import SearchResults from './components/SearchResults';
import NavBar from './components/NavBar';
import Filter from './components/Filter';




function App() {
    const [value,setValue]=useState('')
    const [products,setProducts]=useState([])
    const [sortPrice,setPriceOrder]=useState("Increasing")

    const onChange=(e)=>
    {
      setValue(e.target.value)
      
    }

  useEffect(()=>
    {
      fetch("http://127.0.0.1:8000/products")
      .then((res)=>res.json())
      .then((data)=>
      {
       
        setProducts(data)

      })
    },[setProducts])

  return (
   <div className=''>
    <Filter sortPrice={sortPrice} setPriceOrder={setPriceOrder} />
   <NavBar value={value} onChange={onChange}/>
  
   {products.length==0?<div className='text-white'>Getting Data</div>:<SearchResults  sortPrice={sortPrice} value={value} products={products}/>}
   </div>
  );
}

export default App;

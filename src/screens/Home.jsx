import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Loader from '../layouts/Loader';
import ProductCard from '../layouts/ProductCard'

const Home = () => {

  const [products, setproducts] = useState([]);

  const [loader, setloader] = useState(false);


  useEffect(()=>{
    fetchProducts()
  },[])

  const fetchProducts = async() =>{

    try {
      setloader(true)
      const api = "https://fakestoreapi.com/products"

    //  "data" is the reserved keyword so we destructure it by closing in {} and directly use it but if close it into another variable then we have to write it as xyz.data 

    const {data} = await axios.get(api); 
    setproducts(data) 
    setloader(false) 

      products.map()

    } catch (error) {

      setloader(false)
      console.log(error.message)
      
    }

  }

  return (
    <div>

      { loader ? <Loader/> :

      products.map( product => 
      
        <ProductCard prod = {product} />
      )

      

      }
    
    </div>
  )
}

export default Home

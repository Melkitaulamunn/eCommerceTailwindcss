import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { productsAction } from "../redux/actions/products";
import ProductCard from "../components/ProductCard";



const Home = () => {
  const dispatch = useDispatch();
  const {products}=useSelector(state=>state.products);
  useEffect(()=>{
    dispatch(productsAction())
   
  },[dispatch])
  return (
    <div className="flex flex-wrap justify-center">
     {
      products && products.map((prd,i)=>(
        <ProductCard key={i} prd={prd}/>
      ))
     }
    </div>
  );
};

export default Home;

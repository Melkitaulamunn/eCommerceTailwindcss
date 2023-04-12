import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsAction } from "../redux/actions/products";
import ProductCard from "../components/ProductCard";
import { searchAction } from "../redux/actions/search";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { search } = useSelector((state) => state.search);
  useEffect(() => {
    dispatch(productsAction());
    dispatch(searchAction());
  }, [dispatch]);
  return (
    <div className="flex flex-wrap justify-center">
      {search.length > 0
        ? search.map((prd, i) => <ProductCard key={i} prd={prd} />)
        : products &&
          products.map((prd, i) => <ProductCard key={i} prd={prd} />)}
    </div>
  );
};

export default Home;

import { useState, useEffect } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
    setIsLoading(false)
    console.log(response.data);
  }, []);

  return {products, isLoading};
};

export default useGetProducts;
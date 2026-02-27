import { useEffect, useState } from "react";
import axios from "axios"


function useFetch(url) {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchApi = async () => {
      try {
       // const res = await fetch(url);
       let res=await axios.get(url)

       setProducts(res.data)

      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApi();

  }, [url]);

  return { products, error, isLoading ,setProducts};   
}

export default useFetch;
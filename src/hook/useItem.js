import { useEffect, useState } from "react";

const useItem = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://stark-earth-37268.herokuapp.com/product`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};

export default useItem;

import axios from 'axios'


export const fetchProducts = async () => {
  const res = await axios
        .get("https://obscure-refuge-62167.herokuapp.com/products");
    return res;
};


export const getData = async ({ queryKey }) => {
  console.log(queryKey)
  const  data  = await axios.get(
    `https://obscure-refuge-62167.herokuapp.com/products/${queryKey[1]}`
  );
  return data;
};
import axios from 'axios'


export const fetchProducts = async () => {
  const res = await axios
        .get("https://stark-woodland-82096.herokuapp.com/api/products");
    return res;
};


export const getData = async ({ queryKey }) => {
  // console.log(queryKey)
  const  data  = await axios.get(
    `https://stark-woodland-82096.herokuapp.com/api/products/${queryKey[1]}`
  );
  return data;
};
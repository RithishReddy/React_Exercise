import axios from "axios"


export const getReview = async ({queryKey}) => {
    const  review  = await axios.get(
      `https://stark-woodland-82096.herokuapp.com/api/products/${queryKey[1]}/reviews`
    );
    return review;
  };
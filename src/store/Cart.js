import { atom } from "recoil";
import { useRecoilState } from "recoil";


export const cartAtom=atom({
    key:'cart',
    default:[]
})


export const useCart=()=>{
    const [cart, setCart] = useRecoilState(cartAtom);
    return [cart,setCart]
}
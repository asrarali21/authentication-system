import { atom, selector } from "recoil";
import axios from "axios";


export const productstate  = atom({
    key:"productState",
    default:selector({
        key:"productStateDefault",
        get:async()=>{
               try {
        const res = await axios.get('http://localhost:8000/api/v1/products/productlist')
        return res.data?.data ?? []
      } catch (e) {
        console.error('productState fetch failed:', e)
        return []
      }
        }
    })
})
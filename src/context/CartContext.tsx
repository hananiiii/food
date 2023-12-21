import React, { ReactNode, useState, createContext, useContext } from "react";

interface ICartContext{
    product:any | [];
    addToCart:(cart:any)=>void;
}
const CartContext =createContext<ICartContext>({
    product:[],
    addToCart:()=>{},
});
interface IcartContextProvider{
    children:ReactNode;
}

export const CartContextProvider =({children})=>{
    const [product,setProduct]=useState<any>([])
    const addToCart =(cart:any)=>{
        setProduct((prevState:any)=>[...prevState,cart])
    };
    return(
        <CartContext.Provider value={{product,addToCart}}>
            {children}
        </CartContext.Provider>
    );
    
};
export const useCartContext =()=>{
    const context=useContext(CartContext);
    return context;
};
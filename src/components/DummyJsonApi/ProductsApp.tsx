import { Cart } from "./Cart"
import getProducts from "./lib/getProducts";
import { CartItem } from "./models/CartItem";
import { Product } from "./models/Products";
import { ShowProducts } from "./ShowProducts";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const ProductsApp = () => {
    const [cart, setCart] = useState<CartItem[]>(JSON.parse(localStorage.getItem('cart') || '[]'));
    const { data } = useQuery(
        {
            queryKey: ['products'],
            queryFn: getProducts,

        }
    );
    const addToCart = (product:Product) => {
        const foundinCart = cart.find((p)=> p.product.id === product.id);

        if(foundinCart){
            setCart(cart.map((p)=>{
                if(p.product.id === product.id){
                    return({...p, amount: p.amount +1})
                }
                return p;
            }))
        }else{
            setCart([...cart, new CartItem(product, 1)])
        }
        
    }
    const totalCart = {
        get total(){
            return Math.round(cart.reduce((acc, item) => acc + item.product.price * item.amount, 0) * 100) / 100;
        }
    }
    const removeItem = (product: Product) =>{
        const foundinCart = cart.find((p)=> p.product.id === product.id);
        if(foundinCart){
            if(foundinCart.amount === 1){
                setCart(cart.filter((p)=> p.product.id !== product.id))
            }else{
                setCart(cart.map((p)=>{
                    if(p.product.id === product.id){
                        return({...p, amount: p.amount -1})
                    }
                    return p;
                }))
            }
        }

    }
    localStorage.setItem('cart', JSON.stringify(cart));
    return (
        <div>
            <ShowProducts products={data || []} addToCart={addToCart}  />
            <Cart cart={cart} totalPrice={() => totalCart.total} delete={removeItem} />
        </div>
    )
}
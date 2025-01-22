import { CartItem } from "./models/CartItem"
import { Product } from "./models/Products";

type CartProps = {
  cart: CartItem[];
  totalPrice: () => number;
  delete: (product: Product) => void;
}
export const Cart = (props: CartProps) => {
  return (
    <section className="lg:w-full md:w-1/2 p-4 w-full mb-10 flex flex-col gap-4 flex-wrap border-2 border-gray-200 rounded-xl">
      <h2 className="text-2xl text-center">Cart</h2>
      <ul className="grid grid-cols-5  gap-6 overflow-x-auto h-96 scrollbar-smooth ">
        {props.cart.map((cartItem) => (
          <li key={cartItem.product.id} className="w-full flex flex-col justify-between ">
            <img className="" src={cartItem.product.images} alt={cartItem.product.title} />
           <p className="text-xs"> {cartItem.product.title} x {cartItem.amount}</p>
            <p className="text-right">{cartItem.product.price}</p>
            <button onClick={() => props.delete(cartItem.product)} className="bg-primary text-white">Delete</button>
          </li>
        ))}
      </ul>
      <div className="flex flex-col border-2 border-gray-200 rounded-xl p-4">
        <h2>cart Total</h2>
        <p>{props.totalPrice()}</p>

      </div>
    </section>

  )
}
import { Product } from "./models/Products";

type ShowProductProps = {
    product: Product;
    addToCart: (product: Product) => void;

};

export const ShowProduct = (props: ShowProductProps) => {
    return (
        <div className="lg:w-1/2 md:w-1/2 p-4 w-full flex flex-col gap-4">
            <img className="w-full" src={props.product.images} alt={props.product.title} />
            <h1 className="text-xl">{props.product.title}</h1>
            <p className="text-md">{props.product.description}</p>
            <p className="text-xl text-right">{props.product.price} kr</p>
            <button className='bg-primary p-1 rounded-xl text-white w-full'  onClick={() => props.addToCart(props.product)}>Add to cart</button>
            
        </div>
    )
}
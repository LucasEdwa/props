
import { ShowProduct } from './ShowProduct';
import { Product } from './models/Products';

type ShowProductsProps = {
    products: Product[];
    addToCart: (product: Product) => void;
}
export const ShowProducts = (props: ShowProductsProps) => {

    return (
        <section className='border-2 border-gray-200 rounded-xl p-4 mb-10'>
            <h2 className='p-10 text-center text-2xl border '>Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-y-auto h-96 scrollbar-smooth">
            {props.products.map((product) => (
               <ShowProduct key={product.id} product={product} addToCart={props.addToCart} />
            ))}
        </div>
        </section>
    )
}

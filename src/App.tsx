import getProducts from './components/DummyJsonApi/lib/getProducts'
import { ProductsApp } from './components/DummyJsonApi/ProductsApp'
import {TodoApp} from './components/TodoApp/TodoApp'
function App() {
getProducts()
  return (
    <>
    <ProductsApp />
    </>
  )
}

export default App

import { DummyJsonResponse } from "../models/DummyJsonResponse";
import { api } from "./axios";

const getProducts = async () => {
    try {
        const {data} :{data: DummyJsonResponse} = await api.get('/products');
        console.log(data.products);
        return data.products;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default getProducts;
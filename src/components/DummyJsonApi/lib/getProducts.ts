import { IDummyJsonResponse } from "../../../models/IDummyJsonResponse";
import { api } from "./axios";

const getProducts = async () => {
    try {
        const response = await api.get<IDummyJsonResponse>('/products');
        console.log(response.data.products)
        return response.data.products;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default getProducts;
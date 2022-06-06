import { getProduct } from "../api/product";
const ProductDetail = {
    render: async (id) =>{ 
        const response = await getProduct(id);
        // const data = response.data;
        const {data} = response;
        return(
            `<div>
                <div>id: ${data.id}</div>
                <div>name: ${data.name}</div>
                <div>Price: ${data.price}</div>
                <div>description: ${data.description}</div>
                <div>Status: ${data.status}</div>
            </div>`
        );
    }
};
export default  ProductDetail;
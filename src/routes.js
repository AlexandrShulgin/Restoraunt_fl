import Basket from "./pages/basket/Basket";
import Products from "./pages/products/Products";

export const routes = [
    {
        path: '/basket',
        Component: <Basket/>
    },

    {
        path: '/products',
        Component: <Products/>
    },
]
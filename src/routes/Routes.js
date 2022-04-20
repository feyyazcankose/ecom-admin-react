import Cargo from "../components/cargo/Cargo";
import Home from "../components/Home";
import Orders from "../components/order/Orders";
import Products from "../components/product/Products";
import Settings from "../components/Settings";
import Users from "../components/user/Users";

const routes = [
    {path:'/' ,component: Home},
    {path:'/orders' ,component: Orders},
    {path:'/users' ,component: Users},
    {path:'/settings' ,component: Settings},
    {path:'/products' ,component: Products},
    {path:'/cargo' ,component: Cargo},
]

export default routes;
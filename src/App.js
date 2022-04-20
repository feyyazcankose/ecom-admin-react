import { Route, Routes ,useLocation} from 'react-router-dom';
import Home from './components/Home'
import Users from './components/user/Users';
import Products from './components/product/Products';
import Cargo from './components/cargo/Cargo';
import Orders from './components/order/Orders';


import './index.css';
import  axios  from 'axios';
import { Helmet } from 'react-helmet';
import MasterPage from './layouts/MasterPage';



axios.defaults.baseURL="http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type']="application/json";
axios.defaults.headers.post['Accept']="application/json";
axios.defaults.withCredentials = true;


axios.interceptors.request.use(function(config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';

  return config;
});


function App() {

  return (
    <>
    <Routes> 
          <Route   path="*" element={ <MasterPage/>}>
          </Route>
    </Routes>
    <Helmet>
      <script src="assets/js/app.js"></script>
    </Helmet>
  </>
  );
}

export default App;

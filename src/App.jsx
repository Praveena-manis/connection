import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Register from './components/Register';
import Header from './components/header';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Products from './components/products';


function App() {
    return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="register" element={<Register/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="dashboard/*" element={<Dashboard/>}/>
    <Route path="products" element={<Products/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App

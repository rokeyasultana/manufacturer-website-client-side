import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import RequireAuth from './Pages/Login/RequireAuth';
import MyOrders from './Pages/Dashboard/MyOrders';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
 <Navbar></Navbar>
<Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='/blogs' element={<Blogs></Blogs>}></Route>
<Route path='/login' element={<Login></Login>}></Route>
<Route path='/signup' element={<SignUp></SignUp>}></Route>

<Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
<Route index  element={<MyOrders></MyOrders>}></Route>

</Route>
<Route path='*' element={<PageNotFound></PageNotFound>}></Route>

</Routes>
<Footer></Footer>
    </div>
  );
}

export default App;

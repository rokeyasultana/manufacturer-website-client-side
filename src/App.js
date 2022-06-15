import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div className="App">
 
<Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='/blogs' element={<Blogs></Blogs>}></Route>
<Route path='/login' element={<Login></Login>}></Route>
<Route path='/signup' element={<SignUp></SignUp>}></Route>
</Routes>
<Footer></Footer>
    </div>
  );
}

export default App;

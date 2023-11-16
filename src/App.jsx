import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar'
function App() {
  
// const carstate = useSelector((state) => state.number);
  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
    </>
  )
}

export default App
// https://www.youtube.com/watch?v=fxT54eRIsc4
// https://www.youtube.com/watch?v=HNlMsiFEUuE
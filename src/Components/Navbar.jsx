import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Navbar = () => {
    const items = useSelector((state)=>state.cart);
    return (
        <div className=" bg-yellow-400 ">
            <div className="flex justify-between mx-5 p-5">
            <h2>Redux Tuitorial</h2>
            <div className=" flex gap-5 justify-center align-middle font-bold">
                <Link to='/'>Home</Link>
                <Link to='/cart'>Cart</Link>
                <Link to='/login'>Login</Link>
                <span>Item : {items.length}</span>
            </div>
            </div>
        </div>
    );
};

export default Navbar;
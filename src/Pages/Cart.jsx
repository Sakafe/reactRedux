import { useDispatch, useSelector } from "react-redux";
import './Pages.css'
import { remove } from "../Redux/CartSlice";

const Cart = () => {
    const cartItems = useSelector((state)=>state.cart);
    const dispatch = useDispatch(); 

    const handleRemove = (data1) =>{
        dispatch(remove(data1))
    }
    return (
        <div>
        <h3 className=" text-center">Cart Page</h3>
            <div className="cartWrapper">
            {
               cartItems.map((data,id) =>(
                
                <div key={id} className="cartCard">
                    
                   <img className=" w-36" src={data.image} alt="" />
                   <h4>{data.title}</h4>
                   <h5>{data.price}</h5>
                   <button className="btn btn-warning" onClick={() =>handleRemove(data.id)}> Remove</button>
                </div>
               )) 
            }
            </div>
        </div>
    );
};

export default Cart;
import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
     const [bottles, setBottles] = useState([]);
     const [cart, setCart] = useState([]);

     useEffect(() =>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data));
        console.log(bottles);
     },[]);

    //  Load cart from local storage
    useEffect(()=>{
        if(bottles.length > 0 ){
            const storedCart = getStoredCart();
            // console.log(storedCart, bottles);

            const savedCart = [];
            for(const id of storedCart){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    savedCart.push(bottle);
                }
            }
            console.log('Saved cart',savedCart);
            setCart(savedCart);
        }
    }, [bottles])

     const handleAddToCart = bottle =>{
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }

    return (
        <div>
            <hr />
            <hr />
            <h2>Your are Bottles here</h2>
            <hr />
            <h3>Memorable Bottles:{bottles.length} </h3>
            <Cart cart = {cart}></Cart>
            <div className="bottle-container">
            {
                bottles.map(bottle => <Bottle
                     key={bottle.id} 
                     bottle={bottle}
                     handleAddToCart={handleAddToCart}  
                     ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;
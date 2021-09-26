import React, {useEffect,useState} from 'react'
import Cart from '../Cart/Cart';
import Poets from '../Poets/Poets';
// import {Card, CardGroup } from 'react-bootstrap';
import './Club.css'
function Club() {

    // declare state
    const [poets, setPoets] = useState([]);
    const [cart, setCart] = useState([]);

//    for data loading we use useEffect
    useEffect( ()=> {
        fetch('./poets.JSON')
        .then(res=> res.json())
        .then(data=> setPoets(data))
    },[]);

    // Handle cart we add item in a array
    const handleAddToCart = (poet) => {
        const newCart = [...cart, poet];
        setCart(newCart);
    }

    return (
        <div>
            <div className="container poet-card">
                <div className="row">
                    <div className="col-lg-9 card">
                        {/* poets data map and pass to Poets component */}
                        {poets.map((poet) => (
                        <Poets
                        key={poet.key}
                        poet={poet}
                        handleAddToCart={handleAddToCart}
                        ></Poets>
                        ))}
                    </div>
                    <div className="col-lg-3">
                        {/* Cart component */}
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Club

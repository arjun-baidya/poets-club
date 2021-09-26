import React from 'react'
import './Poets.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
function Poets(props) {
    // distructuring 
    const { name,publishedbook,country,totalsell,img,stock, price} = props.poet

    return (
        <div className="poet">
            <div>
                <img src={img} alt="" />
                <h4 className="poet-name">{name}</h4>
                <h6>{country}</h6>
                <p>
                <small>Published Book: {publishedbook}</small>
                </p>
                <p>Book in Stock: {stock}</p>
                <p>Price: {price}</p>
                <p>Total Sell: {totalsell}</p>
                <br />
                {/* add to cart button */}
                <button
                onClick={() => props.handleAddToCart(props.poet)}
                className="btn-regular"
                >
                <i class="fas fa-shopping-cart"></i> add to cart
                </button>
                {/* social icon added */}
                <div className="container social-icon">
                    <div className="fb">
                        <i class="fab fa-facebook-square"></i>
                    </div>
                    <div className="twitter">
                        <i class="fab fa-twitter-square"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Poets

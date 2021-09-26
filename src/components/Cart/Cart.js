import React from 'react'
import './Cart.css'

function Cart(props) {
    // distructure
    const { cart } = props;

    let totalCost = 0;
    // by the loop we get price
    for (const book of cart) {
      
        totalCost = totalCost + book.price 
    }

    return (
        <div>
            {/* total item added */}
            <h5 className="mt-4"><i class="fas fa-book"></i>Book added: {cart.length}</h5>
            <br/>
            {/* total cost for book */}
            <h6>Total Cost: $ {totalCost}  </h6>
            <br />
            {/* added cart item's image and name */}
            <div>
                {
                    cart.map( (poet)=>(
                        <div className="cart-cart">
                            <div className="cart-left">
                                <img src={poet.img} alt="" />
                            </div>
                            <div className="cart-right">
                                <p>{poet.name}</p>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
            <button className="btn btn-primary buy-btn">Buy Now</button>
        </div>
    )
}

export default Cart

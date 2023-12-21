import { useState } from 'react';
import Card from '../card/card.jsx';
import { useOrdersDispatch, useOrdersValues } from '../context/context.js';

import "./main.scss";
import Footer from './footer.jsx';

const Main = () => {
      const { orders } = useOrdersValues();
      const { dispatch }  = useOrdersDispatch();
      const [hideTotal, setHideTotal] = useState(true);

if (!orders) {
    return <div>Loading...</div>;
}
// total sum all orders
const calculateTotalSum = (priceOrders) => {
      const total = priceOrders.reduce((total, next) => {
            const orderTotal = next.amount * next.price;

            return orderTotal + total
      },0);
      return total;
}
const totalSum = calculateTotalSum(orders);

// delete order
const removeOrders = (id) => {
     dispatch({type: "REMOVE_ORDER", id})
}
// counter +
const arrowUp = (id) => {
     dispatch({type: "INCREMENT", id});
}
// counter -
const arrowDown = (id) => {
     dispatch({type: "DECREMENT", id});

}
// clear cart all
const clearCart = () => {
      setHideTotal(false)
      dispatch({type:"CLEAR_CART"})
}
// render cards
const render_orders = (arr) => {
        const list = arr.map((item) => {
          return <Card key={item.id} 
                       {...item} 
                       removeOrder={removeOrders}
                       counterUp={arrowUp}
                       counterDown={arrowDown}/>     
            
        })
    return list
}
const list_orders = render_orders(orders)

    return (
      <section className='cart'>
      <header>
             <h2>YOUR BAG</h2>
      </header>
          {list_orders}
          {hideTotal ? (
              <Footer totalSum={totalSum} clearCart={clearCart}/>
          ) : <h4 class="empty-cart">is currently empty</h4>}   
      </section>
    );
}
export default Main;
export function ordersReducer(orders, action){
    switch (action.type) {
        case "ORDERS":
            return action.payload;
        case "REMOVE_ORDER":
            return orders.filter((order) => order.id !== action.id);
        case "INCREMENT": 
            return orders.map((order) => order.id === action.id
            ? { ...order, amount: order.amount + 1 }
            : order);
        case "DECREMENT": 
            return orders.map((order) => order.id === action.id
            ? { ...order, amount: order.amount > 1 ? order.amount - 1 : 1 }
            : order);
        case "CLEAR_CART":
            return orders.splice(0, orders.length);
        default: return orders
    }
}
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { FetchedOrders } from "../../api/fetch"; 
import { ordersReducer } from '../reducer';

// Створюємо контекст
const OrdersContext = createContext();
const OrdersDispatchContext = createContext();


export function StateProvider({children}) {
    const [orders, dispatch] = useReducer(ordersReducer, []);
    
useEffect(() => {
    const fetching_orders = async () => {
        const data = await FetchedOrders();
        dispatch({ type: 'ORDERS',  payload: data});
      };
      fetching_orders();
},[])

    return (
        <OrdersContext.Provider value={ {orders} }>
            <OrdersDispatchContext.Provider value={ {dispatch} }>
                {children}
            </OrdersDispatchContext.Provider>
        </OrdersContext.Provider>
    );
};
export function useOrdersValues() {
    return useContext(OrdersContext);
}
export function useOrdersDispatch() {
    return useContext(OrdersDispatchContext);
};

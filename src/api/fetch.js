export async function FetchedOrders()  {
    try{
        const url = `https://www.course-api.com/react-useReducer-cart-project`;

        const response = await fetch(url);
    
        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
    
        return data;

    }catch(error){
        console.error(`Error get www.course-api.com ${error.message}`);
        return null;
    };
};

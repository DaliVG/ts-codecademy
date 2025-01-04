import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

// Add your getMaxPrice() function below:
function getMaxPrice(price: PriceBracket): number {
    switch (price) {
        case PriceBracket.Low:
            return 10.0;
        case PriceBracket.Medium:
            return 20.0;
        case PriceBracket.High:
            return 30.0;
    }
}
// Add your getOrders() function below:
function getOrders(price: PriceBracket, orders: Order[][]): Order[][] {
    let filteredOrders: Order[][] = [];
    orders.forEach(services => {
        const restaurantOrdersFiltered = services.filter(service => service.price <= getMaxPrice(price))
        filteredOrders.push(restaurantOrdersFiltered);
    })
    return filteredOrders;
}
// Add your printOrders() function below:

// Main

// Functions to test if everything was ok during the tutorial steps.
// const eligibleOrders = getOrders(PriceBracket.Low, orders);
// console.log(eligibleOrders);

function printOrders(restaurants: Restaurant[], filteredOrders: Order[][]) {
    filteredOrders.forEach((order, i) => {
        if (order.length > 0) {
            console.log(`${restaurants[i].name}`)
            order.forEach(element => {
                console.log(`- ${element.name}: ${element.price}`)
            });
        }
    })
};

const eligibleOrders = getOrders(PriceBracket.Low, orders);
printOrders(restaurants, eligibleOrders);



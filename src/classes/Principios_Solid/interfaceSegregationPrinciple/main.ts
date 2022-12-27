import { ShoppingCart } from './cart';
import { Menssage } from './menssage';
import { Order } from './order';
import { SaveOrder } from './saveOrder';
import { Produto } from './produto';
import { FiftyPercentDiscount } from './discount';

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const mensage = new Menssage();
const saveOrder = new SaveOrder();
const order = new Order(shoppingCart, mensage, saveOrder);
shoppingCart.addItem(new Produto('Camiseta', 49.91));
shoppingCart.addItem(new Produto('caneta', 1.0));
shoppingCart.addItem(new Produto('Chapeu Nike', 22.01));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalComDisconto());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);

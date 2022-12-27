import { ShoppingCart } from './cart';
import { Menssage } from './menssage';
import { Order } from './order';
import { SaveOrder } from './saveOrder';
import { Produto } from './produto';

const shoppingCart = new ShoppingCart();
const mensage = new Menssage();
const saveOrder = new SaveOrder();
const order = new Order(shoppingCart, mensage, saveOrder);
shoppingCart.addItem(new Produto('Camiseta', 49.91));
shoppingCart.addItem(new Produto('caneta', 1.0));
shoppingCart.addItem(new Produto('Chapeu Nike', 22.01));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);

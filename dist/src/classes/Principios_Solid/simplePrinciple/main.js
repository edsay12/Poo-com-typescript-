"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cart_1 = require("./cart");
const menssage_1 = require("./menssage");
const order_1 = require("./order");
const saveOrder_1 = require("./saveOrder");
const produto_1 = require("./produto");
const shoppingCart = new cart_1.ShoppingCart();
const mensage = new menssage_1.Menssage();
const saveOrder = new saveOrder_1.SaveOrder();
const order = new order_1.Order(shoppingCart, mensage, saveOrder);
shoppingCart.addItem(new produto_1.Produto('Camiseta', 49.91));
shoppingCart.addItem(new produto_1.Produto('caneta', 1.0));
shoppingCart.addItem(new produto_1.Produto('Chapeu Nike', 22.01));
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
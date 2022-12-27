"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartLegacy = void 0;
class ShoppingCartLegacy {
    constructor() {
        this._items = [];
        this._orderStatus = 'open';
    }
    addItem(item) {
        this._items.push(item);
    }
    removeItem(index) {
        this._items.splice(index, 1);
    }
    get items() {
        return this._items;
    }
    get orderStatus() {
        return this._orderStatus;
    }
    total() {
        return +this._items
            .reduce((total, next) => total + next.price, 0)
            .toFixed(2);
    }
    checkout() {
        if (this.isEmpty()) {
            console.log('Seu carrinho está vazio');
            return;
        }
        this._orderStatus = 'closed';
        this.sendMessage(`Seu pedido com total de ${this.total()} foi recebido.`);
        this.saveOrder();
        this.clear();
    }
    isEmpty() {
        return this._items.length === 0;
    }
    sendMessage(msg) {
        console.log('Mensagem enviada:', msg);
    }
    saveOrder() {
        console.log('Pedido salvo com sucesso...');
    }
    clear() {
        console.log('Carrinho de compras foi limpo...');
        this._items.length = 0;
    }
}
exports.ShoppingCartLegacy = ShoppingCartLegacy;
const shoppingCart = new ShoppingCartLegacy();
shoppingCart.addItem({ name: 'Camiseta', price: 49.91 });
shoppingCart.addItem({ name: 'Caderno', price: 9.9123 });
shoppingCart.addItem({ name: 'Lápis', price: 1.59 });
console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.orderStatus);
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);

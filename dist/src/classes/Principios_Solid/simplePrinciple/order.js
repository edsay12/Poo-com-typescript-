"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(carrinho, menssage, saveOrder) {
        this.carrinho = carrinho;
        this.menssage = menssage;
        this.saveOrder = saveOrder;
        this._orderStatus = 'open';
    }
    get orderStatus() {
        return this._orderStatus;
    }
    checkout() {
        if (this.carrinho.isEmpty()) {
            console.log('Seu carrinho está vazio');
            return;
        }
        // this._orderStatus = 'closed';
        this.menssage.sendMessage(`Seu pedido com total de ${this.carrinho.total()} foi recebido.`); // suspeito
        this.saveOrder.save();
        this.carrinho.clear();
    }
}
exports.Order = Order;

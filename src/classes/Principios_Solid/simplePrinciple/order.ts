import { ShoppingCart } from './cart';
import { Menssage } from './menssage';
import { SaveOrder } from './saveOrder';
import { OrderStatus } from './intefaces/OrderStatus';

export class Order {
  private _orderStatus: OrderStatus = 'open';
  constructor(
    private readonly carrinho: ShoppingCart,
    private readonly menssage: Menssage,
    private readonly saveOrder: SaveOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.carrinho.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }
    // this._orderStatus = 'closed';
    this.menssage.sendMessage(
      `Seu pedido com total de ${this.carrinho.total()} foi recebido.`,
    ); // suspeito
    this.saveOrder.save();
    this.carrinho.clear();
  }
}

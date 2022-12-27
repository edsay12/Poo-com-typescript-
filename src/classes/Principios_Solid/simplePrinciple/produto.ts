import { CartItem } from './intefaces/CartItem';

export class Produto implements CartItem {
  constructor(public name: string, public price: number) {}
}

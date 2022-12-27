/* eslint-disable @typescript-eslint/no-empty-function */
export abstract class ProductCompontent {
  abstract getPrice(): number;
  add(product: ProductCompontent): void {}
  remove(product: ProductCompontent): void {}
}

//Leaf
export class ProductLeaf extends ProductCompontent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

// Cria leafs e delega funçoes a ela
export class ProductComposite extends ProductCompontent {
  private children: ProductCompontent[] = [];

  add(product: ProductCompontent): void {
    this.children.push(product);
  }
  remove(product: ProductCompontent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex != -1) this.children.splice(productIndex, 1);
  }

  getPrice(): number {
    return this.children.reduce((soma, child) => child.getPrice() + soma, 0);
  }
}

//Codigo cliente

const camiseta = new ProductLeaf('Camiseta', 40);
const sapato = new ProductLeaf('Sapato', 100);
const calça = new ProductLeaf('Calça', 80);

const productsCart = new ProductComposite();
productsCart.add(camiseta);
productsCart.add(sapato);
productsCart.add(calça);

const carroDeBrinquedo = new ProductLeaf('Camiseta', 40);
const playStation = new ProductLeaf('Sapato', 100);

const newProductCart = new ProductComposite();
newProductCart.add(carroDeBrinquedo);
newProductCart.add(playStation);

productsCart.add(newProductCart);

console.log(productsCart);

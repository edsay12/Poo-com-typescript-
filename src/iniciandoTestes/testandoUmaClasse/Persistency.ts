import PersistanceProtocol from './PersistenceProtocol';

export class Persistency implements PersistanceProtocol {
  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discount_1 = require("../../classes/Principios_Solid/interfaceSegregationPrinciple/discount");
const shoopingCart_1 = require("./shoopingCart");
//mock -> São o objetos que fingem ser algo criados apenas para fazer os testes
const createSut = () => {
    const discountMock = createDiscountMock();
    const sut = new shoopingCart_1.ShoppingCart(discountMock);
    return { sut, discountMock };
};
const createDiscountMock = () => {
    class DiscountMock extends discount_1.Discount {
    }
    return new DiscountMock();
};
const createCartItem = (name, price) => {
    class CartItemMock {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    }
    return new CartItemMock(name, price);
};
const createSutWithProducts = () => {
    const { sut, discountMock } = createSut();
    const cartItem1 = createCartItem('batata nanica', 10);
    const cartItem2 = createCartItem('alface belga', 5);
    sut.addItem(cartItem1);
    sut.addItem(cartItem2);
    return { sut, discountMock };
};
console.log('mysut', createSut());
describe('ShoppingCart', () => {
    const { sut, discountMock } = createSut();
    test('should be an empty cart when dont have products', () => {
        expect(sut.isEmpty()).toBe(true);
    });
    test('should have 2 itens ', () => {
        const { sut } = createSutWithProducts();
        expect(sut.items.length).toBe(2);
    });
    test('should remove a item ', () => {
        const { sut } = createSutWithProducts();
        sut.removeItem(1);
        expect(sut.items.length).toBe(1);
    });
    test('total should be 15 and total with discount ', () => {
        const { sut } = createSutWithProducts();
        expect(sut.total()).toBe(15);
        expect(sut.totalComDisconto()).toBe(15);
    });
    test('should add products and clear cart ', () => {
        const { sut } = createSutWithProducts();
        expect(sut.items.length).toBe(2);
        sut.clear();
        expect(sut.items.length).toBe(0);
    });
    test('should calculate discount.calculate(price) when totalWithDiscount is called', () => {
        const { sut, discountMock } = createSutWithProducts();
        const DiscountMockSpy = jest.spyOn(discountMock, 'calculate');
        sut.totalComDisconto();
        expect(DiscountMockSpy).toHaveBeenCalledTimes(1);
    });
    test('should calculate discount.calculate with total price ', () => {
        const { sut, discountMock } = createSutWithProducts();
        const DiscountMockSpy = jest.spyOn(discountMock, 'calculate');
        sut.totalComDisconto();
        expect(DiscountMockSpy).toHaveBeenCalledWith(sut.total());
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messaging_1 = require("./messaging");
function createSut() {
    return new messaging_1.Menssage();
}
describe('Persistency', () => {
    afterEach(() => {
        jest.clearAllMocks; // limpa os spyOn ao executar o teste
    });
    test('should be undefined', () => {
        const sut = createSut();
        expect(sut.sendMessage('teste')).toBeUndefined();
    });
    test('should call console.log once', () => {
        const sut = createSut();
        const consoleSpy = jest.spyOn(console, 'log'); // espia o metodo console.log
        sut.sendMessage('uepaaa');
        expect(consoleSpy).toHaveBeenCalledTimes(1);
    });
    test('should call console.log with "Mensagem enviada:"', () => {
        const sut = createSut();
        const consoleSpy = jest.spyOn(console, 'log'); // espia o metodo consoele.log
        sut.sendMessage('uepaaa');
        expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'uepaaa'); // virifica se o console.log tem isso aqui
    });
});

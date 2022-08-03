export function isNumber(value: any): value is number {
  // predicado numero is number = Aqui ele diz que o value e retornara um numero
  // caso o retorno seja true
  return typeof value === 'number';
}

export function soma<T>(...args: T[]): number {
  const retorno = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);
  return retorno;
}

console.log(soma(...[1, 2, 3, 3, 1, 't']));

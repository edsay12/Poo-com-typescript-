// usamos quando nao sabemos ao certo qual o tipo da coisa que estaremos mechendo ai
// entra os generics types
// ex
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 10];
// console.log(array.filter((value) => value < 5));

type FilterCallBack<B> = (value: B, index?: number, array?: B[]) => boolean;

function meuFilter<A>(array: A[], callBackFn: FilterCallBack<A>): A[] {
  const newArray = [];

  for (let i = 0; array.length > i; i++) {
    if (callBackFn(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

meuFilter(array, (value) => value < 5);

// <A> Generic types ele infere o tipo automaticamente
// no lugar do A pode ser qq letra

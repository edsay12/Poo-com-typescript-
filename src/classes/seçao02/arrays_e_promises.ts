import { resolve } from 'path';

const arrayNumeros: Array<number> = [1, 2, 3, 45, 6, 6];

async function promiseAsync(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

console.log(promiseAsync());

"use strict";
// function unirObjeto<O1, O2>(obj1: O1, obj2: O2) {
//   return { ...obj1, ...obj2 };
// }
// console.log(unirObjeto({ casa1: '001' }, { casa2: '001' }));
// outra forma de fazer o codigo acima
function unirObjeto(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
console.log(unirObjeto({ casa1: '001' }, { casa2: '001' }));

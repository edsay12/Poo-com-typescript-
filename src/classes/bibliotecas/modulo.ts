import _ from 'lodash';

_.mul = (array: number[]): number => {
  const resultado = array.reduce((total, acc) => total * acc, 1);
  return resultado;
};

export default _;

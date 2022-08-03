// Sao tipos genericos que ja existem (O propio typesricript ja implementou)

// o record e um obejeto no primeiro parametro passamos o tipo da chave e no 2
// o tipo do valor
const objeto1: Record<string, string | number> = {
  name: 'Luiz',
  sobrenome: 'Silva',
  idade: 21,
};

// Ja o required trasforma tude que era opcional em requerido
// ex:

export type Pessoa = {
  nome?: string;
  sobrenome?: string;
  idade?: string;
};

type PessoaRequerida = Required<Pessoa>; // tranforma os campos de pessoa em requeridos

// tipo partial faz o contrario do required
type PesssoaPartial = Partial<PessoaRequerida>;

// readonly tambem funciona da mesma forma

// Pick : nos ajuda a pegar do objeto apenas oque vamos ultilizar invez de pegar tudo

type PessoaPick = Pick<Pessoa, 'nome' | 'sobrenome'>; // no caso topegando o nome eo sobrenome

// Extract e Exclude

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type TipoExclude = Exclude<ABC, CDE>; //pega tudo que ta em abc e que nao esta em cde ou seja o (A,B)
type TipoExtract = Extract<ABC, CDE>; // Pega so oque eles tem em comun no caso  o C

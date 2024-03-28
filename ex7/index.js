/**
 * Não criar variáveis com var ou sem nenhuma palavra-chave (pode alterar as variáveis globais)
 * Variáveis declaradas com var podem ser redeclaradas
 * Inicializar uma variável sem nenhuma palavra-chave é equiparável a incializá-la com var
 */

nome = "Cleiton";
var nome = "Clóvis";
var nome = "Cléber";

/**
 * TIPOS DE DADOS PRIMITIVOS
 */

// string
const nome1 = 'Caio'; // aspas únicas/apóstrofos
const nome2 = "Caio"; // aspas duplas
const nome3 = `Caio`; // acentos graves (para permitir o uso de template strings ${})

// number
const n1 = 2024; // sem decimais
const n2 = 7.5; // com deimais

// undefined
let nomeAluno; // não aponta para nenhum lugar da memória

// null
let sobrenomeAluno = null; // não aponta para nenhum local da memória também

/**
 * ENTRETANTO, undefined != null
 * undefined -> utilizado na declaração sem inicialização
 * null -> utilizado para desconfigurar uma variável, explicitamente indicando a nulidade
 */

// boolean (lógico)
let portaAberta = true; // true == b(1)
portaAberta = false; // false == b(0)

console.log(typeof nome1, nome1);
console.log(typeof nome2, nome2);
console.log(typeof nome3, nome3);
console.log(typeof n1, n1);
console.log(typeof n2, n2);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno); // null é considerado do tipo object
console.log(typeof portaAberta, portaAberta);

/**
 * Diferença dos tipos primitivos para os tipos de referência (array, p.e.)
 */

let a = [1,2];
let b = a;

console.log(a, b) // [1,2] [1,2]

b.push(3);

console.log(a, b); // [1,2,3] [1,2,3]

/**
 * As variáveis com tipos de referência armazenam um ponteiro para um lugar na memória.
 * Portanto, sempre que se atribui o valor de uma variável de referência para outra, ambas apontam para um 
 * mesmo local na memória, sendo tratadas como dois nomes para a mesma coisa.
 * Então, quando a é alterado, b sofre a mesma alteração, e vice-versa.
 */

let x = 1;
let y = x;

console.log(x, y); // 1 1

y++;

console.log(x, y); // 1 2

/**
 * Já variáveis de tipos primitivos armazenam valores diferentes quando atribuídas umas às outras.
 * Portanto, quando aumentamos y, ao contrário do que aconteceria com tipos de referência, x não é aumentado,
 * funcionando como dois valores diferentes.
 */
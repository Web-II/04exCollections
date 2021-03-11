// Deel 1
const alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const teCoderen = 'ERRARE HUMANUM EST.';
const teDecoderen = 'SHUIHFW! BRX DUH GRLQJ JUHDW, NHHS LW XS!';
const code = 3;

const codeer = function (teCoderen, code, alfabet) {
  // implementeer
};

const decodeer = function (teDecoderen, code, alfabet) {
  // implementeer
};

console.log(`"${teCoderen}" is gecodeerd "${codeer(teCoderen, 3, alfabet)}"\n`);
console.log(
  `"${teDecoderen}" is gedecodeerd "${decodeer(teDecoderen, 3, alfabet)}"`
);

// Deel 2
function camelize(input) {
  // implementeer
}

console.log(camelize('background-color')); // backgroundColor
console.log(camelize('list-style-image')); // listStyleImage
console.log(camelize('-webkit-transition')); // WebkitTransition

// Deel 3
function zijnBuren(word1, word2) {
  // implementeer
}

const woorden = [
  'KOLDER',
  'HOLDER',
  'HELDER',
  'HERDER',
  'VERDER',
  'VERVER',
  'VERSER',
  'VELSER'
];

// Deel 4
let morse = new Map();
morse.set('A', '.-');
morse.set('B', '-...');
morse.set('C', '-.-.');
morse.set('D', '-..');
morse.set('E', '.');
morse.set('F', '..-.');
morse.set('G', '--.');
morse.set('H', '....');
morse.set('I', '..');
morse.set('J', '.---');
morse.set('K', '-.-');
morse.set('L', '.-..');
morse.set('M', '--');
morse.set('N', '-.');
morse.set('O', '---');
morse.set('P', '.--.');
morse.set('Q', '--.-');
morse.set('R', '.-.');
morse.set('S', '...');
morse.set('T', '-');
morse.set('U', '..-');
morse.set('V', '...-');
morse.set('W', '.--');
morse.set('X', '-..-');
morse.set('Y', '-.--');
morse.set('Z', '--..');
morse.set('0', '-----');
morse.set('1', '.----');
morse.set('2', '..---');
morse.set('3', '...--');
morse.set('4', '....-');
morse.set('5', '.....');
morse.set('6', '-....');
morse.set('7', '--...');
morse.set('8', '---..');
morse.set('9', '----.');
morse.set('.', '.-.-.-');
morse.set(',', '--..--');
morse.set('?', '..--..');
morse.set('-', '-....-');
morse.set('/', '-..-.');
morse.set(':', '---...');
morse.set("'", '.----.');
morse.set('-', '-....-');
morse.set(')', '-.--.-');
morse.set(';', '-.-.-');
morse.set('(', '-.--.');
morse.set('=', '-...-');
morse.set('@', '.--.-.');

const tekst = 'I NEED HELP WITH JAVASCRIPT SOS';
const result = ''; // result moet de tekst in morsecode bevatten
console.log(result);

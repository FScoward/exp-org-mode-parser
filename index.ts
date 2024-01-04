import { Lexer } from './lexer';
import { Parser } from './parser';

console.log("Hello via Bun!");

const input = `* Header 1
- List item 1
- List item 2
* Header 2`;

const lexer = new Lexer(input);
const tokens = lexer.tokenize();

const parser = new Parser(tokens);
const ast = parser.parse();

console.log(ast);

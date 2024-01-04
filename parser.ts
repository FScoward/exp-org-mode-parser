import type { Token } from './token'

type ASTNode = { type: string; content: string; children?: ASTNode[] };;

export class Parser {
  private cursor: number = 0;

  constructor(private tokens: Token[]) {}

  parse(): ASTNode[] {
    const ast: ASTNode[] = [];

    while (this.cursor < this.tokens.length) {
      const token = this.tokens[this.cursor];

      if (token.type === 'HEADER') {
        ast.push({ type: 'Header', content: token.value });
      } else if (token.type === 'LIST_ITEM') {
        ast.push({ type: 'ListItem', content: token.value });
      }

      this.cursor++;
    }

    return ast;
  }
}


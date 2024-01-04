import type { Token } from './token';

export class Lexer {
  private cursor: number = 0;
  private tokens: Token[] = [];

  constructor(private input: string) {}

  tokenize(): Token[] {
    while (this.cursor < this.input.length) {
      const char = this.input[this.cursor];

      if (char === '*') {
        this.tokens.push({ type: 'HEADER', value: this.consumeLine() });
      } else if (char === '-') {
        this.tokens.push({ type: 'LIST_ITEM', value: this.consumeLine() });
      } else {
        this.consumeLine(); // Ignore other lines
      }
    }

    return this.tokens;
  }

  private consumeLine(): string {
    let lineEnd = this.input.indexOf('\n', this.cursor);
    if (lineEnd === -1) lineEnd = this.input.length;

    const line = this.input.slice(this.cursor, lineEnd).trim();
    this.cursor = lineEnd + 1;
    return line;
  }
}


# exp-org-mode-parser

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.21. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## org-mode ast
<Header> ::= * | +
<Todo> ::= <Header> TODO <Todo-body> | <Header> TODO <Todo-body> <Date> 
<Done> ::= <Header> DONE <Todo-body>
<Todo-body> ::= 任意の文字列
<Date> ::= <yyyy-mm-dd>

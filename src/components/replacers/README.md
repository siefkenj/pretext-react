## Replacers

A _replacer_ function is one that takes in a [HAST](https://github.com/syntax-tree/hast) node
and either returns a React element or `undefined`. If a `React` element is returned, that element
is placed in the tree (the element is responsible for rendering any children if it so desires). If
`undefined` is returned, then processing continues as usual.

Replacer functions are also passed a `processContent: HastElement -> React.ReactNode` function that
can be used to pass processing back to the main algorithm. It's primary purpose is to process children.

`hastDom` is also passed in. `hastDom` has full knowledge of the entire HAST AST and can be used for efficient
querying for parent elements, etc.

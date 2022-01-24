import { DOMNode } from "html-react-parser";

type PreparedDomToReact = (
    nodes: DOMNode[]
) => string | JSX.Element | JSX.Element[];
type PreparedParse = (html: string) => string | JSX.Element | JSX.Element[];

export type PreparedParsers = { parser: PreparedParse; domToReact: PreparedDomToReact };

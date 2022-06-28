type PreparedParse = (html: string) => string | JSX.Element | JSX.Element[];

export type PreparedParsers = { parseString: PreparedParse };

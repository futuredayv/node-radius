type SpreadableFn = (...args: Array<any>) => void;

type Middleware = (req, res, next?, err?) => void;

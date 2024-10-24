export const baseApiUrl = process.env.NEXT_PUBLIC_COINGECKO_BASE_API_URL;
export const supportedCurrencies = process.env.NEXT_PUBLIC_SUPPORTED_CURRENCIES;

export const coinGeckoUrl = "https://coingecko.com";

export const statusMessages: { [key: number]: string } = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  409: "Conflict",
  410: "Gone",
  413: "Request Entity Too Large",
  415: "Unsupported Media Type",
  422: "Unprocessable Entity",
  429: "Too Many Requests",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
};

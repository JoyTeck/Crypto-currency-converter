//const api_key =
//"4736f40b41950c9e6dafaf033fc6f17fbfd751c5547742d0f4919f8a2e8a59e9";
// const url = "https://min-api.cryptocompare.com/data";

// i really don't know how to go about this api key stuff, still learning how to navigate through it but nevertheless oga freed i go copy your js file input

const currency = [
  {
    symbol: "BTC",
    name: "Bitcoin",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
  },
  {
    symbol: "SOL",
    name: "Solana",
  },
];

const select = document.querySelectorAll("select");

select.forEach((item) => {
  currency.forEach((coin) => {
    const option = document.createElement("options");
    option.value = coin.name;
    option.textContent = coin.symbol;

    item.appendChild(option);
  });
});

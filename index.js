const api_key =
  "4736f40b41950c9e6dafaf033fc6f17fbfd751c5547742d0f4919f8a2e8a59e9";
const url = "https://min-api.cryptocompare.com/data";

async function getAllCurrency() {
  const request = await fetch(`${url}/blockchain/list?api_key=${api_key}`, {
    mode: "cors",
  });

  const response = await request.json();

  return response;
}

const select = document.querySelectorAll("select");
let formattedData = [];

getAllCurrency().then((data) => {
  console.log(data);
});

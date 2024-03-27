const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Recieved response: ${response.status}`);
  console.log(`response timeing ${response.statusText}`);
});

console.log("Started request ...");

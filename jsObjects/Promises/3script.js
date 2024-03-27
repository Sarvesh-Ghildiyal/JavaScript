// more inside then method
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Http error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => console.log(data[1].name));

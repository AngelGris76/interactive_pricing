const plans = [
  { pages: "10K ", price: "$8.00 " },
  { pages: "50K ", price: "$12.00 " },
  { pages: "100K ", price: "$16.00 " },
  { pages: "500K ", price: "$24.00 " },
  { pages: "1M ", price: "$36.00 " },
];

const pages = document.querySelector(".card__pages");
const prices = document.querySelector(".card__prices");
const rangeControl = document.querySelector(".card__range");
const pricingControl = document.getElementById("pricingcontrol");

const refreshPrices = (index) => {
  let price = plans[parseInt(index)]["price"];
  price = parseInt(price.slice(1));
  if (pricingControl.checked) {
    price = price * 0.75;
  }
  price = Number.parseFloat(price).toFixed(2);
  prices.firstChild.textContent = `$${price}`;
};

const refreshPages = (index) => {
  pages.firstChild.textContent = plans[parseInt(index)]["pages"];
};

rangeControl.addEventListener("input", () => {
  let percentage = parseInt(rangeControl.value) * 25;

  document.documentElement.style.setProperty(
    "--Bar-percentage",
    `${percentage}%`
  );

  refreshPrices(rangeControl.value);
  refreshPages(rangeControl.value);
});

pricingControl.addEventListener("click", () =>
  refreshPrices(rangeControl.value)
);

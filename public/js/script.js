const plans = [
  { pages: "10K ", price: "$8 " },
  { pages: "50K ", price: "$12 " },
  { pages: "100K ", price: "$16 " },
  { pages: "500K ", price: "$24 " },
  { pages: "1M ", price: "$36 " },
];

const pages = document.querySelector(".card__pages");
const prices = document.querySelector(".card__prices");
const rangeControl = document.querySelector(".card__range");

const refreshPrices = (index) => {
  prices.firstChild.textContent = plans[parseInt(index)]["price"];
};

const refreshPages = (index) => {
  pages.firstChild.textContent = plans[parseInt(index)]["pages"];
};

rangeControl.addEventListener("input", () => {
  let percentage = rangeControl.value * 25;

  document.documentElement.style.setProperty(
    "--Bar-percentage",
    `${percentage}%`
  );

  refreshPrices(rangeControl.value);
  refreshPages(rangeControl.value);
});

import popUp from "./pop-up.js";
import getItemList from "./getItemList.js";

let items = [];
let itemsInCart = [];

fetch("../items.json")
  .then((response) => response.json())
  .then((data) => {
    items = [...data.products];

    const cardsSection = document.getElementById("cards-section");

    let innerHTML = getItemList(items, "order");
    cardsSection.innerHTML = innerHTML;
  })
  .then(() => {
    const orderButtons = document.getElementsByClassName("order-button");
    for (let i = 0, length = orderButtons.length; i < length; i++) {
      orderButtons[i].onclick = () => {
        itemsInCart.push(items[i]);
        document.getElementById("items-in-cart-count").innerHTML =
          itemsInCart.length;
        popUp("add");
      };
    }
  })
  .catch((err) => console.error(err));

export function getItemsInCart() {
  return itemsInCart;
}

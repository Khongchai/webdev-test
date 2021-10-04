import { getItemsInCart } from "./items/index.js";
import getItemList from "./items/getItemList.js";

const modalBackgroundCover = document.getElementById("modal-background-cover");
const cartButton = document.getElementById("cart-button");
const modalItemsContainer = document.getElementById("modal-items-container");
const modal = document.getElementById("modal");
const purchaseButton = document.getElementById("purchase-button");
const buynowButton = document.getElementById("buy-now-button");

modalBackgroundCover.onclick = (e) => {
  e.target.style.opacity = 0;
  e.target.style.pointerEvents = "none";
};
modalItemsContainer.onclick = (e) => {
  e.stopPropagation();
};
modal.onclick = (e) => {
  e.stopPropagation();
};
purchaseButton.onclick = (e) => {
  e.stopPropagation();
  alert("Functionality not implemented, not in the requirements");
};

cartButton.onclick = () => {
  openCart();
};
buynowButton.onclick = () => {
  openCart();
};
function openCart() {
  modalBackgroundCover.style.opacity = 1;
  modalBackgroundCover.style.pointerEvents = "unset";

  const itemsInCart = getItemsInCart();
  if (itemsInCart.length === 0) {
    modalItemsContainer.innerHTML = `<h1 class="purple-text">You do not have any items in your cart.</h1>`;
    modalItemsContainer.style.overflowX = "auto";
    return;
  }

  modalItemsContainer.style.overflowX = "scroll";
  modalItemsContainer.innerHTML = getItemList(itemsInCart, "remove");
  const removeButtons = document.getElementsByClassName("remove-button");
  for (let i = 0, length = removeButtons.length; i < length; i++) {
    removeButtons[i].onclick = (e) => {
      e.stopPropagation();
      alert("Funtionality not implemented, not in the requirements");
    };
  }
}

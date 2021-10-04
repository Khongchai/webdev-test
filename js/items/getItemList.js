/*
    For both add and remove list

    **Justification**
    This causes rebuild of the entier render tree, and is slower than appendchild, however,
    I am batching everything into one long string and it is done only once, so it's ok.
*/
export default function getItemList(items, orderOrRemove) {
  let innerHTML = ``;
  items.forEach((item, i) => {
    innerHTML += `
        <div class="cards">
            <img src="${item.url}" alt="${item.name + " image"}" />
            <h5>${item.name}</h5>
            <div class="price-button-containers">
              <p>$${item.price}</p>
              <button class="${orderOrRemove}-button" value="${i}">${orderOrRemove.toUpperCase()}</button>
            </div>
          </div>
        `;
  });
  return innerHTML;
}

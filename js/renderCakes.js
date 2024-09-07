const cakesContainer = document.getElementById("cakes-container");
getCakes();

async function getCakes() {
  const response = await fetch("./js/cakes.json");

  const cakesArray = await response.json();

  renderCakes(cakesArray);
}


function renderCakes(cakesArray) {
  cakesArray.forEach(function (item) {
    const cakeHTML = `
          <div class="cart">
            <div class="cart${item.id}">
              <img src="./css/img/${item.imgSrc}" alt="" />
              <div class="cart__text">
                <h5 class="cart__title">${item.title}</h5>
                <p class="cart__desc">
                  ${item.desc}
                </p>
              </div>
              <div class="cart__price">${item.price} ₽/шт.</div>
              <button class="btn" type="button">Заказать</button>
            </div>
          </div>
        `;
    cakesContainer.insertAdjacentHTML("beforeend", cakeHTML);
  });
}

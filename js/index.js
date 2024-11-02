let favoriteProducts = [];

// Lấy danh sách sản phẩm cho new arrivals
function getInfoProduct() {
  let promise = axios({
    method: "GET",
    url: "https://shop.cyberlearn.vn/api/Product",
  });
  promise
    .then((res) => {
      console.log(res);
      const firstTenProducts = res.data.content.slice(0, 12);
      renderProduct(firstTenProducts);
    })
    .catch((err) => {
      console.log(err);
    });
}

getInfoProduct();

// Chức năng hiển thị thông tin sản phẩm lên giao diện
function renderProduct(arr) {
  let content = "";
  arr.forEach((item, index) => {
    let { image, name, price, id } = item;
    content += `
        <div class="col-md-3 col-sm-6 mb-3">
          <a href="../pageDetail/detail1.html?id=${id}" class="text-decoration-none">
          <div class="product_item position-relative">
            <img src="${image}" alt="${name}"/>
            <h5 >${name}</h5>
            <p class="mb-0">Types of Shoes</p>
            <p class="mb-2">Quantity Color</p>
            <div class="d-flex align-items-center product-footer text-center">
            <button class="w-50 p-2 border-0">Buy now</button>
            <div class="w-50 p-2">${price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}</div>
            </div>
            <button class="btn-favorite position-absolute heart-icon" onclick="event.stopPropagation();><span class="span-favorite"><i class="fa-regular fa-heart icon-favorite"></i></span></button>
          <div class="btn-view">
              <button>View detail</button>
          </div>
            </div>
          </a>
        </div>
        `;
  });
  document.getElementById("product_item").innerHTML = content;
  addFavoriteButtonListeners();
}

function addFavoriteButtonListeners() {
  const favoriteButtons = document.querySelectorAll(".btn-favorite");
  favoriteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault(); // Ngăn chặn sự kiện mặc định
      event.stopPropagation(); // Ngăn chặn sự kiện lan ra ngoài thẻ a
      toggleFavoriteIcon(button); // Chuyển đổi biểu tượng trái tim và tăng/giảm số lượng yêu thích
    });
  });
}

function toggleFavoriteIcon(button) {
  const icon = button.querySelector(".icon-favorite");
  const favoriteNotification = document.getElementById("favorite-count");
  let count = parseInt(favoriteNotification.textContent) || 0;

  if (icon.classList.contains("fa-regular")) {
    icon.classList.remove("fa-regular");
    icon.classList.add("fa-solid");
    count += 1;
  } else {
    icon.classList.remove("fa-solid");
    icon.classList.add("fa-regular");
    count -= 1;
  }

  favoriteNotification.textContent = count;
  if (count > 0) {
    favoriteNotification.style.display = "flex";
  } else {
    favoriteNotification.style.display = "none";
  }
}

// Lấy danh sách sản phẩm cho new collection
function getInfoCollection() {
  let promise = axios({
    method: "GET",
    url: "https://shop.cyberlearn.vn/api/Product",
  });
  promise
    .then((res) => {
      const selectedProducts = res.data.content.slice(6, 18);
      renderCollection(selectedProducts);
    })
    .catch((err) => {
      console.log(err);
    });
}

getInfoCollection();

// Chức năng hiển thị thông tin sản phẩm lên giao diện
function renderCollection(arr) {
  let content = "";
  for (let i = 0; i < arr.length; i += 4) {
    const smallArr = arr.slice(i, i + 4);
    content += `
      <div class="carousel-item ${i === 0 ? "active" : ""}">
        <div class="row">
          ${smallArr
            .map(
              (item) => `
            <div class="col-md-3 col-sm-6 mb-3">
            <a href="../pageDetail/detail1.html?id=${
              item.id
            }" class="text-decoration-none">
            <div class="collection_item position-relative">
            <img src="${item.image}" alt="${item.name}"/>
            <h5 class="my-2" >${item.name}</h5>
            <p class="mb-0">Types of Shoes</p>
            <p class="mb-2">Quantity Color</p>
            <div class="d-flex align-items-center collection-footer text-center">
            <button class="w-50 p-2 border-0">Buy now</button>
            <div class="w-50 p-2">${item.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}</div>
            </div>
          <button class="btn-favorite heart-icon position-absolute"><span class="span-favorite"><i class="fa-regular fa-heart icon-favorite"></i></span></button>
          <div class="btn-view">
              <button>View detail</button>
          </div>
          </div>
          
          </a>
          </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }
  document.getElementById("collection_item").innerHTML = content;
}

document
  .querySelector(".bubble-contact-wrapper")
  .addEventListener("click", function () {
    document
      .querySelector(".bubble-contact-listing-wrapper")
      .classList.toggle("active");
  });

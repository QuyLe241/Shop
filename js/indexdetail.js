    
    //          Axios  API
    //      gọi api
    // call product arrivals
    //    https://shop.cyberlearn.vn/api/Product
    function getInfoProduct() {
      let promise = axios({
        method: "GET",
        url: "https://shop.cyberlearn.vn/api/Product",
      });
      promise
        .then((res) => {
          console.log(res);
          const firstTenProducts = res.data.content.slice(0, 16);
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
        <div class="col-md-3 col-sm-6 mt-4">
          <a href="../pageDetail/detail1.html?id=${id}" class="text-decoration-none">
          <div class="product_item position-relative shadow p-3 mb-5 bg-body-tertiary rounded">
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
            <button class="btn-favorite position-absolute heart-icon"><span class="span-favorite"><i class="fa-regular fa-heart icon-favorite"></i></span></button>
          <div class="btn_viewshoe">
              <button>Xem nhanh</button>
          </div>
            </div>
          </a>
        </div>
        `;
      });
      document.getElementById("product_item").innerHTML = content;
      // <button class="btn-favorite position-absolute heart-icon"><span class="span-favorite"><i class="fa-regular fa-heart icon-favorite"></i></span></button>
    }

    // document.getElementById("heart_love").onclick = function() {
    //   document.getElementById("heart_love").classList.toggle("heart_lovee");
    // }
    document.getElementsByClassName("btn-favorite").onclick = function() {
      // document.getElementById("heartlove").classList.toggle("heart_lovee");
      document.getElementsByClassName("btn-favorite").classList.toggle("heart_lovee");
    }

// document.getElementById("product_item").innerHTML = "123456789";
   
    
    
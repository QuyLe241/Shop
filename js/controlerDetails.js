
    
    // document.getElementsByClassName("h_like").onclick = function() {
    //     let heart = document.getElementsByClassName("fa-heart")
    //     heart.classList.toggle('like_shoe');  
    // }
    
    //      goi API param
    //      https://shop.cyberlearn.vn/api/Product/getbyid?id= ${id}
    //      https://shop.cyberlearn.vn/api/Product
    
    // const urlParams = new URLSearchParams(window.location.search);
    // const idParam = urlParams.get('id');
    // getProductById(idParam);

    window.onload = function () {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');
      console.log('params', id);
      // 
      //call api load lên giao diện
      getInforProduct();
      function getInforProduct() {
        let promise = axios({
          method: "GET",
          url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
        });
        promise 
          .then((res) => {
            console.log(res);
            // const firstTenProducts = res.data.content.slice(0, 16);
            // renderProduct(firstTenProducts);
            // const firstTenProducts = res.data.content;
            // renderProduct(firstTenProducts);
            // getInforProduct(res.data);

            renderImg(res.data.content);
            renderName(res.data.content);
            renderNameCol4(res.data.content);
            renderPrice(res.data.content);
            renderDescription(res.data.content);
            renderSize(res.data.content);
          })
          .catch((err) => {
            console.log(err);
          });
      }

      function renderImg(item){
        let content = "";
          let {image, name} = item;
          content = `
            <img src="${image}" alt="${name}"/>
          `;
       
        document.getElementById("imgItem").innerHTML = content;
      }

      //    --
      function renderName(item) {
        // let content;
          let {name} = item;
          let content = name;
       
        document.querySelector("#nameItem h3").innerHTML = content;
      }  

      // description
      function renderDescription(item) {
        // let content;
          let {description} = item;
          let content = description;
      
        document.querySelector("#nameItem p").innerHTML = content;
      }
      // 
      function renderNameCol4(item) {
        // let content;
          let {name} = item;
          let content = name;
        document.querySelector("#nameItemR h1").innerHTML = content;
      } 
      // 
      function renderPrice(item) {
        // let content ="";
          let {price} = item;
          let content = price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          });
        document.querySelector("#nameItemR span").innerHTML = content;
      }

      // size
      //  arrsize = size.map(0,length); 
      function renderSize(arrsize) {
        let content = "";
        arrsize.forEach((item, index) => {
          let {size} = item;
          content += `
          <button class="btn p-2"><span>${size}</span></button>
          `;
        })
          document.getElementById("groupBtn").innerHTML = content;
      }

    }

    function sizeshoe (arr) {
      let size = "";
      arr.forEach((item, index) => {
        let {size} = item;
        size += `
        <button class="btn p-2"><span>${size}</span></button>
        `;
      })
      document.getElementById("groupBtn").innerHTML = size; 
    }


      
    
      

    
       
    
    
    
    //    Size


    function renderSize(arr) {
      let content = '';
      arr.forEach((item, index) => {
        let {size} = item;
        content += `
        <div class="">
        
                <div class="">
                  <button class="btn p-3"><span>${size}</span></button>
                </div>
                
        `;
      })
        document.getElementById("groupBtn").innerHTML = content;
    }

    // function renderSize(arr) {
    //   let productSize = '';
    //   var contentRelatedPro = "";
    
    //   for (let i = 0; i < arr.size.length; i++) {
    //       productSize += `<span class='product-card__detail'>${arr.size[i]}</span>`
    //       // console.log(arr.size[i]);
    //   }
    // }
    
    
    
    
    
      
    
    
    
    
    
    
      
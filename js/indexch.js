
    //      details
document.getElementById("heart_like").onclick = function() {
    let heart = document.getElementById("heart_l");
    heart.classList.toggle('like_shoe');
}


// function getInforProduct(id) {
//   let promise = axios({
//     method: "GET",
//     url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
//   });
//   promise 
//     .then((res) => {
//       console.log(res);
//       // const firstTenProducts = res.data.content.slice(0, 16);
//       // renderProduct(firstTenProducts);
//       // const firstTenProducts = res.data.content;
//       // renderProduct(firstTenProducts);
//       // getInforProduct(res.data.content);
//       // renderImg(res.data.content);
//       // renderName(res.data.content);
//       // renderNameCol4(res.data.content);
//       // renderPrice(res.data.content);
//       // renderDescription(res.data.content);

//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
// getInforProduct();
// getInforProduct(idParam);

// function getIdProduct() {

// };




function AddRegister(e) {
  e.preventDefault();
  let arrField = document.querySelectorAll("#formRegister input");
  let user ={}
  let selectedValue = document.getElementById("txtGender");
  let txtGender =selectedValue.options[selectedValue.selectedIndex].text;
  let isValid = true;
  for (let field of arrField) {
    let { id, value } = field;
    user[id] = value;
    let parent = field.parentElement;
    let errorField = parent.querySelector("span");
    let check = checkEmptyValue(value, errorField);

    isValid &= check;

    if (check && id == "txtEmail") {
      isValid &= checkEmailValue(value, errorField);
    }
    if (check && id == "txtName") {
      isValid &= checkName(value, errorField);
    }

    if (check && id == "txtPhone") {
      isValid &= checkPhoneNumberValue(value, errorField);
    }
    if (check && id == "txtGender") {
      isValid &= checkGender(value, errorField);
    }
  }

  console.log(user);
  const formUser = {email:user.txtEmail,password:user.txtPassword,name:user.txtName,gender:txtGender==="Male"? true:false,phone:user.txtPhone}
  console.log(formUser)
  
   let promise = axios({
        method: "POST",
        url:"https://shop.cyberlearn.vn/api/Users/signup",
        data: formUser,
    });

    promise.then(function(res){
        console.log(res);

    }).catch(function(err){
          console.log(err);
    })
}
document.getElementById("formRegister").onsubmit = AddRegister;

// validation register


// kiểm tra dữ liệu rỗng
function checkEmptyValue(value, errorField) {
  if (value.length==0) {
    // TH mà bị lỗi
    errorField.innerHTML = "Vui lòng không bỏ trống trường này";
    return false;
  } else {
    // TH không bị lỗi
    errorField.innerHTML = "";
    return true;
  }
}

function checkName(value, errorField) {
    // Regex to match Vietnamese names (assuming Latin alphabet and basic diacritics)
    let regexName = /^[a-zA-ZÀ-ỹ ]{1,}$/;
  
    let isValid = regexName.test(value.trim());
    console.log(isValid);
  
    if (isValid) {
      // If name is valid
      errorField.innerHTML = "";
      return true;
    } else {
      // If name is not valid
      errorField.innerHTML = "Vui lòng nhập đúng định dạng tên";
      return false;
    }
  }
  
  
  function checkPhoneNumberValue(value, errorField) {
    // thực hiện kiểm tra xem sdt có phải của viet nam hay không
    // regex để kiểm tra phoneNumber
    let regexPhone = /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/;
  
    let isValid = regexPhone.test(value);
    console.log(isValid);
    if (isValid) {
        // TH sdt chuẩn định dạng
        errorField.innerHTML = "";
        return true;
      } else {
        errorField.innerHTML = "Vui lòng nhập đúng số điện thoại";
        return false;
      }
  }
  function checkEmailValue(value, errorField) {
    let regexEmail  = 
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    // sử dụng chuỗi regex để kt value
    let isValid = regexEmail.test(value);
    console.log(isValid);
    if (isValid) {
        // TH email chuẩn định dạng
        errorField.innerHTML = "";
        return true;
      } else {
        errorField.innerHTML = "Vui lòng nhập đúng định dạng email";
        return false;
      }
  }
  
  function checkGender(value, errorField) {
    if (value === 'male') {
      errorField.innerHTML = "";
      return true; 
    } else if (value === 'female') {
      errorField.innerHTML = ""; 
      return false; 
    } else {
      errorField.innerHTML = "Vui lòng chọn giới tính"; 
      return false;
    }
  }
  
  
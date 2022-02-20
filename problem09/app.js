const reg = /^((\+84)|09|03|07|08|05)[0-9](\d{2}){4}$/;

let number = +prompt("Nhap so dien thoai: ");

if (number !== "") {
  if (reg.test(number) == false) {
    alert("So dien thoai k dung dinh dang");
  } else {
    alert("So dien thoai hop le");
  }
} else {
  alert("Ban chua nhap so dien thoai");
}

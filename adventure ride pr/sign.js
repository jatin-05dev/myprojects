let name = document.getElementById("name")
let phone = document.getElementById("phone")
let email = document.getElementById("email")
let adress = document.getElementById("adress")
let city = document.getElementById("city")
let password = document.getElementById("password")
let username = document.getElementById("username")
let sig = document.getElementById("sig")

function cp() {
  let password = document.getElementById("password").value;

  if (
    password.length < 8 ||
    password === password.toLowerCase() ||
    password === password.toUpperCase() ||
    !(password.includes("0") || password.includes("1") ||
      password.includes("2") || password.includes("3") ||
      password.includes("4") || password.includes("5") ||
      password.includes("6") || password.includes("7") ||
      password.includes("8") || password.includes("9")) ||
    !(password.includes("@") || password.includes("#") ||
      password.includes("*") || password.includes("%") ||
      password.includes("$"))
  ) {

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "invalid password or week password!",
      footer: '<a href="#">Why do I have this issue?</a>'
    })
    return false
  } else {
    return true
  }
}



function emai() {
  if (!email.value.endsWith("gmail.com")) {
   
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "email should include gmail.com",
      footer: '<a href="#">Why do I have this issue?</a>'
    })
    return false
  }
  return true
}
//     let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$*%]).{8,}$/;
// if (pattern.test(password)) {
//   alert("Valid");
// } else {
//   alert("Invalid");
// }
// isme abhi dekh loop se
let old = JSON.parse(localStorage.getItem("userinfo"))

sig.addEventListener("submit", (e) => {
  e.preventDefault()
  if (!emai()) {
    password.value = ""
    name.value = ""
    phone.value = ""
    email.value = ""
    adress.value = ""
    city.value = ""
    username.value = ""
    return

  }
  if (!cp()) {


    name.value = ""
    phone.value = ""
    email.value = ""
    adress.value = ""
    city.value = ""
    username.value = ""

    return
  }



  let user = {
    name: name.value.trim(),
    phone: phone.value.trim(),
    email: email.value.trim(),
    adress: adress.value.trim(),
    city: city.value.trim(),
    password: password.value.trim(),
    username: username.value.trim()
  }




  if (old && (old.name === user.name || old.password === user.password || old.username === user.username)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "this user name is already present!",
      footer: '<a href="#">Why do I have this issue?</a>'
    }).then(() => {
      name.value = ""
      phone.value = ""
      email.value = ""
      adress.value = ""
      city.value = ""
      password.value = ""
      username.value = ""

    })

  }
  if (old) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to create new  acc",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, create it!"
    }).then((result) => {
      if (result.isConfirmed) {
        let user = {
          name: name.value.trim(),
          phone: phone.value.trim(),
          email: email.value.trim(),
          adress: adress.value.trim(),
          city: city.value.trim(),
          password: password.value.trim(),
          username: username.value.trim()
        }
        localStorage.setItem("userinfo", JSON.stringify(user));
        Swal.fire({
          title: "update!",
          text: "Your acc has been create.",
          icon: "success"
        }).then(() => {
          window.location.href = "login.html"
        })
      }
      else {
        Swal.fire({
          title: "Cancelled",
          icon: "info"
        }).then(() => {
          name.value = ""
          phone.value = ""
          email.value = ""
          adress.value = ""
          city.value = ""
          password.value = ""
          username.value = ""
        })

      }
    })

  }
  else {
    localStorage.setItem("userinfo", JSON.stringify(user))
    Swal.fire({
      title: "Good job!",
      text: "You acc was cretedd",
      icon: "success"
    }).then(() => {
      name.value = ""
      phone.value = ""
      email.value = ""
      adress.value = ""
      city.value = ""
      password.value = ""
      username.value = ""
      window.location.href = "login.html"
    })
  }


})




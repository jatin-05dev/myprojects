 
let log = document.getElementById("log")
log.addEventListener("submit",(e)=>{

  
  e.preventDefault()


  let login={
    name : document.getElementById("name1").value.trim(),
     password:document.getElementById("password1").value.trim(),
   username :  document.getElementById("username1").value.trim()
}




   
  let n = JSON.parse(localStorage.getItem("userinfo"))

  if (!n) {
   Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "no account signup first",
  footer: '<a href="login.html">go to login page ?</a>'
}).then(()=>{
    window.location.href = "home.html"

}) 
console.log(n);
    
  }
    if (
    login.name === n.name &&
    login.password === n.password &&
    login.username === n.username
  ) {
    localStorage.setItem("log",JSON.stringify(login))
    Swal.fire({
      title: "Log in Success",
      text: "You are now logged in!",
      icon: "success",
      confirmButtonText: "OK"
    }).then(() => {
      window.location.href = "home.html";
    })
  } else {
    Swal.fire({
  title: "sorry",
  text: "This user name not found",
  icon: "question"
}).then(()=>{
    document.getElementById("name1").value = "";
    document.getElementById("password1").value = "";
    document.getElementById("username1").value = "";
})}
});
 
 
          
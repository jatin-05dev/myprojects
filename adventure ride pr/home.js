let n = JSON.parse(localStorage.getItem("userinfo"))
let l = JSON.parse(localStorage.getItem("log"))


let sl = document.getElementById("sig")
let lu = document.getElementById("lou")


 

if(l){
    sl.style.display="none"
    let lo = document.getElementById("log")
    lo.textContent = n.name
     
    lu.style.display="inline"

}
function logout(){
    localStorage.clear()
    window.location.href="home.html"
}

function check() {
    if (!l && !n) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "no account create  first",
            footer: '<a href="sign.html">go to sign up page</a>'
        }).then(() => {
            window.location.href = "home.html"

        })
    }
    else {
        window.location.href = "selectionad.html"
    }
}
function  re() {
    if(l && n){
        window.location.href="home.html"
    }
}
function  rea() {
    if(l && n){
        window.location.href="selectionad.html"
    }
}
function  reac() {
    if(l && n){
        window.location.href="book.html"
    }
}

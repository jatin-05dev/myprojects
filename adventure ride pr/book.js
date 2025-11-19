let dta = JSON.parse(localStorage.getItem("userinfo"))
let dta2 = JSON.parse(localStorage.getItem("selectedAdventure"))

let name2 = document.getElementById("name2")
let persons = document.getElementById("persons")
let payment = document.getElementById("payment")
let price = document.getElementById("price")
let phone2 = document.getElementById("phone2")
let email2 = document.getElementById("email2")
let ad = document.getElementById("adventure")
let sd = document.getElementById("image-side")


name2.value = dta.name
phone2.value = dta.phone
email2.value = dta.email
ad.value = dta2.name

sd.style.backgroundImage = `url("${dta2.img}")`
sd.style.backgroundSize = "cover";     
sd.style.backgroundPosition = "center";  
sd.style.backgroundRepeat = "no-repeat";




function po() {
   let bo = {
      name3: name2.value,
      phone3: phone2.value,
      email3: email2.value,
      adventure3: ad.value,
      persons3: persons.value,
      payment3: payment.value,
      price3: price.value,
      img:dta2.img,

      message3: document.getElementById("message").value,
      date3: document.getElementById("date").value
   }
   fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: {
         "content-type": "application/json"
      },
      body: JSON.stringify(bo)

   }).then(() => {
      Swal.fire({
  title: "Good job!",
  text: "Your order was comfirmed",
  icon: "success"
}).then(()=>{
   window.location.href="invoice.html"
})
   })
      .catch((er) => {
         console.log(er)
      })
    
   }

let or = document.getElementById("price")
or.value='₹'+dta2.price
function calculateprice() {
    
   let per = document.getElementById("persons")
   let pr = parseInt(per.value)
   let pri =parseInt(dta2.price)
   or.value = '₹'+pri*pr
}
 

   function logout(){
      localStorage.clear()
      window.location.href="home.html"
    }
 let dt = document.getElementById("m");

async function s() {
  let f = await fetch("http://localhost:3000/bookings");
  let res = await f.json();
  let invoices=res.map((e)=>{
  return `
      <h1> your order was confirmed</h1>
         <p style="color:red;"> orderid:- gtedfgvdcfyh23f${e.id}</p>
      <div class="invoice-card">
        <!-- LEFT IMAGE -->
           
        <div class="invoice-left" style="
            background: url('${e.img}') no-repeat center center;
            background-size: cover;
            position: relative;
        ">
          <div class="ad-overlay">
            <h2 style="color: white;" >${e.adventure3}</h2>
          </div>
        </div>

        <!-- RIGHT DETAILS -->
        <div class="invoice-right">
          <h1>Booking Invoice</h1>

          <section class="personal-info">
            <h2>Personal Information</h2>
            <p><strong>Name:</strong> ${e.name3}</p>
            <p><strong>Phone:</strong> ${e.phone3}</p>
            <p><strong>Email:</strong> ${e.email3}</p>
            <p><strong>Message:</strong> ${e.message3 || "-"}</p>
          </section>

          <section class="order-info">
            <h2>Order Information</h2>
            <p><strong>Date:</strong> ${e.date3}</p>
            <p><strong>Persons:</strong> ${e.persons3}</p>
            <p><strong>Payment:</strong> ${e.payment3}</p>
            <p><strong>Price:</strong> ${e.price3}</p>
          </section>

          <div class="invoice-buttons">
            <button onclick="h()">Go to Home</button>
            <button onclick="del('${e.id}')">Cancel Order</button>
            <button onclick="edi('${e.id}')">Edit Details</button>
          </div>
        </div>
      </div>
    `
  
  }).join("")

  dt.innerHTML = invoices;
}

function h() { window.location.href = "home.html"; }

function del(id) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      // Only then delete
      fetch(`http://localhost:3000/bookings/${id}`, { method: "DELETE" })
        .then(() => {
          Swal.fire(
            "Deleted!",
            "Your booking has been deleted.",
            "success"
          );
          s(); // Refresh list
          window.location.href="home.html"
        })
        .catch(e => console.log(e));
    }
  });
}
s();

function logout(){
  localStorage.clear()
      window.location.href = 'book.html';
  
}
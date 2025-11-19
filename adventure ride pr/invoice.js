 let dt = document.getElementById("m");

async function s() {
  let f = await fetch("http://localhost:3000/bookings");
  let res = await f.json();
 

  let invoices = 
     `
       
      <h1> your order was confirmed</h1>
         <p style="color:red;"> orderid:- gtedfgvdcfyh23f${res[res.length-1].id}</p>
      <div class="invoice-card">
        <!-- LEFT IMAGE -->
           
        <div class="invoice-left" style="
            background: url('${res[res.length-1].img}') no-repeat center center;
            background-size: cover;
            position: relative;
        ">
          <div class="ad-overlay">
            <h2 style="color: white;" >${res[res.length-1].adventure3}</h2>w
          </div>
        </div>

        <!-- RIGHT DETAILS -->
        <div class="invoice-right">
          <h1>Booking Invoice</h1>

          <section class="personal-info">
            <h2>Personal Information</h2>
            <p><strong>Name:</strong> ${res[res.length-1].name3}</p>
            <p><strong>Phone:</strong> ${res[res.length-1].phone3}</p>
            <p><strong>Email:</strong> ${res[res.length-1].email3}</p>
            <p><strong>Message:</strong> ${res[res.length-1].message3|| "-"}</p>
          </section>

          <section class="order-info">
            <h2>Order Information</h2>
            <p><strong>Date:</strong> ${res[res.length-1].date3}</p>
            <p><strong>Persons:</strong> ${res[res.length-1].persons3}</p>
            <p><strong>Payment:</strong> ${res[res.length-1].payment3}</p>
            <p><strong>Price:</strong> ${res[res.length-1].price3}</p>
          </section>

          <div class="invoice-buttons">
            <button onclick="h()">Go to Home</button>
            <button onclick="del('${res[res.length-1].id}')">Cancel Order</button>
            <button onclick="edi('${res[res.length-1].id}')">Edit Details</button>
          </div>
        </div>
      </div>
    `


  //  await fetch("http://localhost:3000/bookings").then(res=>
  //  res.json()
  //  ).then((data)=>
    
  //  `
  //     <h1> your order was confirmed</h1>
  //        <p style="color:red;"> orderid:- gtedfgvdcfyh23f${data[data.length-1].id}</p>
  //     <div class="invoice-card">
  //       <!-- LEFT IMAGE -->
           
  //       <div class="invoice-left" style="
  //           background: url('${data[data.length-1].name3}') no-repeat center center;
  //           background-size: cover;
  //           position: relative;
  //       ">
  //         <div class="ad-overlay">
  //           <h2 style="color: white;" >${data[data.length-1].name3}</h2>
  //         </div>
  //       </div>

  //       <!-- RIGHT DETAILS -->
  //       <div class="invoice-right">
  //         <h1>Booking Invoice</h1>

  //         <section class="personal-info">
  //           <h2>Personal Information</h2>
  //           <p><strong>Name:</strong> ${e.name3}</p>
  //           <p><strong>Phone:</strong> ${e.phone3}</p>
  //           <p><strong>Email:</strong> ${e.email3}</p>
  //           <p><strong>Message:</strong> ${e.message3 || "-"}</p>
  //         </section>

  //         <section class="order-info">
  //           <h2>Order Information</h2>
  //           <p><strong>Date:</strong> ${e.date3}</p>
  //           <p><strong>Persons:</strong> ${e.persons3}</p>
  //           <p><strong>Payment:</strong> ${e.payment3}</p>
  //           <p><strong>Price:</strong> ${e.price3}</p>
  //         </section>

  //         <div class="invoice-buttons">
  //           <button onclick="h()">Go to Home</button>
  //           <button onclick="del('${e.id}')">Cancel Order</button>
  //           <button onclick="edi('${e.id}')">Edit Details</button>
  //         </div>
  //       </div>
  //     </div>
  //   `
  
  //  )

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


 async function edi(id) {
  let data = await fetch(`http://localhost:3000/bookings/${id}`);
  let res = await data.json();

  let frmdata = `
  <div style="width:600px;margin:40px auto;background:#fff;padding:30px;border-radius:15px;box-shadow:0 0 15px rgba(0,0,0,0.2);font-family:Poppins,sans-serif;">
    <h2 style="text-align:center;color:#c62f2f;margin-bottom:25px;">Edit Your Order Details</h2>

    <label style="font-weight:600;">Order ID</label>
    <input type="text" value="${res.id}" readonly id="id1"
      style="width:100%;padding:10px;margin:6px 0 14px;border:1px solid #ccc;border-radius:8px;background:#f1f1f1;"><br>

    <label style="font-weight:600;">Full Name</label>
    <input type="text" value="${res.name3}" id="name1"
      style="width:100%;padding:10px;margin:6px 0 14px;border:1px solid #ccc;border-radius:8px;"><br>

    <label style="font-weight:600;">Email</label>
    <input type="text" value="${res.email3}" id="email1"
      style="width:100%;padding:10px;margin:6px 0 14px;border:1px solid #ccc;border-radius:8px;"><br>

    <label style="font-weight:600;">Phone</label>
    <input type="text" value="${res.phone3}" id="phone1"
      style="width:100%;padding:10px;margin:6px 0 14px;border:1px solid #ccc;border-radius:8px;"><br>

    <label style="font-weight:600;">Adventure</label>
    <input type="text" value="${res.adventure3}" readonly id="adventure1"
      style="width:100%;padding:10px;margin:6px 0 14px;border:1px solid #ccc;border-radius:8px;background:#f1f1f1;"><br>

    <label style="font-weight:600;">No. of Persons</label>
    <input type="text" value="${res.persons3}" id="persons1"
      style="width:100%;padding:10px;margin:6px 0 14px;border:1px solid #ccc;border-radius:8px;"><br>

    <label style="font-weight:600;">Payment Method</label>
    <input type="text" value="${res.payment3}" id="payment1"
      style="width:100%;padding:10px;margin:6px 0 14px;border:1px solid #ccc;border-radius:8px;"><br>

    <label style="font-weight:600;">Price</label>
    <input type="text" value="${res.price3}" id="price1"
      style="width:100%;padding:10px;margin:6px 0 14px;border:1px solid #ccc;border-radius:8px;"><br>

    <label style="font-weight:600;">Message</label>
    <input type="text" value="${res.message3}" id="message1"
      style="width:100%;padding:10px;margin:6px 0 14px;border:1px solid #ccc;border-radius:8px;"><br>

    <label style="font-weight:600;">Date</label>
    <input type="text" value="${res.date3}" id="date1"
      style="width:100%;padding:10px;margin:6px 0 14px;border:1px solid #ccc;border-radius:8px;"><br>

    <input type="hidden" value="${res.img}" id="img1">

    <button onclick="upda('${res.id}')"
      style="width:100%;background:#c62f2f;color:#fff;padding:12px;border:none;border-radius:10px;font-size:16px;cursor:pointer;margin-top:10px;">
      Update
    </button>
  </div>
  `;

document.getElementById("ad").innerHTML = frmdata;
 
  
}

 



function upda(id) {
    let ne = {
          id: document.getElementById("id1").value,
    name3: document.getElementById("name1").value,
    email3: document.getElementById("email1").value,
    phone3: document.getElementById("phone1").value,
    adventure3: document.getElementById("adventure1").value,
    persons3: document.getElementById("persons1").value,
    payment3: document.getElementById("payment1").value,
    price3: document.getElementById("price1").value,
    message3: document.getElementById("message1").value,
    date3: document.getElementById("date1").value,
    img: document.getElementById("img1").value






    }
    fetch(`http://localhost:3000/bookings/${id}`,{
        method :"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(ne)
    }).then(()=>{
       Swal.fire({
    title: "Are you sure?",
    text: "You won't updtae this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, edit it it!"
  })
    }).then(()=>{
      s(), document.getElementById("ad").innerHTML = ""
    })
    .catch((e)=>console.log(e)
    )
}
s()
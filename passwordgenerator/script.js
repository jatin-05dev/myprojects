 
  // Button Event Listener
  document.getElementById("btn").addEventListener("click", generatePassword);
  // Password Generator Function
  function generatePassword() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";
    const length = 8;  // password length
    let pass = "";
    for (let i = 0; i < length; i++) {
      const idx = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(idx);
    }
    document.getElementById("demo").innerText = pass;
  }
 
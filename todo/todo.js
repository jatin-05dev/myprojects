 let inpe = document.getElementById("inp");
let d = document.getElementById("d");
let oldData = JSON.parse(localStorage.getItem("tododata")) || [];
//  Load saved todos on page load
oldData.forEach(element => {
  let e = document.createElement("li");
  e.textContent = element;

  e.addEventListener("click", () => {
    d.removeChild(e);
    oldData = oldData.filter(item => item !== element);
    localStorage.setItem("tododata", JSON.stringify(oldData));
    
  });

  d.appendChild(e);
});

// Add new todo
function val() {
  let save = inpe.value.trim();
  if (save === "") return;

  // Duplicate check
  if (oldData.includes(save)) {
    alert("This item already exists!");
    inpe.value = "";  
    return;
  }

  // Add to UI
  let m = document.createElement("li");
  m.textContent = save;
  d.appendChild(m);

  // Add to localStorage
  oldData.push(save);
  localStorage.setItem("tododata", JSON.stringify(oldData));

  // Delete on click
  m.addEventListener("click", () => {
    d.removeChild(m);
    oldData = oldData.filter(item => item !== save);
    localStorage.setItem("tododata", JSON.stringify(oldData));
  });

  inpe.value = "";
}
let sp=JSON.parse(localStorage.getItem("tododata"))
 
 
 
function up(){
 
 
 
 for(let i=0;i<sp.length;i++){
   inpe.value=sp[i]   
}
 
 
 

}
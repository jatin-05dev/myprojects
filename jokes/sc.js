     let url = "https://icanhazdadjoke.com/";
    let btn = document.getElementById("c");
    let output = document.getElementById("msin");
    
  async function  frd() {
    try{
      output.innerText = "Fetching joke... 😂";
    let res=await fetch(url,{
      headers: { Accept: "application/json" }
    })
    let dar=await res.json()
    console.log(dar);                 
    output.innerText = dar.joke;
} catch(er){
       output.innerText = er
          output.innerText = "Oops! Failed to load joke 😢";
}
  }
  frd()
      btn.addEventListener("click", frd);



let count=0;
let n=parseInt(Math.random()*100);
document.getElementById("sub").addEventListener("click",()=>
{

    let number=parseFloat(document.getElementById("num").value);
    if(number==n)
    {
         document.getElementById("hint").style.color=" rgb(5, 136, 5)";
        document.getElementById("hint").textContent= "Correct!";
    }
   else if(number<n)
   {
      document.getElementById("hint").style.color=" red ";
     document.getElementById("hint").textContent= "Too low!";
   }
   else if(number>n)
   {
      document.getElementById("hint").style.color=" red";
     document.getElementById("hint").textContent= "Too high!";
   }
    count++;
      document.getElementById("att").textContent=` Attempts = ${count}`;
})

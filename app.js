const btn = document.getElementById("btn");
const heading = document.getElementById("heading");

btn.onclick = () =>{
    if(document.body.style.backgroundColor === "white"){
        document.body.style.backgroundColor= "black";
        btn.textContent = "Switch To light Mode";
        btn.style.backgroundColor= "white";
        btn.style.color = "black";
        heading.style.color = "white";
       
    }
    else{
        document.body.style.backgroundColor= "white";
        btn.textContent = "Switch To Dark Mode";
        btn.style.backgroundColor= "black";
        btn.style.color = "white";
        heading.style.color = "black";

    }
    
}
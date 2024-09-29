// toggle password icon and functionality
let icon=document.querySelector(".pass");
let pass=document.querySelector(".pass_text");


icon.addEventListener('click',()=>{
    if(pass.type=="password"){
        pass.type="text";
        icon.className="pass bx bxs-lock-open-alt"
    }
    else{
        pass.type="password";
        icon.className="pass bx bxs-lock-alt"
        
    }
})

// Sumbit Button

let btn=document.querySelector(".btn");

btn.addEventListener("click",()=>{
    document.querySelector(".wrapper").style.display="none";
    document.querySelector(".wrapper2").style.display="flex";

})


let ani=document.querySelector(".wrapper2");
ani.addEventListener("click",()=>{
    document.querySelector(".wrapper").style.display="block";
    document.querySelector(".wrapper2").style.display="none";
})


let body= document.querySelector("body")
let btn1= document.getElementById("btn-1");
let btn2=document.getElementById("btn-2");
let copyCode = document.querySelector(".copyCode");

let rgb1='#004773';
let rgb2='#54d542';

const hexValues=()=>{
    let myHexaValues="0123456789abcdef";
    let colors="#";
    for(let i=0; i<6; i++){
       colors=colors+ myHexaValues[Math.floor(Math.random()*16)]
    }
    
    return colors;    
}

const handleButton1=()=>{
     rgb1=hexValues();
    btn1.innerText=rgb1;
    body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`;
    copyCode.innerHTML=`background-Image:linear-gradient(to right top,${rgb1},${rgb2});`;
}

const handleButton2=()=>{
     rgb2=hexValues();
    btn2.innerText=rgb2;
    body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`;

    copyCode.innerHTML=`background-Image:linear-gradient(to right top,${rgb1},${rgb2});`
}

btn1.addEventListener("click",handleButton1);  
btn2.addEventListener("click",handleButton2); 
copyCode.addEventListener("click",()=>{
 // Copy the text inside the text field
navigator.clipboard.writeText(copyCode.innerText);
alert("Content copied to clipboard ")
})
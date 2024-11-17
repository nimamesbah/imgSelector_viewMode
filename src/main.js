const imgBtn1 = document.getElementById("imgBtn1");
const imgBtn2 = document.getElementById("imgBtn2");
const imgBtn3 = document.getElementById("imgBtn3");
const imgBtn4 = document.getElementById("imgBtn4");
const imgMain = document.getElementById("imgMain");
const rotateSection = document.querySelector(".duration-300")
const modeSection = document.querySelector(".relative")
const button = document.querySelector(".absolute")

function borderImg1() {
    
    imgBtn1.style=("border-width:3px;border-color:black;");
    imgBtn2.style=("border-width:1px;");
    imgBtn3.style=("border-width:1px;");
    imgBtn4.style=("border-width:1px;");
    const imgSrc1= imgBtn1.getAttribute("src");
    imgMain.setAttribute("src",imgSrc1);
    
    
}
function borderImg2() {
    
    imgBtn1.style=("border-width:1px;");
    imgBtn2.style=("border-width:3px;border-color:black;");
    imgBtn3.style=("border-width:1px;");
    imgBtn4.style=("border-width:1px;");
    const imgSrc2= imgBtn2.getAttribute("src");
    imgMain.setAttribute("src",imgSrc2);
    
}
function borderImg3() {
    
    imgBtn1.style=("border-width:1px;");
    imgBtn2.style=("border-width:1px;");
    imgBtn3.style=("border-width:3px;border-color:black;");
    imgBtn4.style=("border-width:1px;");
    const imgSrc3= imgBtn3.getAttribute("src");
    imgMain.setAttribute("src",imgSrc3);
    
}
function borderImg4() {
    
    imgBtn1.style=("border-width:1px;");
    imgBtn2.style=("border-width:1px;");
    imgBtn3.style=("border-width:1px;");
    imgBtn4.style=("border-width:3px;border-color:black;");
    const imgSrc4= imgBtn4.getAttribute("src");
    imgMain.setAttribute("src",imgSrc4);
    
}
function switchMode(){
    rotateSection.classList.toggle("rotate-180")
    document.body.classList.toggle("bg-[#007acc]")
    modeSection.classList.toggle("border-white")
    button.classList.toggle("text-white")
}


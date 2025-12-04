function add(){
    let elements=document.querySelector(".elements")
    
    let newElement=document.createElement("h1");
    newElement.classList.add("text")
    newElement.textContent="Bu yangi h1 elementi";
    
    let red=document.querySelector(".red").value
    let green=document.querySelector(".green").value
    let blue=document.querySelector(".blue").value
    
    newElement.style.backgroundColor=`rgb(${red}, ${green}, ${blue})`;
    
    let width=document.querySelector(".width").value
    newElement.style.width=`${width}%`;
    
    elements.appendChild(newElement)
}

const remove=()=>{
    let text=document.querySelector(".text");
    text.remove();
}
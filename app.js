let run = ()=>{
    let son=document.querySelector("#son").value;
    let box1=document.querySelector(".box-1");
    let box2=document.querySelector(".box-2");
    let box3=document.querySelector(".box-3");
    
    box1.textContent=Math.floor(Number(son)/100);
    box2.textContent=Math.floor((Number(son)%100)/10);
    box3.textContent=Number(son)%10;
}
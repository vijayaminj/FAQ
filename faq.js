const main=document.querySelectorAll(".main");

for(let box of main){
    const question=box.querySelector(".question");
    question.addEventListener("click",()=>{ 
        const answer=box.querySelector(".answer"); 
        answer.classList.toggle("active");        
    });
   
}

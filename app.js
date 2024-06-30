let modebtn=document.querySelector("#mode");
let bdy=document.querySelector("body");

modebtn.addEventListener("click",()=>{
    if(modebtn.innerText=="Dark"){
        modebtn.innerText="light";
        bdy.style.backgroundColor="black";
        bdy.style.color="white";
       
    }
    else if(modebtn.innerText=="light"){
        bdy.style.backgroundColor="white";
        modebtn.innerText="Dark";
        bdy.style.color="black";
    }
    
  
});

let rs=document.querySelector("#rs");
let vk=document.querySelector("#vk");
let hp=document.querySelector("#hp");
let countrs=0;
let countvk=0;
let counthp=0;
let img=document.querySelector("#img");
let change=document.querySelector("#photo");

change.addEventListener("click", ()=>{
    let no=Math.floor(Math.random()*3)+1;
    if(no == 1){
      img.src="rohit-sharma-64-2024-06-0461ff9726eee7491d97fa28a37c9966-16x9.jpg";
      countrs++;
      rs.innerText=countrs;
    }else if(no ==2){
       img.src="OIP.jpeg";
       countvk++;
       vk.innerText=countvk;
    }
    else if(no ==3){
        img.src="Hardik Pandya Gujarat Titans.jpg";
        counthp++;
      hp.innerText=counthp;
    }


    if(countrs >countvk){
        if(countrs >counthp){
            rs.style.color="red";


            if(modebtn.innerText=="Dark"){
                hp.style.color="black";
                vk.style.color="black";
            }else{
                hp.style.color="white";
                vk.style.color="white";
            }


        }else{
            hp.style.color="red";


            if(modebtn.innerText=="Dark"){
                rs.style.color="black";
                vk.style.color="black";
            }else{
                rs.style.color="white";
                vk.style.color="white";
            }


        }
    }else {
        if(countvk > counthp){
        vk.style.color="red";


        if(modebtn.innerText=="Dark"){
            rs.style.color="balck";
            hp.style.color="balck";
        }else{
            rs.style.color="white";
            hp.style.color="white";
        }


        
        
    }else{
        hp.style.color="red";


        if(modebtn.innerText=="Dark"){
            rs.style.color="balck";
            vk.style.color="balck";
        }else{
            rs.style.color="white";
            vk.style.color="white";
        }


    }}
    res.innerText="";

});

let res=document.querySelector(".res");
let stop=document.querySelector(".stop");

stop.addEventListener("click", ()=>{
    //check high score
    let high;
    if(countrs>countvk){
        if(countrs>counthp){
            high=countrs;
        }else{
            high=counthp;
        }
    }
    else {
        if(countvk>counthp){
            high=countvk;
        }else{
            high=counthp;
        }
    }
    //tracking highest score
    let par;
    if(high == countrs){
        par=rs.parentElement.innerText;
        res.innerText=par;
    }else  if(high == countvk){
        par=vk.parentElement.innerText;
        res.innerText=par;
    } else  {
        par=hp.parentElement.innerText;
        res.innerText=par;
    }
    counthp=countrs=countvk=0;
    rs.innerText=countrs;
    vk.innerText=countvk;
    hp.innerText=counthp;
    if(counthp==0&&countrs==0 && countvk==0){
       // alert("start with change button")
        if(modebtn.innerText=="Dark"){
            rs.style.color="balck";
            vk.style.color="balck";
            hp.style.color="balck";
        }else{
            rs.style.color="white";
            vk.style.color="white";
            hp.style.color="white";
        }

    }
});
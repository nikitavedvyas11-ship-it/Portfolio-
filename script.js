//Selecting Buttons
const exploreBtn=document.querySelector("#exploreBtn");
const contactBtn=document.querySelector("#contactBtn");
const topBtn=document.querySelector("#topBtn");

//Selecting Sections
const projects=document.querySelector("#projects");
const contact=document.querySelector("#contact");

//Explore Work Button
exploreBtn.addEventListener("click",function(){
    projects.scrollIntoView({
        behavior:"smooth"
    });
});

//Contact Button
contactBtn.addEventListener("click",function(){
    contact.scrollIntoView({
        behavior:"smooth"
    });
});

//Scroll to top button show
window.addEventListener("scroll",function(){
    if(this.window.scrollY>300){
        topBtn.style.display="block";
    }
    else{
        topBtn.style.display="none";
    }
});

//Top button click
topBtn.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});
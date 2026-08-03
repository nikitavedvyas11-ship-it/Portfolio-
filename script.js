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

//contact-form validation
const form=document.querySelector(".contact-form")
form.addEventListener("submit",function(e){
    e.preventDefault();
    const name=form.querySelector('input[type="text"]').value.trim();
    const email=form.querySelector('input[type="email"]').value.trim();
    const message=form.querySelector("textarea").value.trim();
    if(name===""||email===""||message===""){
        alert("Please fill out all fields.")
        return;
    }
    alert("Thank you! Your message has been submitted successfully.");
    form.reset();
});

//Menu Toogle
const menuToggle=document.querySelector(".menu-toggle");
const navMenu=document.querySelector("nav ul");
menuToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("show");
})
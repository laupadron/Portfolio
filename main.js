const hiddenElements= document.querySelectorAll(".hidden")
const links= document.querySelectorAll(".link")

const observer= new IntersectionObserver((entries)=>{
 entries.forEach((entry)=>{
  if(entry.isIntersecting){
   entry.target.classList.add("show")
   links.forEach((link)=>{
    const href =link.getAttribute("href").split("#")[1];
    const id = entry.target.id;
    if(href=== id){
     link.classList.add("link-active");
    }else{
     link.classList.remove("link-active");
    }
   })
  }else{
   entry.target.classList.remove("show")
  }
 })
},{
 threshold:0.5,
})

hiddenElements.forEach((element)=> observer.observe(element));
// Menu
const iconShowMenu =document.querySelector(".iconShowMenu");
const navbarMenu=document.querySelector(".navbar-menu");
const iconSun=document.querySelector('.icon-two')

iconShowMenu.addEventListener('click', ()=>{
 if (navbarMenu.classList.toggle('navbar-menu--show'))
  return iconShowMenu.classList.add('bxs-x-circle');
  iconShowMenu.classList.remove('bxs-x-circle');
 
})

// dark mode
const iconTheme= document.querySelector(".icon-theme");

iconTheme.addEventListener("click",()=>{
if(document.body.classList.toggle("darkTheme"))
return iconTheme.textContent="☼";
iconTheme.textContent="☽"


})

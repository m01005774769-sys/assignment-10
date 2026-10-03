let navLinks = document.querySelectorAll(".nav-links a")
let sections = document.querySelectorAll("section")

window.addEventListener("scroll",function(){
    let top = window.scrollY
    sections.forEach(section =>{
        let offset = section.offsetTop;
        let height = section.offsetHeight
        let id = section.getAttribute("id")
        if(top >= offset && top < offset+height){
            navLinks.forEach(link => {
                link.classList.remove("active")
                if(link.getAttribute("href").includes(id)){
                    link.classList.add("active")
                }
            } )
        }
    })
})



let button = document.getElementById("theme-toggle-button")
button.addEventListener("click",function(){
    if (document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove("dark")
    }else{
        document.documentElement.classList.add("dark")
    }
})


let scrollTop = document.getElementById("scroll-to-top")
scrollTop.addEventListener("click",function(){
    window.scrollY == 0
})




function filtterGroup (groupClass){
    let divs = document.querySelectorAll(".portfolio-item")
    divs.forEach (div=>{
        if (groupClass == "all"){
            div.classList.remove("hidden")
       
        }else{
            divs.forEach (div=>{
                div.classList.add("hidden")
                 
            })
            let selectButs = document.querySelectorAll('.'+ groupClass)
            selectButs.forEach(but=>{
                but.classList.remove("hidden")
            })
        }
    })
}


let button0 = document.getElementById("button0")
let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let button3 = document.getElementById("button3")
let show1 = document.querySelector(".show1")
let show2 = document.querySelector(".show2")
let show3 = document.querySelector(".show3")

button0.addEventListener("click",function(){
show1.classList.remove("hidden")
show2.classList.remove("hidden")
show3.classList.remove("hidden")
})

button1.addEventListener("click",function(){
show1.classList.add("hidden")
show2.classList.remove("hidden")
})

button2.addEventListener("click",function(){
show1.classList.add("hidden")    
show2.classList.add("hidden")    
show3.classList.remove("hidden")

})

button3.addEventListener("click",function(){
show1.classList.add("hidden")
show2.classList.add("hidden")
show3.classList.add("hidden")
})



let nextTestimonial = document.getElementById("next-testimonial")
let prevTestimonial = document.getElementById("prev-testimonial")
let show4 = document.querySelector(".show4")

nextTestimonial.addEventListener("click",function(){
    if (!show1.classList.contains("hidden")){
        show1.classList.add("hidden")
        show2.classList.remove("hidden")
    }else if(!show2.classList.contains("hidden")){
        show2.classList.add("hidden")
        show3.classList.remove("hidden")
    }else if(!show3.classList.contains("hidden")){
        show3.classList.add("hidden")
    }else if(!show4.classList.contains("hidden")){
        show1.classList.remove("hidden")
        show2.classList.remove("hidden")
        show3.classList.remove("hidden")
    }
})


// let nextTestimonial = document.getElementById("next-testimonial")
// let prevTestimonial = document.getElementById("prev-testimonial")
// let shows = document.querySelectorAll(".testimonial-card")
// let currentIndex = 0

// nextTestimonial.addEventListener("click",function(){
//     if(currentIndex == 4){
//         currentIndex = 0
//     }
//     currentIndex++
//     handelDisplay()
// })

// function handelDisplay(){
//     for(let i = 0 ; i < shows.length ; i++){
//         if(i <= currentIndex){
//             shows[i].classList.add("hidden")
            
//         }else{
//             shows[i].classList.remove("hidden")
//         }
//     }
// }

let rockButton = document.getElementById("scroll-to-top")
window.addEventListener("scroll",function(){
if (window.scrollY > 300){
    rockButton.classList.remove("opacity-0","invisible")
}else if(window.scrollY < 300){
    rockButton.classList.add("opacity-0","invisible")
}
})
rockButton.addEventListener("click",()=>{
    window.scrollTo({
        top:0
    })
})



let sideButton = document.getElementById("settings-toggle")
let settingsSidebar = document.getElementById("settings-sidebar")
sideButton.addEventListener("click",close)

let closeBtn = document.getElementById("close-settings")

closeBtn.addEventListener("click",close)

function close(){
    settingsSidebar.classList.toggle("translate-x-full")
    settingsSidebar.classList.toggle("translate-x-0")
    if(settingsSidebar.classList.contains == "translate-x-full"){
        settingsSidebar.setAttribute("aria-hidden","true")
    }else{
        settingsSidebar.setAttribute("aria-hidden","false")
    }
}

let changBtn1 = document.getElementById("chang-btn1")
changBtn1.addEventListener("click",function(){
    changeColor("#1d4ed8")
})
let changBtn2 = document.getElementById("chang-btn2")
changBtn2.addEventListener("click",function(){
    changeColor("#008cd1")
})
let changBtn3 = document.getElementById("chang-btn3")
changBtn3.addEventListener("click",function(){
    changeColor("#009675")
})
let changBtn4 = document.getElementById("chang-btn4")
changBtn4.addEventListener("click",function(){
    changeColor("#f19100")
})
let changBtn5 = document.getElementById("chang-btn5")
changBtn5.addEventListener("click",function(){
    changeColor("#e94e51")
})
let changBtn6 = document.getElementById("chang-btn6")
changBtn6.addEventListener("click",function(){
    changeColor("#db335c")
})


function changeColor(color){
   document.documentElement.style.setProperty("--color-primary",color)
   document.documentElement.style.setProperty("--color-secondary",color) 
}

let resetSettings = document.getElementById("reset-settings")
resetSettings.addEventListener("click",function(){
     document.documentElement.style.setProperty("--color-primary","#008cd1")
   document.documentElement.style.setProperty("--color-secondary","#7c3aed") 
   HandelFont ("font-tajawal")
})

let alexFont = document.getElementById("alex")

alexFont.addEventListener("click",function(){
     HandelFont ("font-alexandria")
     let check1 = document.getElementById("check1")
     check1.classList.replace("opacity-0","opacity-1")
      check3.classList.replace("opacity-1","opacity-0")
      check2.classList.replace("opacity-1","opacity-0")
})
let cairoFont = document.getElementById("cairo")

cairoFont.addEventListener("click",function(){
    HandelFont ("font-cairo")
     let check3 = document.getElementById("check3")
     check2.classList.replace("opacity-1","opacity-0")
     check1.classList.replace("opacity-1","opacity-0")
     check3.classList.replace("opacity-0","opacity-1")
})
let tajwalFont = document.getElementById("tajwal")

tajwalFont.addEventListener("click",function(){
    HandelFont ("font-tajawal")
     let check2 = document.getElementById("check2")
     check2.classList.replace("opacity-0","opacity-1")
     check3.classList.replace("opacity-1","opacity-0")
     check1.classList.replace("opacity-1","opacity-0")
})


function HandelFont (index){
    let classNames = ["font-tajawal","font-cairo","font-alexandria"]
    classNames.forEach(className =>{
        document.body.classList.remove(className)
    })
     document.body.classList.add(index)
    }
    
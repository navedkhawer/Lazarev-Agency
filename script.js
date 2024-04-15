function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
locomotiveAnimation()
function navAnimation() {
  var nav = document.querySelector(".nav-part2");
  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();
    tl.to(".nav-bottom", {
      height: "27vh",
    });
    tl.to(".nav-part2 h5", {
      duration: 0.03,
      opacity: 1,

      display:"block"
    });
    tl.to(".nav-part2 h5 span", {
      y: 0,
      duration: 0.3,
      stagger: 0.03,
      // stagger:{
      //     amount:0.6
      // }
    });
  });
  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();
    tl.to(".nav-part2 h5 span", {
      y: 25,
      duration: 0.1,
      // stagger:0.01,
      stagger: {
        amount: 0.3,
        height:"0",
        // display:"none"

      },
    });
    tl.to(".nav-part2 h5", {
      duration: 0.2,
      opacity: 0,
      display:"none"
      
    });
    tl.to(".nav-bottom", {
      duration: 0.3,
      height: "0",

    });
  });
}
navAnimation()
function page2Animation() {
  var rightElems = document.querySelectorAll(".right-elem");
  // console.log(rightelems)
  rightElems.forEach(function (elem) {
    // console.log(elem)
    elem.addEventListener("mouseenter", function () {
      // console.log(elem.getBoundingClientRect())
      // console.log("hello")
      //console.log(elem.childNodes[5])
      // elem.childNodes[5].style.opacity = 1
      // elem.childNodes[5].style.scale = 1
      gsap.to(elem.childNodes[5], {
        opacity: 1,
        scale: 1,
      });
    });
    elem.addEventListener("mouseleave", function () {
      // console.log("not hello")
      // elem.childNodes[5].style.opacity = 0
      // elem.childNodes[5].style.scale = 0

      gsap.to(elem.childNodes[5], {
        opacity: 0,
        scale: 0,
      });
    });
    elem.addEventListener("mousemove", function (dets) {
      gsap.to(elem.childNodes[5], {
        x: dets.x - elem.getBoundingClientRect().x - 50,
        y: dets.y - elem.getBoundingClientRect().y ,
      });
    });
  });

  //elem basically 1 div hai or jab loop chal rahi hai ti har 1 div apna apna time pr elem ban raha hai
  //Div ik rectangular shape banany ka kaam krta hai or container ka tor pr kaam krta hai
  //Div is used as a container ,to contain different things , to sections in a website , to make division in a website .

  // or hum na div ka through jo rectangular banaya hai hum is ka dimensions check kr sakta han

  //getboundingclientreact kesi bhi elements ka ya kesi bhi div ka jitna bhi dimension hota han
  //wo x sa khana pr hai or y sa kahan pr hai mera element ki height kia hai width kia hai sun kush ap detais mai check kr
  //sakta ho
}
page2Animation()

function page3Animation(){
    var page3Center = document.querySelector(".page3-center")
var video = document.querySelector(".page3 video")
var nav = document.querySelector("nav")
video.style.zIndex = "100";

page3Center.addEventListener("click",function(){
    // if (video.requestFullscreen) {
    //     video.requestFullscreen();
    //   } else if (video.mozRequestFullScreen) { /* Firefox */
    //     video.mozRequestFullScreen();
    //   } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    //     video.webkitRequestFullscreen();
    //   } else if (video.msRequestFullscreen) { /* IE/Edge */
    //     video.msRequestFullscreen();
    //   }


  video.play();
  gsap.to(video,{
    transform: "scaleX(1) scaleY(1)",
    opacity:1,
    borderRadius:0,
    // ease: "power2.out"
    duration: 1,
    ease: "ease"
  })
  gsap.to("nav",{
    y:-100,
  })
})
video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
      transform: "scaleX(0.7) scaleY(0)",
      opacity:0,
      borderRadius:"30px",
      duration: 0.5,
      ease: "ease"
    //   ease: "power2.in"
    
    })
    gsap.to("nav",{
        y:0,
      })
  })
}
page3Animation()

function page7Animation(){
    var sections = document.querySelectorAll(".sec-right")
sections.forEach(function(elems){
    elems.addEventListener("mouseenter",function(){
        elems.childNodes[3].style.opacity = 1
        elems.childNodes[3].play()
    })
    elems.addEventListener("mouseleave",function(){
        elems.childNodes[3].style.opacity = 0
        elems.childNodes[3].load()  // load basically use hota hai kha jahan ap na mouse enter kia tha video pr agar video 5sec ki play hi ho jay but jay ap mouse leave karain to agarin mouse enter krna pr video again 0sec sa he start ho ge
    })
})

var sections = document.querySelectorAll(".sec-right")
sections.forEach(function(elems){
    elems.addEventListener("mouseenter",function(){
        gsap.to(elems.childNodes[5], {
            opacity:1,
            scale:1,

        })
    });
    elems.addEventListener("mouseleave",function(){
        gsap.to(elems.childNodes[5], {
            opacity:0,
            scale:0,

        })
    });
    elems.addEventListener("mousemove",function(dets){
        gsap.to(elems.childNodes[5],{
            x: dets.x - elems.getBoundingClientRect().x -50,
            y: dets.y - elems.getBoundingClientRect().y ,
        })
    })

})
}
page7Animation()

function page7AnimationSec2(){
    var sec2left = document.querySelectorAll(".sec2imgvideo")
var sec2right = document.querySelectorAll(".sec2imgvideo1")
var par1 = document.querySelector(".sec2-left p")
var par2 = document.querySelector(".sec2-right p")

sec2left.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        // console.log(elem.childNodes)
        // elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].play()
        par1.style.display = "none"
        gsap.to(".sec2imgvideo",{
            height:"83%",
            ease:"ease"
        })

    })
    elem.addEventListener("mouseleave",function(){
        // console.log(elem.childNodes)
        // elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].load()
        // par1.style.display = "block"

        gsap.to(".sec2imgvideo",{
            height:"50%",
            onComplete: function() {
                gsap.to(".sec2-left p", {
                    display: 'block',
                    delay: 0.2 // Ensure the property is camelCased and wrapped in quotes.
                });
            }
        })

    })

})
sec2right.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        // console.log(elem.childNodes)
        // elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].play()
        par2.style.display = "none"
        gsap.to(".sec2imgvideo1",{
            height:"83%"
        })

    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].play()
        // par2.style.display = "none"
        gsap.to(".sec2imgvideo1",{
            height:"50%",
            onComplete: function() {
                gsap.to(".sec2-right p", {
                    display: 'block',
                    delay: 0.2,// Ensure the property is camelCased and wrapped in quotes.
                });
            }
        })

    })

})
}
page7AnimationSec2()

function Page8Arrow(){
    var rotate = document.querySelector("summary")
var icon = document.querySelector(".summary-t i")
var flag = 0
rotate.addEventListener("click", function(){
    if (flag === 0){
        icon.style.transform = "rotate(180deg)";
        flag = 1;
    } else {
        icon.style.transform = "rotate(0deg)";
        flag = 0;
    }
});
}
Page8Arrow()


function page9Animation(){
    var part2 = document.querySelector(".btm9-part2 h4:nth-child(2)")
part2.style.transform = "translateX(0%)"
var part2 = document.querySelector(".btm9-part2 h4:nth-child(3)")
part2.style.transform = "translateX(10%)"
var part2 = document.querySelector(".btm9-part2 h4:nth-child(4)")
part2.style.transform = "translateX(20%)"
var part2 = document.querySelector(".btm9-part2 h4:nth-child(5)")
part2.style.transform = "translateX(30%)"
var part2 = document.querySelector(".btm9-part2 h4:nth-child(6)")
part2.style.transform = "translateX(40%)"
var part2 = document.querySelector(".btm9-part2 h4:nth-child(7)")
part2.style.transform = "translateX(50%)"
gsap.from(".btm9-part2 h4",{
    x:0,
    duration:1,
    scrollTrigger:{
        trigger:".btm9-part2",
        scroller:".main",
        // markers:true,
        start:"top 80%",
        end:"top -30%",
        scrub:true
    }
})
    var part3 = document.querySelector(".btm9-part3 h4:nth-child(2)")
part3.style.transform = "translateX(0%)"
var part3 = document.querySelector(".btm9-part3 h4:nth-child(3)")
part3.style.transform = "translateX(20%)"
gsap.from(".btm9-part3 h4",{
    x:0,
    duration:1,
    scrollTrigger:{
    trigger:".btm9-part2",
    scroller:".main",
    // markers:true,
    start:"top 80%",
    end:"top -30%",
    scrub:true
   }
})
var part4 = document.querySelector(".btm9-part4")
part4.style.borderRightColor = "#dadada";
var part4 = document.querySelector(".btm9-part4 h4:nth-child(2)")
part4.style.transform = "translateX(0%)"
var part4 = document.querySelector(".btm9-part4 h4:nth-child(3)")
part4.style.transform = "translateX(15%)"
var part4 = document.querySelector(".btm9-part4 h4:nth-child(4)")
part4.style.transform = "translateX(30%)"
gsap.from(".btm9-part4 h4",{
    x:0,
    duration:1,
    scrollTrigger:{
        trigger:".btm9-part4",
        scroller:".main",
        // markers:true,
        start:"top 80%",
        end:"top -30%",
        scrub:true
    }
})
}
page9Animation()

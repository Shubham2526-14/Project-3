
// smooth scroller


const lenis = new Lenis({
  smooth: 10,
  direction: 'vertical',
  gestureOrientation: 'vertical',
  smoothTouch: 5,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);








gsap.to(".hero-section", {
    scale:0.6,
    y:-100, 

    // filter: "blur(20px)",
    scrollTrigger:{
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 2,

    }
})




gsap.to(".wasim-img", {
    "--before-left": "-10%",
    "--after-right": "-10%",
    backgroundPositionX: "50%",  // Move horizontally
    backgroundPositionY: "50%",  
    scale: 1.2,
    y: 150,
    // ease: "power4.out",
    scrollTrigger: {
        trigger: ".second-section",
        start: "top 60%",
        end: "bottom 90%",
        scrub: 2,
    }
});






var hidden = document.getElementById("hiddenpara");
var words = hidden.innerHTML.trim().split(" ");

hidden.innerHTML = ""; 

words.forEach((word, index) => {
    var wordSpan = `<span class="word">${word.split("").map(char => `<span class='singleText'>${char}</span>`).join("")}</span>`;
    hidden.innerHTML += wordSpan;

    if (index < words.length - 1) {
        hidden.innerHTML += `<span class="space">&nbsp;</span>`;
    }
});

var singleText = document.querySelectorAll(".singleText");

gsap.to(singleText, {
    color: "#262626",
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".about-me",
        start: "top 80%",
        end: "bottom 50%",
        scrub: true,
        // markers: true
    }
});


const heroSection = document.querySelector('.hero-section');
const background = document.querySelector('.background');

heroSection.addEventListener('mousemove', (e) => {
  const { width, height } = heroSection.getBoundingClientRect();
  const offsetX = (e.clientX / width - 0.5) * 100;  // Adjust for stronger movement
  const offsetY = (e.clientY / height - 0.5) * 100;

  gsap.to(background, {
    duration: 0.5,
    x: offsetX,
    y: offsetY,
    ease: 'power2.out'
  });
});


gsap.to(background,{
  y: -200,
  opacity: 0.3,
  scrollTrigger:{
      trigger: "body",
      start: "top top",
      end: "600px top",
      scrub: 1,
      // markers: true
  }
})







/* services */
let service = gsap.matchMedia();
let tl = gsap.timeline({

  scrollTrigger: {
            trigger: ".services-section",
            // markers: true,
            start: "top top",
            end: "bottom -100%",
            scrub: 0.5,
            pin: true,
          
          }
        });
let tc = gsap.timeline({

scrollTrigger: {
          trigger: ".services-section2",
          // markers: true,
          start: "top top",
          end: "bottom -100%",
          scrub: 0.5,
          pin: true,
                  
        }
      });
let td = gsap.timeline({

scrollTrigger: {
          trigger: ".services-section3",
          // markers: true,
          start: "top top",
          end: "bottom -100%",
          scrub: 0.5,
          pin: true,
                
        }
      });

service.add("(min-width: 1101px) or (max-height: 999px)", () => {

gsap.from(".first_service",{
    x: -200,
    opacity: 0,
    scrollTrigger:{
      trigger: ".services-section",
      start: "top center",
      end: "bottom 80%",
      scrub: 1,
      // markers: true,
    }
})



          
  tl.to(".scroll1", { 
    y: 0, 
    duration: 1, 
    rotate: -2
})
  .to(".scroll2", { 
    y: 0, 
    duration: 1,
    rotate: 3,
})
  .to(".scroll3", {
     y: 0, 
     duration:1,
     rotate: -2
    });



    
    // services 2


    
    gsap.from(".second_service",{
      x: -200,
      opacity: 0,
      scrollTrigger:{
        trigger: ".services-section2",
        start: "top center",
        end: "bottom 80%",
        scrub: 1,
        // markers: true,
      }
  })    
        
tc.to(".scroll4", { 
  y: 0, 
  duration: 1, 
  rotate: -2
})
.to(".scroll5", { 
  y: 0, 
  duration: 1,
  rotate: 3,
})
.to(".scroll6", {
   y: 0, 
   duration:1,
   rotate: -2
  });








    //  services 3



    gsap.from(".third_service",{
      x: -200,
      opacity: 0,
      scrollTrigger:{
        trigger: ".services-section3",
        start: "top center",
        end: "bottom 80%",
        scrub: 1,
        // markers: true,
      }
  })    




        
td.to(".scroll7", { 
  y: 0, 
  duration: 1, 
  rotate: -2
})
.to(".scroll8", { 
  y: 0, 
  duration: 1,
  rotate: 3,
})
.to(".scroll9", {
   y: 0, 
   duration:1,
   rotate: -2
  });

});



  service.add("(max-width: 1100px) and (min-height: 1020px )", ()=> {
  

    tl.to(".scroll1", { 
      y: -200, 
      duration: 1, 
      rotate: -2
  })
    .to(".scroll2", { 
      y: 0, 
      duration: 1,
      rotate: 3,
  })
    .to(".scroll3", {
       y: 200, 
       duration:1,
       rotate: -2
      });






      tc.to(".scroll4", { 
        y: -200, 
        duration: 1, 
        rotate: -2
      })
      .to(".scroll5", { 
        y: 0, 
        duration: 1,
        rotate: 3,
      })
      .to(".scroll6", {
         y: 200, 
         duration:1,
         rotate: -2
        });



        td.to(".scroll7", { 
          y: -200, 
          duration: 1, 
          rotate: -2
        })
        .to(".scroll8", { 
          y: 0, 
          duration: 1,
          rotate: 3,
        })
        .to(".scroll9", {
           y: 200, 
           duration:1,
           rotate: -2
          });
      
  
  })




      /* servicesbutton */


    document.addEventListener("DOMContentLoaded", function () {
        const button = document.querySelector(".servicesbutton");

        button.addEventListener("mousemove", function (e) {
            const { left, top, width, height } = button.getBoundingClientRect();
            const x = e.clientX - (left + width / 2);
            const y = e.clientY - (top + height / 2);

            gsap.to(button, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: "power2.out",
            });
        });

        button.addEventListener("mouseleave", function () {
            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.3,
                ease: "power2.out",
            });
        });
    });





    
    // <!-- featured section -->


   
  


    
    
    
    let mm = gsap.matchMedia();
    
 mm.add("(min-width: 820px)", () => {
   
   var imgg = document.querySelectorAll(".img");

   
   imgg.forEach((e)=>{
  gsap.to(e, {
    x: "500px", 
    // objectPosition: "-100% 50%",
    // boxShadow: "30px 0px 10px black",
    scrollTrigger:{
      trigger: ".featured-section",
      start: "top top",
      end: "4000 top",
      scrub: 2,
      // markers: true,
    }
  })
})



gsap.to(".featured-section", {
  x: "-200vw",
  scrollTrigger:{
      trigger: ".featured-section",
      start: "top top",
      end: "4000 top",
      scrub: 2,
      pin: true,
      // markers: true,

  }
})

})



mm.add("(max-width: 820px)", () => {
gsap.to(".featured-section", {
  x: "-200vw",
  scrollTrigger:{
      trigger: ".featured-section",
      start: "top top",
      end: "3000 top",
      scrub: 0.1,
      pin: true,
      // markers: true,

  }
})


    
})







    














  
    
  

    
    




function ishacircle() {
  window.addEventListener("mousemove", function(dets) {
      document.querySelector("#minicircle").style.left = `${dets.clientX}px`;
      document.querySelector("#minicircle").style.top = `${dets.clientY}px`;
  });
}


function firstpage(){
    var tl = gsap.timeline();
    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: "expo" // Corrected easing function
    });
      tl.to(".boundingelem", {
        y: 0,
        ease: "expo",
        duration: 2, 
        delay: -1,
        stagger: .2
      });
      tl.from("#herofooter", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: "expo" // Corrected easing function
    });
}


firstpage();
ishacircle();


document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var diffi = 0;
    elem.addEventListener("mouseleave", function(dets){
     
      gsap.to(elem.querySelector("img"),{
         opacity: 0,
         ease: Power3,
         duration: 0.5,
      });
   });

    elem.addEventListener("mousemove", function(dets){
       var diff = dets.clientY - elem.getBoundingClientRect().top;
       diffi = dets.clientX - rotate;
       rotate = dets.clientX;  
      
       gsap.to(elem.querySelector("img"),{
          opacity: 1,
          ease: Power3,
          top: diff,
          left: dets.clientX,
          rotate:  gsap.utils.clamp(-20,20, diffi * 0.8),
       });
    });
});
   

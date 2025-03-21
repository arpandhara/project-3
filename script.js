const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});
gsap.from(".atags", {
    stagger: .2,
    y: 10,
    opacity: 0,
    duration: .5,
    ease: Power1
})
Shery.textAnimate(".headings h1", {
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});
gsap.from(".anim2" , {
    stagger:.2,
    y:70,
    opacity:0,
    ease: Expo,
    duration:1
})
Shery.imageEffect(".imgtext img" , {
    style : 3 ,
    config : {"uFrequencyX":{"value":4.58,"range":[0,100]},"uFrequencyY":{"value":6.87,"range":[0,100]},"uFrequencyZ":{"value":12.98,"range":[0,100]},"geoVertex":{"range":[1,64],"value":32},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":0.75},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0.13,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.73,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
})
Shery.imageEffect(".imgff img" , {
    style : 5 ,
    config : {"a":{"value":3.44,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0.15,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.7,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
})
Shery.textAnimate(".sustain h2" , {
    style: 1,
    y: 10,
    delay: 0,
    duration: 1.5,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
})
Shery.imageEffect(".bimg",{
  style : 5,
  gooey :  true ,
  config : {"a":{"value":0.92,"range":[0,30]},"b":{"value":-0.95,"range":[-1,1]},"zindex":{"value":"999","range":[-9999999,9999999]},"aspect":{"value":2.1762707861132924},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0.15,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.198652,"range":[0,2],"_gsap":{"id":45}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
})
var newvideo = document.querySelector("#future video");
document.querySelector("#ftext button").addEventListener("mouseover" , function(){
    gsap.to("#future video" , {
        opacity : 1,
        duration : 1,
        ease : Power4
    })
})
document.querySelector("#ftext button").addEventListener("mouseleave" , function(){
    gsap.to("#future video" , {
        opacity : 0,
        duration : 1 ,
        ease : Power4
    })
})
document.querySelector("#onespan").addEventListener("mouseover" , function(){
    gsap.to("#onespan" , {
        scale : 1.4 ,
        rotate : 30 ,
        duration : .5 ,
        ease : Power1 ,
    })
})
document.querySelector("#onespan").addEventListener("mouseleave" , function(){
    gsap.to("#onespan" , {
        scale : 1 ,
        rotate : 0 ,
        duration : .5 ,
        ease : Power1 ,
    })
})
document.querySelector("#twospan").addEventListener("mouseover" , function(){
    gsap.to("#twospan" , {
        scale : 1.4 ,
        rotate : 30 ,
        duration : .5 ,
        ease : Power1 ,
    })
})
document.querySelector("#twospan").addEventListener("mouseleave" , function(){
    gsap.to("#twospan" , {
        scale : 1 ,
        rotate : 0 ,
        duration : .5 ,
        ease : Power1 ,
    })
})
document.querySelector("#threespan").addEventListener("mouseover" , function(){
    gsap.to("#threespan" , {
        scale : 1.4 ,
        rotate : -30 ,
        duration : .5 ,
        ease : Power1 ,
    })
})
document.querySelector("#threespan").addEventListener("mouseleave" , function(){
    gsap.to("#threespan" , {
        scale : 1 ,
        rotate : 0 ,
        duration : .5 ,
        ease : Power1 ,
    })
})

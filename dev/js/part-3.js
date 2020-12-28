import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin, MotionPathPlugin);


const Part3TL = gsap.timeline();

gsap.set("#car-pointer", {transformOrigin: "50% 50%", xPercent: -50, yPercent: -50});


export function Part3Animation() {

    Part3TL.to("#phone",{duration:.65, opacity:0, x:-100, transformOrigin: "center"},"play9-5")
            .to("#phone-call",{duration:.65, y:40, transformOrigin: "left"},"play9-5")

            .to("#music", {motionPath: {path: "#dots-path", align: "#dots-path", autoRotate: false}, duration: .65, ease: "none"}, "play9-5")
            .to("#heatcool", {motionPath: {path: "#dots-path-2", align: "#dots-path-2", autoRotate: false}, duration: .65, ease: "none"}, "play9-5")

            .from("#phone-call",{duration:.65, opacity:0, x:-100, scaleX:1, transformOrigin: "left"},"play9-6")
        

            .to("#phone-icon-answer, #phone-icon-end",{duration:.15, rotate:-10, transformOrigin: "center"},"play9-6")
            .to("#phone-icon-answer, #phone-icon-end",{duration:.15, rotate:10, transformOrigin: "center"},"play9-7")
            .to("#phone-icon-answer, #phone-icon-end",{duration:.15, rotate:-10, transformOrigin: "center"},"play9-8")
            .to("#phone-icon-answer, #phone-icon-end",{duration:.15, rotate:10, transformOrigin: "center"},"play9-9")
            .to("#phone-icon-answer, #phone-icon-end",{duration:.15, rotate:0, transformOrigin: "center"},"play9-91")

            .to("#phone-icon-answer, #phone-icon-end",{duration:1, rotate:0, transformOrigin: "center"},"play9-10")

            .to("#phone-icon-answer, #phone-icon-end",{duration:.15, rotate:-10, transformOrigin: "center"},"play9-61")
            .to("#phone-icon-answer, #phone-icon-end",{duration:.15, rotate:10, transformOrigin: "center"},"play9-71")
            .to("#phone-icon-answer, #phone-icon-end",{duration:.15, rotate:0, transformOrigin: "center"},"play9-92")

            .to("#touch",{duration:.1, x:-300, y:-100},"play9-11")
            .to("#touch-print, #outside-ring",{duration:.4, x:-58, y:-12, opacity: 1},"play9-12")
            .to("#touch-print",{duration:.4, scale:.65, transformOrigin: "center"},"play9-12")
            .to("#outside-ring",{duration:.4, scale:.85, transformOrigin: "center"},"play9-12")
            .to("#touch-print",{duration:.4, scale:1, opacity:0, transformOrigin: "center"},"play9-13")
            .to("#outside-ring",{duration:.4, scale:1.5, opacity:0, transformOrigin: "center"},"play9-13")

            .to("#phone-call",{duration:.65, opacity:0, x:-100, scaleX:0, transformOrigin: "left"},"play9-14")
            .to("#phone",{duration:.65, opacity:1, x:10, transformOrigin: "center"},"play9-15")


            .to("#music", {motionPath: {path: "#dots-path", align: "#dots-path", autoRotate: false, start:1, end: 0}, duration: .75, ease: "none"}, "play9-15")
            .to("#heatcool", {motionPath: {path: "#dots-path-2", align: "#dots-path-2", autoRotate: false, start:1, end: 0}, duration: .75, ease: "none"}, "play9-15")
            
            
            .to("#P",{duration:.35, scale:.78, fill:"#6FA3FF", transformOrigin: "left bottom"},"play10")

            .to("#R",{duration:.35, scale:1.25, fill:"#BBD7FF", transformOrigin: "left bottom"},"play10")
            .to("#R",{duration:.35, scale:1, fill:"#6FA3FF", transformOrigin: "left bottom"},"play11")

            .to("#N",{duration:.35, scale:1.25, fill:"#BBD7FF", transformOrigin: "left bottom"},"play11")
            .to("#N",{duration:.35, scale:1, fill:"#6FA3FF", transformOrigin: "left bottom"},"play12")

            .to("#D",{duration:.35, scale:1.25, fill:"#BBD7FF", transformOrigin: "left bottom"},"play12")

            
            .to("#speed-pointer",{duration:.01, rotate:0, transformOrigin: "center"},"play13")
            .fromTo("#speed-pointer",{drawSVG:"41% 42%"}, {duration: 2, drawSVG:"57.5% 58.5%"}, "play13")
  
            .to("#speed-counter",{duration: 1, onComplete: countIt}, "play11")
            
            .fromTo("#nav-white-line",{drawSVG:"0%"}, {duration: 2, drawSVG:"25%", ease: "none"}, "play13-0")
            .to("#directions-1",{duration:.5, opacity:0},"play13-1")
            .to("#directions-2",{duration:.5, opacity:1},"play13-1")

            .to("#C-thirty",{duration:.15, opacity:0},"play13-1")
            .to("#C-thirtythree",{duration:.15, opacity:1},"play13-1")

            .to("#S-nineeight",{duration:.15, opacity:0},"play13-1")
            .to("#S-ninenine",{duration:.15, opacity:1},"play13-1")


            .fromTo("#nav-white-line",{drawSVG:"25%"}, {duration: 2, drawSVG:"50%", ease: "none"}, "play13-1")
            .to("#directions-2",{duration:.5, opacity:0},"play13-2")
            .to("#directions-3",{duration:.5, opacity:1},"play13-2")

            .to("#C-thirtythree",{duration:.15, opacity:0},"play13-2")
            .to("#C-thirtysix",{duration:.15, opacity:1},"play13-2")

            .to("#S-ninenine",{duration:.15, opacity:0},"play13-2")
            .to("#S-onehun",{duration:.15, opacity:1},"play13-2")


            .fromTo("#nav-white-line",{drawSVG:"50%"}, {duration: 2, drawSVG:"75%", ease: "none"}, "play13-2")
            .to("#directions-3",{duration:.5, opacity:0},"play13-3")
            .to("#directions-4",{duration:.5, opacity:1},"play13-3")

            .to("#C-thirtysix",{duration:.15, opacity:0},"play13-3")
            .to("#C-thirtynine",{duration:.15, opacity:1},"play13-3")

            .to("#S-onehun",{duration:.15, opacity:0},"play13-3")
            .to("#S-oneOone",{duration:.15, opacity:1},"play13-3")


            .fromTo("#nav-white-line",{drawSVG:"75%"}, {duration: 2, drawSVG:"100%", ease: "none"}, "play13-3")
            .to("#directions-4",{duration:.5, opacity:0},"play13-4")
            .to("#directions-5",{duration:.5, opacity:1},"play13-4")

            .to("#C-thirtynine",{duration:.15, opacity:0},"play13-4")
            .to("#C-fourtyone",{duration:.15, opacity:1},"play13-4")

            .to("#S-oneOone",{duration:.15, opacity:0},"play13-4")
            .to("#S-oneOtwo",{duration:.15, opacity:1},"play13-4")


            .to("#car-pointer", {motionPath: {path: "#nav-blue-line", align: "#nav-white-line", autoRotate: true}, duration: 8, ease: "none"}, "play13-0")


            .fromTo("#speed-pointer",{drawSVG:"57.5% 58.5%"}, {duration: 2, drawSVG:"41% 42%"}, "play14")
            .to("#speed-counter",{duration: 1, onComplete: countItDownTwo}, "play13-4")
            .to("#speed-counter",{duration: .01, opacity:0}, "play14-1")
            .to("#speed-counter-2",{duration: .01, opacity:1}, "play14-1")


            .to("#D",{duration:.35, scale:1, fill:"#6FA3FF", transformOrigin: "left bottom"},"play14-1")

            .to("#N",{duration:.35, scale:1.25, fill:"#BBD7FF", transformOrigin: "left bottom"},"play14-1")
            .to("#N",{duration:.35, scale:1, fill:"#6FA3FF", transformOrigin: "left bottom"},"play15")

            .to("#R",{duration:.35, scale:1.25, fill:"#BBD7FF", transformOrigin: "left bottom"},"play15")
            .to("#R",{duration:.35, scale:1, fill:"#6FA3FF", transformOrigin: "left bottom"},"play16")

            .to("#P",{duration:.35, scale:1, fill:"#BBD7FF", transformOrigin: "left bottom"},"play16")


    return Part3TL;
}


var startCount = 0,
    endCount,
    activeIndex = 1,
    tm = 1.5,
    num = { var: startCount },
    numbers = document.getElementById("speed-counter");
    

function countIt() {
activeIndex == 1 ? endCount = 40 : endCount = 40;
gsap.to(num, tm, {var: endCount, onUpdate:changeNumber, ease: "none"});
}

function changeNumber() {
  numbers.innerHTML = (num.var).toFixed();  
}

var startCountDownTwo = 40,
    endCountDownTwo,
    activeIndexDownTwo = 1,
    tmDownTwo = 1.25,
    numDownTwo = { var: startCountDownTwo },
    numbersDownTwo = document.getElementById("speed-counter");
    

function countItDownTwo() {
activeIndexDownTwo == 1 ? endCountDownTwo = 0 : endCountDownTwo = 0;
gsap.to(numDownTwo, tmDownTwo, {var: endCountDownTwo, onUpdate:changeNumberDownTwo, ease: "none"});
}

function changeNumberDownTwo() {
  numbersDownTwo.innerHTML = (numDownTwo.var).toFixed();  
}

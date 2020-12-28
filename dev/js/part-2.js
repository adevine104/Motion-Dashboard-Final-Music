import {gsap} from "gsap";
import $ from "jquery";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";
// import {speedCounter} from "./number-speed.js";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);


var counterSpeed = 100;
// Set this number you want your counter to count up to. Default is 20
var topSpeed = 72;
// If yu don't want your speed to start at 0, change it here. Default is 0.
var speedNumber = 68;

var myVar;

function startTimer(){
    myVar = setInterval(speedCounter, counterSpeed);
}

export function speedCounter() {
	if (speedNumber < topSpeed) {
        speedNumber++;
       $("#HC-counter").html(speedNumber);
		//document.getElementById("HC-counter").innerHTML = speedNumber;
	} else {
		clearInterval(myVar);
	}
	return speedNumber;
}


var oneSecSpeed = .25;

var touchSpeed = .5;
var touchSpeed2 = .75;

var twoSecSpeed = 1;



const Part2TL = gsap.timeline();



export function Part2Animation() {
    Part2TL.to("#touch",{duration:.1, x:-400, y:70},"play3")
            .to("#touch-print, #outside-ring",{duration:touchSpeed, x:-33, y:-58, opacity: 1},"play3-1")
            .to("#touch-print",{duration:touchSpeed, scale:.65, transformOrigin: "center"},"play3-1")
            .to("#outside-ring",{duration:touchSpeed, scale:.85, transformOrigin: "center"},"play3-1")
            .to("#touch-print",{duration:touchSpeed, scale:1, opacity:0, transformOrigin: "center"},"play3-2")
            .to("#outside-ring",{duration:touchSpeed, scale:1.5, opacity:0, transformOrigin: "center"},"play3-2")
    

        .to("#play-1",{duration:oneSecSpeed, morphSVG:"#pause-1"},"play4")
        .to("#play-2",{duration:oneSecSpeed, morphSVG:"#pause-2"},"play4")


        .to("#music",{duration:twoSecSpeed, scale: .75, x:10, y:100},"play5")
        .to("#heatcool",{duration:twoSecSpeed, scale: 1.25, x:-100, y:0},"play5")
        .to("#Nav",{duration:twoSecSpeed, y:225},"play5")


            .to("#touch",{duration:.1, x:-98, y:100},"play5-0")
            .to("#touch-print, #outside-ring",{duration: touchSpeed, x:50, y:-135, opacity: 1},"play5-1")
            .to("#touch-print",{duration:touchSpeed, scale:.65, transformOrigin: "center"},"play5-1")
            .to("#outside-ring",{duration:touchSpeed, scale:.85, transformOrigin: "center"},"play5-1")
            .to("#touch-print",{duration:touchSpeed, scale:1, opacity:0, transformOrigin: "center"},"play5-2")
            .to("#outside-ring",{duration:touchSpeed, scale:1.5, opacity:0, transformOrigin: "center"},"play5-2")


            .to("#HC-counter", {duration: twoSecSpeed, onComplete: startTimer}, "play5-1")

        .to("#Triangle-1",{duration:.25, scale: .8, transformOrigin: "center"},"play5-1")
        .to("#Triangle-1",{duration:.5, scale: 1, transformOrigin: "center"},"play5-2")

        .from("#up-down",{duration:twoSecSpeed, y:14},"play5-2")



        .to("#music",{duration:twoSecSpeed, scale: .75, x:-50},"play6")
        .to("#heatcool",{duration:twoSecSpeed, scale: 1, x:70, y:-50},"play6")
        .to("#Nav",{duration:twoSecSpeed, scale: 1.20, x:-70, y:30},"play6")
        .to("#phone",{duration:twoSecSpeed, x:-60},"play6")



            .to("#touch",{duration:.1, x:-260, y:175},"play6-0")
            .to("#touch-print, #outside-ring",{duration:touchSpeed2, x:-32, y:22, opacity: 1},"play6-1")
            .to("#touch-print",{duration:touchSpeed2, scale:.65, transformOrigin: "center"},"play6-1")
            .to("#outside-ring",{duration:touchSpeed2, scale:.85, transformOrigin: "center"},"play6-1")
            .to("#touch-print",{duration:touchSpeed2, scale:1, opacity:0, transformOrigin: "center"},"play6-2")
            .to("#outside-ring",{duration:touchSpeed2, scale:1.5, opacity:0, transformOrigin: "center"},"play6-2")

        .to("#Home",{duration:oneSecSpeed, scale:1.25, fill:"#BBD7FF", transformOrigin: "left bottom"},"play7")
       
       
        .to("#phone",{duration:twoSecSpeed, scale: .245, x:10, y:-165, opacity: 1},"play8")
        .to("#music",{duration:twoSecSpeed, scale: .17, x:77, y:120, opacity: 1},"play8")
        .to("#heatcool",{duration:twoSecSpeed, scale: .23, x:-280, y:60, opacity: 1},"play8")


        .to("#music-stuff",{duration:twoSecSpeed, opacity: 0},"play8")
        .to("#HC-stuff",{duration:twoSecSpeed, opacity: 0},"play8")
        .to("#phone-stuff",{duration:twoSecSpeed, opacity: 0},"play8")

        .to("#radio-icon-big",{duration:twoSecSpeed, opacity: 1},"play8")
        .to("#fan-icon-big",{duration:twoSecSpeed, opacity: 1},"play8")
        .to("#phone-icon-big",{duration:twoSecSpeed, opacity: 1},"play8")

        .to("#Nav",{duration:twoSecSpeed, x:-360, y:-50},"play8")
        .to("#speedometer",{duration:twoSecSpeed, scale: .85, x:-10, y:-20, transformOrigin: "right bottom"},"play8")

        .to("#nav-map",{duration:twoSecSpeed, opacity:1},"play9")

        .to("#nav-stuff",{duration:oneSecSpeed, opacity:0},"play9-1")
        .to("#directions",{duration:oneSecSpeed, opacity:1},"play9-1")

    return Part2TL;
}



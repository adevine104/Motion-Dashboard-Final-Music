import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

import {itemsInAnimation} from "./intro.js";
import {IntroAnimation} from "./intro.js";
import {Part2Animation} from "./part-2.js";
// import {speedCounter} from "./part-2.js";
// import {speedCounter2} from "./part-3.js";
import {Part3Animation} from "./part-3.js";

gsap.registerPlugin(GSDevTools);

const mainTl = gsap.timeline();
mainTl.add(IntroAnimation());
mainTl.add(itemsInAnimation());
mainTl.add(Part2Animation());
// mainTl.add(speedCounter());
mainTl.add(Part3Animation());

GSDevTools.create(); 

var sounds = new Audio('./sound-effects/start-up.mp3');


fanTimeline();
fanTimeline2();
musicTimeline();
musicLineTimeline();
radioTimeline();
radio2Timeline();
phoneCallTimeline();

function fanTimeline(){
    sounds.play();
    const fanTimeline = gsap.timeline({repeat:4});

    // tell timeoine to play
    fanTimeline.to("#fan", {duration: 3, rotate: 360, ease: "none", transformOrigin: "center"});

}

function fanTimeline2(){
    const fanTimeline2 = gsap.timeline({repeat:11});

    // tell timeoine to play
    fanTimeline2.to("#fan-icon-big", {duration: 3, rotate: 360, ease: "none", transformOrigin: "center"});

}

function musicTimeline(){
    const musicTimeline = gsap.timeline({repeat:1});

    // tell timeoine to play
    musicTimeline.to("#Toxic-1",{duration:7, x:-390, ease:"none"})
}

function musicLineTimeline(){
    const musicLineTimeline = gsap.timeline({delay:9});

    // tell timeoine to play
    musicLineTimeline.fromTo("#blue-line",{drawSVG:"25%"}, {duration: 15, drawSVG:"100%"});

}

function radioTimeline(){
    const radioTimeline = gsap.timeline({repeat:4});

    // tell timeoine to play
    radioTimeline.to("#radio-icon-far-right, #radio-icon-middle-right, #radio-icon-near-right", {duration: 1.5, scale: 1.25, opacity: 0, x:10, stagger:.2, transformOrigin: "right center"} ,"rays")
                .to("#radio-icon-far-left, #radio-icon-middle-left, #radio-icon-near-left", {duration: 1.5, scale: 1.25, stagger:.2, x:-10, opacity: 0, transformOrigin: "left center"} ,"rays")
                .to("#radio-icon-far-right, #radio-icon-middle-right, #radio-icon-near-right", {duration: 1.5, scale: 1, stagger:.2, x:0, opacity: 1, transformOrigin: "right center"} ,"rays2")
                .to("#radio-icon-far-left, #radio-icon-middle-left, #radio-icon-near-left", {duration: 1.5, scale: 1, stagger:.2, x:0, opacity: 1, transformOrigin: "left center"} ,"rays2");

}

function radio2Timeline(){
    const radio2Timeline = gsap.timeline({repeat:8});

    // tell timeoine to play
    radio2Timeline.to("#RB-far-right, #RB-middle-right, #RB-close-right", {duration: 1.5, scale: 1.25, opacity: 0, x:15, stagger:.2, transformOrigin: "right center"} ,"rays")
                .to("#RB-far-left, #RB-middle-left, #RB-close-left", {duration: 1.5, scale: 1.25, stagger:.2, x:-15, opacity: 0, transformOrigin: "left center"} ,"rays")
                .to("#RB-far-right, #RB-middle-right, #RB-close-right", {duration: 1.5, scale: 1, stagger:.2, x:0, opacity: 1, transformOrigin: "right center"} ,"rays2")
                .to("#RB-far-left, #RB-middle-left, #RB-close-left", {duration: 1.5, scale: 1, stagger:.2, x:0, opacity: 1, transformOrigin: "left center"} ,"rays2");

}

function phoneCallTimeline(){
    const phoneCallTimeline = gsap.timeline({repeat:11});

    // tell timeoine to play
    phoneCallTimeline.to("#ellipses-1, #ellipses-2, #ellipses-3",{duration:1, opacity:1, y:-10, stagger:.2, transformOrigin: "left"})
                     .to("#ellipses-1, #ellipses-2, #ellipses-3",{duration:1, y:0, stagger:.2, transformOrigin: "left"});

}
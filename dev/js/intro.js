import {gsap} from "gsap";
import {DrawSVGPlugin} from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);


const introTL = gsap.timeline();


export function IntroAnimation() {
    introTL.from("#spikey-shape-big", {duration: 1.5, scale: 0, transformOrigin: "center"}, "play")
        .to("#phone",{duration: .01, y:125, x:-6},"play")
        .to("#Nav",{duration: .01, y:125},"play")
        .from("#logo-circle-big", {duration: 3, scale: 10, transformOrigin: "center"}, "play")
        .to("#big-logo", {duration: 1, scale: .2, y: -320, transformOrigin: "center"}, "play2")

        .to("#speed-circle", {duration: .01, rotate:30, transformOrigin: "center"}, "play2")
        
        .fromTo("#speed-circle, #HC-circle, #music-circle, #nav-circle, #phone-circle",{drawSVG:"0%"}, {duration: 1.5, drawSVG:"100%"}, "play2")
        
        .to("#music-stuff, #HC-stuff, #nav-stuff, #phone-stuff, #speed-stuff", {duration: .01, opacity: 1, transformOrigin: "center"}, "play3.1")

    return introTL;
}


const itemsInTL = gsap.timeline();


export function itemsInAnimation() {
    itemsInTL.from("#clock-weather-date", {duration: 1, opacity: 0, x: 30, transformOrigin: "center"}, "play3")
    .to("#clock-weather-date", {duration: 1, opacity: 1, transformOrigin: "center"}, "play3")
    .from("#prndl", {duration: 1, opacity: 0, x: -30, transformOrigin: "center"}, "play3")
    .to("#prndl", {duration: 1, opacity: 1, transformOrigin: "center"}, "play3")
    
    
    .fromTo("#fuel-filler",{drawSVG:"0%"}, {duration: 1, drawSVG:"100%"}, "play3")
    .fromTo("#fuel-line",{drawSVG:"0%"}, {duration: 1, drawSVG:"100%"}, "play3")
    .from("#F, #E", {duration: 1, opacity: 0, transformOrigin: "left bottom"}, "play3")
    .from("#speed-info", {duration: 2, opacity: 0, x:330, transformOrigin: "center"}, "play3")
    .from("#speed-pointer", {duration: 1, opacity: 0, scaleY:2, transformOrigin: "left"}, "play3")

    .from("#tick-1", {duration: 1, opacity: 0, scaleX:0, transformOrigin: "right"}, "play3")
    .from("#tick-2", {duration: 1, opacity: 0, scaleX:0, transformOrigin: "right"}, "play3")
    .from("#tick-3", {duration: 1, opacity: 0, scaleY:0, transformOrigin: "left top"}, "play3")
    .from("#tick-4", {duration: 1, opacity: 0, scaleY:0, transformOrigin: "top"}, "play3")
    .from("#tick-5", {duration: 1, opacity: 0, scaleY:0, transformOrigin: "right top"}, "play3")


    .from("#hotseat, #fan, #border-seat", {duration: 1, opacity: 0, x:30, stagger:.2, transformOrigin: "right"}, "play3")
    .from("#Triangle-1", {duration: 1, opacity: 0, y:10, transformOrigin: "center"}, "play3")
    .from("#Triangle-2", {duration: 1, opacity: 0, y:5, transformOrigin: "center"}, "play3")
    .from("#HC-counter", {duration: 1, opacity: 0}, "play3")
    .from("#H, #C, #degree", {duration: 1, opacity: 0, transformOrigin: "center"}, "play3")
    .from("#red2blue-rec", {duration: 1, opacity: 0, x:-30, transformOrigin: "center"}, "play3")
    .from("#ticks", {duration: 1, opacity: 0, scaleY:0, transformOrigin: "bottom"}, "play3")
    .from("#up-down", {duration: 1, opacity: 0, scaleX:0, transformOrigin: "left"}, "play3")


    .from("#radio-title", {duration: 1, opacity: 0, y:10, transformOrigin: "center"}, "play3")
    .from("#ff-pl-rwd", {duration: 1, opacity: 0, y:30, transformOrigin: "center"}, "play3")
    .from("#white-line, #blue-line", {duration: 1, opacity: 0}, "play3")
    .from("#volume", {duration: 1, scaleX:0, opacity: 0, transformOrigin: "center"}, "play3")
    .from("#Triangle-right", {duration: 1, opacity: 0, x:5, transformOrigin: "center"}, "play3")
    .from("#Triangle-left", {duration: 1, opacity: 0, x:40, transformOrigin: "center"}, "play3")
    .from("#CD, #radio-icon", {duration: 1, opacity: 0, y:400, stagger:.2, transformOrigin: "center"}, "play3")
    .from("#AUX", {duration: .8, opacity: 0, y:30, transformOrigin: "center"}, "play3")
    .from("#Toxic-1", {duration: 1, opacity: 0, transformOrigin: "center"}, "play3")


    .from("#caller-list, #caller-blocks", {duration: 1, opacity: 0, x:30, transformOrigin: "center"}, "play3")
    .from("#arrow-up", {duration: 1, opacity: 0, y:10, transformOrigin: "center"}, "play3")
    .from("#arrow-down", {duration: 1, opacity: 0, y:5, transformOrigin: "center"}, "play3")
    

    .from("#NAV", {duration: 1, opacity: 0, transformOrigin: "center"}, "play3")
    .from("#Triangle-3", {duration: 1, opacity: 0, y:10, transformOrigin: "center"}, "play3")
    .from("#Triangle-4", {duration: 1, opacity: 0, y:5, transformOrigin: "center"}, "play3")
    .from("#Home, #Work, #Recents, #AddressBook, #NewDestination", {duration: 1, opacity: 0, x:30, stagger:.2, transformOrigin: "bottom"}, "play3")


    return itemsInTL;
}
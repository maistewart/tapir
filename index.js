/**
 * Created by Mai on 7/1/2014. Muhaha
 */

// Plan appear/disappear
document.getElementById("step1").addEventListener("mouseout",plandisp);

function plandisp(){
    document.getElementById("serv1").style.opacity = 0.6;
    document.getElementById("serv1").style.fontWeight = "normal";
}
document.getElementById("step1").addEventListener("mouseover",planappear);

function planappear() {
    document.getElementById("serv1").style.opacity = 1;
    document.getElementById("serv1").style.fontWeight = "bold";
}

// Design appear/disappear
document.getElementById("step2").addEventListener("mouseout",designdisp);

function designdisp(){
    document.getElementById("serv2").style.opacity = 0.6;
    document.getElementById("serv2").style.fontWeight = "normal";
}
document.getElementById("step2").addEventListener("mouseover",designappear);

function designappear() {
    document.getElementById("serv2").style.opacity = 1;
    document.getElementById("serv2").style.fontWeight = "bold";
}

// Develop appear/disappear
document.getElementById("step3").addEventListener("mouseout",devdisp);

function devdisp(){
    document.getElementById("serv3").style.opacity = 0.6;
    document.getElementById("serv3").style.fontWeight = "normal";
}
document.getElementById("step3").addEventListener("mouseover",devappear);

function devappear() {
    document.getElementById("serv3").style.opacity = 1;
    document.getElementById("serv3").style.fontWeight = "bold";
}

// Launch appear/disappear
document.getElementById("step4").addEventListener("mouseout",launchdisp);

function launchdisp(){
    document.getElementById("serv4").style.opacity = 0.6;
    document.getElementById("serv4").style.fontWeight = "normal";
}
document.getElementById("step4").addEventListener("mouseover",launchappear);

function launchappear() {
    document.getElementById("serv4").style.opacity = 1;
    document.getElementById("serv4").style.fontWeight = "bold";
}

// Smooth scroll function
/*
document.getElementById("go").addEventListener("click",pageScroll);

function scrollIntoView() {
    var e = document.getElementById("startform");
    if (!!e && e.scrollIntoView) {
        e.scrollIntoView();
    }
}

function pageScroll() {
    for (var i = 0; i != 100; ++i) {
    }
    //scrolldelay = setTimeout('pageScroll()', 20);
        window.scrollBy(0, 1);
}
    */

document.getElementById("step1").addEventListener("mouseover",turnblue1);

function turnblue1() {
    var image = document.getElementById('step1');
    if (image.src.match("trans")) {
        image.src = "img/step1blue.png";
    } /*else {
     image.src = "img/step1trans.png";
     }*/
}

document.getElementById("step1").addEventListener("mouseout",turnclear1);

function turnclear1() {
    var image = document.getElementById('step1');
    if (image.src.match("blue")) {
        image.src = "img/step1trans.png";
    }
}

document.getElementById("step2").addEventListener("mouseover",turnblue2);

function turnblue2() {
    var image = document.getElementById('step2');
    if (image.src.match("trans")) {
        image.src = "img/step2blue.png";
    }
}

document.getElementById("step2").addEventListener("mouseout",turnclear2);

function turnclear2() {
    var image = document.getElementById('step2');
    if (image.src.match("blue")) {
        image.src = "img/step2trans.png";
    }
}

document.getElementById("step3").addEventListener("mouseover",turnblue3);

function turnblue3() {
    var image = document.getElementById('step3');
    if (image.src.match("trans")) {
        image.src = "img/step3blue.png";
    }
}

document.getElementById("step3").addEventListener("mouseout",turnclear3);

function turnclear3() {
    var image = document.getElementById('step3');
    if (image.src.match("blue")) {
        image.src = "img/step3trans.png";
    }
}

document.getElementById("step4").addEventListener("mouseover",turnblue4);

function turnblue4() {
    var image = document.getElementById('step4');
    if (image.src.match("trans")) {
        image.src = "img/step4blue.png";
    }
}

document.getElementById("step4").addEventListener("mouseout",turnclear4);

function turnclear4() {
    var image = document.getElementById('step4');
    if (image.src.match("blue")) {
        image.src = "img/step4trans.png";
    }
}
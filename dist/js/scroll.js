var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var hh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
window.addEventListener('scroll', () => {
// gets the scrolled pixels
var scrolled = window.scrollY;

var h = hh*0.75;

// gets the h and w of the window



console.log(scrolled);


if (scrolled < h) {
    document.getElementById("bubble1").style.opacity = 0;
    document.getElementById("bubble2").style.opacity = 0;
    document.getElementById("bubble3").style.opacity = 0;
    document.getElementById("bubble4").style.opacity = 0;
}

else {


if (scrolled > h + 800) {
    document.getElementById("bubble1").style.opacity = 1;
    document.getElementById("bubble2").style.opacity = 1;
    document.getElementById("bubble3").style.opacity = 1;
    document.getElementById("bubble4").style.opacity = 1;

    document.getElementById("bubble1").style.height = 100 + "%";
    document.getElementById("bubble1").style.width = 100 + "%";

    document.getElementById("bubble2").style.height = 100 + "%";
    document.getElementById("bubble2").style.width = 100 + "%";

    document.getElementById("bubble3").style.height = 100 + "%";
    document.getElementById("bubble3").style.width = 100 + "%";

    document.getElementById("bubble4").style.height = 100 + "%";
    document.getElementById("bubble4").style.width = 100 + "%";
}

else {
if (scrolled >= h) {
    //transforms the messages
    if (scrolled >= h + 200) {
        document.getElementById("bubble1").style.opacity = 1;
    
    document.getElementById("bubble1").style.height = 100 + "%";
    document.getElementById("bubble1").style.width = 100 + "%";
    } else {
    var bubble1koko = 200 - ((scrolled - h) / 2);
    var bubble1opacity = 0 + ((scrolled - h) / 200);
    document.getElementById("bubble1").style.height = bubble1koko + "%";
    document.getElementById("bubble1").style.width = bubble1koko + "%";

    

    document.getElementById("bubble1").style.opacity = bubble1opacity;
    }
}


if (scrolled >= h + 200) {
    //transforms the messages
    if (scrolled >= h + 400) {

    document.getElementById("bubble2").style.opacity = 1;
    
    document.getElementById("bubble2").style.height = 100 + "%";
    document.getElementById("bubble2").style.width = 100 + "%";
    } else {
    var bubble2koko = 200 - ((scrolled - h - 200) / 2);
    var bubble2opacity = 0 + ((scrolled - h - 200) / 200);
    document.getElementById("bubble2").style.height = bubble2koko + "%";
    document.getElementById("bubble2").style.width = bubble2koko + "%";

    document.getElementById("bubble2").style.opacity = bubble2opacity;

    }
}

else {
    document.getElementById("bubble2").style.opacity = 0;
}


if (scrolled >= h + 400) {
    //transforms the messages
    if (scrolled >= h + 600) {

    document.getElementById("bubble3").style.opacity = 1;
    
    document.getElementById("bubble3").style.height = 100 + "%";
    document.getElementById("bubble3").style.width = 100 + "%";
    } else {
    var bubble3koko = 200 - ((scrolled - h - 400) / 2);
    var bubble3opacity = 0 + ((scrolled - h - 400) / 200);
    document.getElementById("bubble3").style.height = bubble3koko + "%";
    document.getElementById("bubble3").style.width = bubble3koko + "%";

    document.getElementById("bubble3").style.opacity = bubble3opacity;
    }
}
else {
    document.getElementById("bubble3").style.opacity = 0;
}


if (scrolled >= h + 600) {
    //transforms the messages
    if (scrolled >= h + 800) {

        document.getElementById("bubble4").style.opacity = 1;
    
    document.getElementById("bubble4").style.height = 100 + "%";
    document.getElementById("bubble4").style.width = 100 + "%";
    } else {
    var bubble4koko = 200 - ((scrolled - h - 600) / 2);
    var bubble4opacity = 0 + ((scrolled - h - 600) / 200);
    document.getElementById("bubble4").style.height = bubble4koko + "%";
    document.getElementById("bubble4").style.width = bubble4koko + "%";

    document.getElementById("bubble4").style.opacity = bubble4opacity;
    }
}
else {
    document.getElementById("bubble4").style.opacity = 0;
}



}}


if (scrolled >= h + 800) {
    document.getElementById("element1").style.position  = "absolute";
    var newtop = h + 800;
    document.getElementById("element1").style.top = newtop + "px";


    


    
}
else {
    document.getElementById("element1").style.position  = "fixed";
   
    document.getElementById("element1").style.top = 0;
}



});


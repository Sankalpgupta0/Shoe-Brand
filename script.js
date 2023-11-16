const pg1 = document.querySelector(".pg1");
const pg2 = document.querySelector(".pg2");
const pg3 = document.querySelector(".pg3");
const right = document.querySelector(".right");
const left = document.querySelector(".left");
const page = document.querySelector(".page");
const con = document.querySelector(".con");
const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");
const rightArrow = document.querySelector(".fa-arrow-right");
const leftArrow = document.querySelector(".fa-arrow-left");

right.addEventListener( "click", () => {
    rightArrow.style.animation = "moveRight 1.5s";
    setTimeout(() => {
        rightArrow.style.animation = "none";
        leftArrow.style.animation = "none";  
    }, 1500);
})
left.addEventListener( "click", () => {
    leftArrow.style.animation = "moveLeft 1.5s";
    setTimeout(() => {
        rightArrow.style.animation = "none";
        leftArrow.style.animation = "none";  
    }, 1500);
})


right.addEventListener( "click", () => {
    if(window.getComputedStyle(pg1).zIndex == 3){
        c1.style.animation = "shrink 0.5s";
        c2.style.animation = "shrink 0.5s";
        c3.style.animation = "shrink 0.5s";
        c1.style.backgroundPosition = "center center";
        c1.style.backgroundSize = "70% 70%";
        c2.style.backgroundPosition = "center center";
        c2.style.backgroundSize = "70% 70%";
        c3.style.backgroundPosition = "center center";
        c3.style.backgroundSize = "70% 70%";
        setTimeout(() => {
            pg1.style.animation = "slideOut 0.5s";
            pg2.style.animation = "none";
            pg3.style.animation = "none";
            setTimeout(() => {
                pg1.style.zIndex = 1;
                pg2.style.zIndex = 3;
                pg3.style.zIndex = 2;
                c1.style.animation = "expand 0.5s";
                c2.style.animation = "expand 0.5s";
                c3.style.animation = "expand 0.5s";
                c1.style.backgroundPosition = "center center";
                c1.style.backgroundSize = "100% 100%";
                c2.style.backgroundPosition = "center center";
                c2.style.backgroundSize = "100% 100%";
                c3.style.backgroundPosition = "center center";
                c3.style.backgroundSize = "100% 100%";
            }, 500);

        }, 500);
    }
    else if(window.getComputedStyle(pg2).zIndex == 3){
        c1.style.animation = "shrink 0.5s";
        c2.style.animation = "shrink 0.5s";
        c3.style.animation = "shrink 0.5s";
        c1.style.backgroundPosition = "center center";
        c1.style.backgroundSize = "70% 70%";
        c2.style.backgroundPosition = "center center";
        c2.style.backgroundSize = "70% 70%";
        c3.style.backgroundPosition = "center center";
        c3.style.backgroundSize = "70% 70%";
        setTimeout(() => {
            pg1.style.animation = "none";
            pg2.style.animation = "slideOut 0.5s";
            pg3.style.animation = "none";
            setTimeout(() => {
                pg1.style.zIndex = 2;
                pg2.style.zIndex = 1;
                pg3.style.zIndex = 3;
                c1.style.animation = "expand 0.5s";
                c2.style.animation = "expand 0.5s";
                c3.style.animation = "expand 0.5s";
                c1.style.backgroundPosition = "center center";
                c1.style.backgroundSize = "100% 100%";
                c2.style.backgroundPosition = "center center";
                c2.style.backgroundSize = "100% 100%";
                c3.style.backgroundPosition = "center center";
                c3.style.backgroundSize = "100% 100%";
            }, 500);
        }, 500);
    }
    else if(window.getComputedStyle(pg3).zIndex == 3){
        c1.style.animation = "shrink 0.5s";
        c2.style.animation = "shrink 0.5s";
        c3.style.animation = "shrink 0.5s";
        c1.style.backgroundPosition = "center center";
        c1.style.backgroundSize = "70% 70%";
        c2.style.backgroundPosition = "center center";
        c2.style.backgroundSize = "70% 70%";
        c3.style.backgroundPosition = "center center";
        c3.style.backgroundSize = "70% 70%";
        setTimeout(() => {
            pg1.style.animation = "none";
            pg2.style.animation = "none";
            pg3.style.animation = "slideOut 0.5s";
            setTimeout(() => {
                pg1.style.zIndex = 3;
                pg2.style.zIndex = 2;
                pg3.style.zIndex = 1;
                c1.style.animation = "expand 0.5s";
                c2.style.animation = "expand 0.5s";
                c3.style.animation = "expand 0.5s";
                c1.style.backgroundPosition = "center center";
                c1.style.backgroundSize = "100% 100%";
                c2.style.backgroundPosition = "center center";
                c2.style.backgroundSize = "100% 100%";
                c3.style.backgroundPosition = "center center";
                c3.style.backgroundSize = "100% 100%";
            }, 500);
        }, 500);
    }
})



left.addEventListener( "click", () => {
    if(window.getComputedStyle(pg1).zIndex == 3){
        c1.style.animation = "shrink 0.5s";
        c2.style.animation = "shrink 0.5s";
        c3.style.animation = "shrink 0.5s";
        c1.style.backgroundPosition = "center center";
        c1.style.backgroundSize = "70% 70%";
        c2.style.backgroundPosition = "center center";
        c2.style.backgroundSize = "70% 70%";
        c3.style.backgroundPosition = "center center";
        c3.style.backgroundSize = "70% 70%";
        setTimeout(() => {
            pg1.style.animation = "slideIn 0.5s";
            pg2.style.animation = "none";
            pg3.style.animation = "none";
            setTimeout(() => {
                pg1.style.zIndex = 1;
                pg2.style.zIndex = 3;
                pg3.style.zIndex = 2;
                c1.style.animation = "expand 0.5s";
                c2.style.animation = "expand 0.5s";
                c3.style.animation = "expand 0.5s";
                c1.style.backgroundPosition = "center center";
                c1.style.backgroundSize = "100% 100%";
                c2.style.backgroundPosition = "center center";
                c2.style.backgroundSize = "100% 100%";
                c3.style.backgroundPosition = "center center";
                c3.style.backgroundSize = "100% 100%";
            }, 500);

        }, 500);
    }
    else if(window.getComputedStyle(pg2).zIndex == 3){
        c1.style.animation = "shrink 0.5s";
        c2.style.animation = "shrink 0.5s";
        c3.style.animation = "shrink 0.5s";
        c1.style.backgroundPosition = "center center";
        c1.style.backgroundSize = "70% 70%";
        c2.style.backgroundPosition = "center center";
        c2.style.backgroundSize = "70% 70%";
        c3.style.backgroundPosition = "center center";
        c3.style.backgroundSize = "70% 70%";
        setTimeout(() => {
            pg1.style.animation = "none";
            pg2.style.animation = "slideIn 0.5s";
            pg3.style.animation = "none";
            setTimeout(() => {
                pg1.style.zIndex = 2;
                pg2.style.zIndex = 1;
                pg3.style.zIndex = 3;
                c1.style.animation = "expand 0.5s";
                c2.style.animation = "expand 0.5s";
                c3.style.animation = "expand 0.5s";
                c1.style.backgroundPosition = "center center";
                c1.style.backgroundSize = "100% 100%";
                c2.style.backgroundPosition = "center center";
                c2.style.backgroundSize = "100% 100%";
                c3.style.backgroundPosition = "center center";
                c3.style.backgroundSize = "100% 100%";
            }, 500);
        }, 500);
    }
    else if(window.getComputedStyle(pg3).zIndex == 3){
        c1.style.animation = "shrink 0.5s";
        c2.style.animation = "shrink 0.5s";
        c3.style.animation = "shrink 0.5s";
        c1.style.backgroundPosition = "center center";
        c1.style.backgroundSize = "70% 70%";
        c2.style.backgroundPosition = "center center";
        c2.style.backgroundSize = "70% 70%";
        c3.style.backgroundPosition = "center center";
        c3.style.backgroundSize = "70% 70%";
        setTimeout(() => {
            pg1.style.animation = "none";
            pg2.style.animation = "none";
            pg3.style.animation = "slideIn 0.5s";
            setTimeout(() => {
                pg1.style.zIndex = 3;
                pg2.style.zIndex = 2;
                pg3.style.zIndex = 1;
                c1.style.animation = "expand 0.5s";
                c2.style.animation = "expand 0.5s";
                c3.style.animation = "expand 0.5s";
                c1.style.backgroundPosition = "center center";
                c1.style.backgroundSize = "100% 100%";
                c2.style.backgroundPosition = "center center";
                c2.style.backgroundSize = "100% 100%";
                c3.style.backgroundPosition = "center center";
                c3.style.backgroundSize = "100% 100%";
            }, 500);
        }, 500);
    }
})
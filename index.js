const load=document.querySelector('.loading');
const bg=document.querySelector('.bg');

let num=0;

let int = setInterval(blurload,30);

function blurload(){
    num++;
    if(num>99){
        clearInterval(int)
    }

    load.innerHTML=`<h1>${num}%</h1>`
    load.style.opacity= scale(num,0,100,1,0);
    bg.style.filter=`blur(${scale(num,0,100,20,0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}



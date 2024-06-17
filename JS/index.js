const musicSound = new Audio("./food.mp3");
const foodSound = new Audio("./food.mp3");
const moveSound = new Audio("./move.mp3");
const gameOverSound = new Audio("./gameover.mp3");

let direction = {x: 0, y:0};


function main(ctime){
    console.log(ctime);
    window.requestAnimationFrame(main);
}

window.requestAnimationFrame(main);

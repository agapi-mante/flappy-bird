let cvs = document.getElementById("canvas");  //создание поля для игры
let ctx = cvs.getContext("2d"); //его расширения

let bird = new Image(); //создание главных переменных в игре
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

bird.src = "img/bird.png"; //указание их пути для импорта в игру
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

let fly = new Audio(); //создание переменных,отвечающий за звук (1.Это полёт самой птицы, 2.Это счётчик смертей )
let score_audio = new Audio();

fly.src = "audio/fly.mp3"; //указание аудио их пути для импорта в игру
score_audio.src = "audio/score.mp3";

let gap = 90; //расстояния между блоками,для пролёта самой птицы

document.addEventListener("keydown", moveUp); // При нажатие, постоянный повтор активного действия в игре

function moveUp() { //функция отвечающая за действия игрока(активного участия в игре)
 yPos -= 25;
 fly.play();
}

let pipe = []; //блоки

pipe[0] = { //объекты отвечающий за блоки в игре
 x : cvs.width,
 y : 0
}

let score = 0; //очки игрока

let xPos = 10; //изначальное позиция птицы в игре
let yPos = 150;
let grav = 1.5;

function draw() {
 ctx.drawImage(bg, 0, 0);

 for(let i = 0; i < pipe.length; i++) { //описание действия в игре
 ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
 ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

 pipe[i].x--;

 if (pipe[i].x == 125) { 
 pipe.push() {
 x : cvs.width,
 y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
 };
 }

 // Отслеживание прикосновений игрока в игре
 if (xPos + bird.width >= pipe[i].x
 && xPos <= pipe[i].x + pipeUp.width
 && (yPos <= pipe[i].y + pipeUp.height
 || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || yPos + bird.height >= cvs.height - fg.height) {
 location.reload(); //постоянное повторение содержимого
 }

 if (pipe[i].x == 5) {
 score++;
 score_audio.play(); //воиспроизведение аудио score
 }
 }

 ctx.drawImage(fg, 0, cvs.height - fg.height);
 ctx.drawImage(bird, xPos, yPos);

 yPos += grav;

 ctx.fillStyle = "#000";
 ctx.font = "24px Verdana";
 ctx.fillText("Счет: " + score, 10, cvs.height - 20); //счёт игрока

 requestAnimationFrame(draw); //нарисование всех объектов
}

pipeBottom.onload = draw;

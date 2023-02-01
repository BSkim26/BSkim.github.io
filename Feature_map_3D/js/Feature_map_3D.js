function createBoxes_1() {
    svg = document.querySelector("svg");
    if (svg) {
      svg.parentNode.removeChild(svg);
    }
    createBoxes();
    }

function createBoxes() {
var rows = document.getElementById("inputNumber0").value;
var columns = document.getElementById("inputNumber1").value;
var depths = document.getElementById("inputNumber2").value;


var f_width = document.getElementById("FilterNumber0").value;
var f_height = document.getElementById("FilterNumber1").value;
var f_count = document.getElementById("FilterNumber2").value;

var f_width1 = document.getElementById("FilterNumber1_0").value;
var f_height1 = document.getElementById("FilterNumber1_1").value;
var f_count1 = document.getElementById("FilterNumber1_2").value;

var f_width2 = document.getElementById("FilterNumber2_0").value;
var f_height2 = document.getElementById("FilterNumber2_1").value;
var f_count2 = document.getElementById("FilterNumber2_2").value;

var outputNumber = document.getElementById("outputNumber").value;
var outputNumber1 = document.getElementById("outputNumber1").value;

let boxes = document.getElementById("boxes");

var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
// 함수가 재실행되면 앞서 만들었던 요소들을 없애줌
while (boxes.firstChild) {
boxes.removeChild(boxes.firstChild);
}

// 네모
for (let j = 0; j < depths; j++) {
var box = document.createElement("div");
box.classList.add("box");
box.id = "FM0_" + j;
box.style.width = columns * 40 + "px";
box.style.height = rows * 40 + "px";
box.style.left = ((window.innerWidth / 7) + (5 * j)) + "px";
box.style.top = ((window.innerHeight / 2- columns * 40/2) + (5 * j)) + "px";
boxes.appendChild(box);
}
if((columns)>=(columns-f_height +1)){
if((rows)>=(rows-f_width+1))
for (let j = 0; j < f_count; j++) {
var box = document.createElement("div");
box.classList.add("box");
box.id = "FM1_" + j;
box.style.width = (columns-f_height +1) * 40 + "px";
box.style.height = (rows-f_width+1) * 40 + "px";
box.style.left = ((window.innerWidth / 3.5) + (5 * j)) + "px";
box.style.top = ((window.innerHeight / 2 - (rows-f_width+1) * 40/2) + (5 * j)) + "px";
boxes.appendChild(box);
}
}
if((columns-f_height +1)>=f_height1){
if((rows-f_width+1)>=((rows-f_width+1)-f_width1))
for (let j = 0; j < f_count1; j++) {
var box = document.createElement("div");
box.classList.add("box");
box.id = "FM2_" + j;
box.style.width = ((columns-f_height +1)-f_height1 +1) * 40 + "px";
box.style.height = ((rows-f_width+1)-f_width1+1) * 40 + "px";
box.style.left = ((window.innerWidth / 2.4) + (5 * j)) + "px";
box.style.top = ((window.innerHeight / 2 - ((rows-f_width+1)-f_width1+1)*40/2) + (5 * j)) + "px";
boxes.appendChild(box);
}
}
if(((columns-f_height +1)-f_height1 +1)>=f_height2){
if(((rows-f_width+1)-f_width1+1)>=f_width2)
for (let j = 0; j < f_count2; j++) {
var box = document.createElement("div");
box.classList.add("box");
box.id = "FM3_" + j;
box.style.width = (((columns-f_height +1)-f_height1 +1)-f_height2 +1) * 40 + "px";
box.style.height = (((rows-f_width+1)-f_width1+1)-f_width2+1) * 40 + "px";
box.style.left = ((window.innerWidth /1.8) + (5 * j)) + "px";
box.style.top = ((window.innerHeight / 2 - (((rows-f_width+1)-f_width1+1)-f_width2+1) * 40/2) + (5 * j)) + "px";
boxes.appendChild(box);
}
}

//원

if(((columns-f_height +1)-f_height1 +1)>=f_height2){
if(((rows-f_width+1)-f_width1+1)>=f_width2)
for (let j = 0; j < (((columns-f_height +1)-f_height1 +1)-f_height2 +1)*(((rows-f_width+1)-f_width1+1)-f_width2+1)*f_count2; j++) {
var box = document.createElement("div");
box.classList.add("box");
box.id = "box_" + j;
box.style.borderRadius = "50%";
box.style.width = 20 + "px";
box.style.height = 20 + "px";
box.style.left = (window.innerWidth /1.4) + "px";
box.style.top = ((window.innerHeight / 2 - (((columns-f_height +1)-f_height1 +1)-f_height2 +1)*(((rows-f_width+1)-f_width1+1)-f_width2+1)*f_count2*30/2)) + (30 * j) + "px";
boxes.appendChild(box);
}
}

for (let j = 0; j < outputNumber; j++) {
var box = document.createElement("div");
box.classList.add("box");
box.id = "box1_" + j;
box.style.borderRadius = "50%";
box.style.width = 20 + "px";
box.style.height = 20 + "px";
box.style.left = (window.innerWidth /1.3) + "px";
box.style.top = ((window.innerHeight / 2- outputNumber * 30/2) + (30 * j)) + "px";
boxes.appendChild(box);
}

for (let j = 0; j < outputNumber1; j++) {
var box = document.createElement("div");
box.classList.add("box");
box.id = "box2_" + j;
box.style.borderRadius = "50%";
box.style.width = 20 + "px";
box.style.height = 20 + "px";
box.style.left = (window.innerWidth /1.2) + "px";
box.style.top = ((window.innerHeight / 2- outputNumber1 * 30/2) + (30 * j)) + "px";
boxes.appendChild(box);
}

// 선
for(let c = 0; c < outputNumber; c++){
for(let d = 0; d < (((columns-f_height +1)-f_height1 +1)-f_height2 +1)*(((rows-f_width+1)-f_width1+1)-f_width2+1)*f_count2; d++){
          let box2_1 = document.getElementById("box_" + d);
          let box3_1 = document.getElementById("box1_" + c);
          var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
          line.setAttribute("x1", box2_1.offsetLeft + box2_1.offsetWidth/2);
          line.setAttribute("y1", box2_1.offsetTop + box2_1.offsetHeight/2);
          line.setAttribute("x2", box3_1.offsetLeft + box3_1.offsetWidth/2);
          line.setAttribute("y2", box3_1.offsetTop + box3_1.offsetHeight/2);
          line.style.stroke = "black";
          line.style.strokeWidth = "2px";
          svg.appendChild(line);
  }
}

for(let c = 0; c < outputNumber1; c++){
for(let d = 0; d < outputNumber; d++){
          let box2_1 = document.getElementById("box1_" + d);
          let box3_1 = document.getElementById("box2_" + c);
          var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
          line.setAttribute("x1", box2_1.offsetLeft + box2_1.offsetWidth/2);
          line.setAttribute("y1", box2_1.offsetTop + box2_1.offsetHeight/2);
          line.setAttribute("x2", box3_1.offsetLeft + box3_1.offsetWidth/2);
          line.setAttribute("y2", box3_1.offsetTop + box3_1.offsetHeight/2);
          line.style.stroke = "black";
          line.style.strokeWidth = "2px";
          svg.appendChild(line);
  }
}
document.getElementById("svgContainer").appendChild(svg);

// 화살표
for (var i = 0; i < 4; i++) {
    var box2 = document.getElementById("FM" + i + "_" + 0);
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", box2.offsetLeft + 210);
    line.setAttribute("y1", box2.offsetTop + 100);
    line.setAttribute("x2", box2.offsetLeft + 240);
    line.setAttribute("y2", box2.offsetTop + 100);
    line.style.stroke = "black";
    line.style.strokeWidth = "2px";
    svg.appendChild(line);
  }

  for (var i = 0; i < 4; i++) {
    var box2 = document.getElementById("FM" + i + "_" + 0);
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", box2.offsetLeft + 230);
  line.setAttribute("y1", box2.offsetTop + 80);
  line.setAttribute("x2", box2.offsetLeft + 250);
  line.setAttribute("y2", box2.offsetTop + 100);
  line.style.stroke = "black";
  line.style.strokeWidth = "2px";
  svg.appendChild(line);
  }

  for (var i = 0; i < 4; i++) {
    var box2 = document.getElementById("FM" + i + "_" + 0);
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", box2.offsetLeft + 230);
  line.setAttribute("y1", box2.offsetTop + 120);
  line.setAttribute("x2", box2.offsetLeft + 250);
  line.setAttribute("y2", box2.offsetTop + 100);
  line.style.stroke = "black";
  line.style.strokeWidth = "2px";
  svg.appendChild(line);
  }

document.getElementById("svgContainer").appendChild(svg);

// hidden이 붙어있는 버튼 찾아서 hidden 없애기
var buttons = document.querySelectorAll('.hidden');
for (var i = 0; i < buttons.length; i++) {
buttons[i].classList.remove('hidden');
};
}


// 줌기능 구현 안함
window.onresize = function() {
svg = document.querySelector("svg");
if (svg) {
svg.parentNode.removeChild(svg);
}
createBoxes();
}
const zoomElement = document.querySelector(".container");
let zoom = 1;
const ZOOM_SPEED = 0.1;
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 1;

document.addEventListener("wheel", function (e) {
if (e.deltaY > 0 && zoom < MAX_ZOOM) {
zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
} else if (e.deltaY < 0 && zoom > MIN_ZOOM) {
zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
}
});

let initialDistance;
let currentZoom = 1;

zoomElement.addEventListener('touchstart', function (e) {
if (e.touches.length === 2) {
initialDistance = getDistance(e.touches[0], e.touches[1]);
}
});

zoomElement.addEventListener('touchmove', function (e) {
if (e.touches.length === 2) {
const currentDistance = getDistance(e.touches[0], e.touches[1]);
const zoomDelta = currentDistance / initialDistance;
currentZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, currentZoom * zoomDelta));
zoomElement.style.transform = `scale(${currentZoom})`;
}
});

function getDistance(touch1, touch2) {
const xDiff = touch1.clientX - touch2.clientX;
const yDiff = touch1.clientY - touch2.clientY;
return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}

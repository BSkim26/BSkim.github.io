function create_box_check(){
  svg = document.querySelector("svg");
    if (svg) {
    svg.parentNode.removeChild(svg);
    }  
    if(e==3){
      createBoxes_2();
    }
    else if(e==2){
      createBoxes_1();
    }
    else if(e==1){
      createBoxes();
    }
}

function createBoxes() {
  var rows = document.getElementById("inputNumber0").value;
  var columns = document.getElementById("inputNumber1").value;
  var depths = document.getElementById("inputNumber2").value;
  
  
  var f_width = document.getElementById("FilterNumber0_0").value;
  var f_height = document.getElementById("FilterNumber0_1").value;
  var f_count = document.getElementById("FilterNumber0_2").value;
  
  
  var outputNumber = document.getElementById("outputNumber").value;
  var outputNumber1 = document.getElementById("outputNumber1").value;
  var k=[];
  k[0]=0;
  k[1]=0;
  k[2]=0;
  k[3]=0;
  let boxes = document.getElementById("boxes");
  
  
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  // 함수가 재실행되면 앞서 만들었던 요소들을 없애줌
  while (boxes.firstChild) {
  boxes.removeChild(boxes.firstChild);
  }
  
  // 네모
  for (let j = 0; j < depths; j++) {
    k[0]+=1;
    var box = document.createElement("div");
    box.classList.add("box");
    box.id = "FM0_" + j;
    box.style.width = columns * 20 + "px";
    box.style.height = rows * 20 + "px";
    box.style.left = ((window.innerWidth / 7) + (5 * j)) + "px";
    box.style.top = ((window.innerHeight / 2- columns * 20/2) + (5 * j)) + "px";
    boxes.appendChild(box);
  
  }
  
  var box = document.createElement("div");
  box.classList.add("box");
  box.id = "FM0_" + k[0];
  box.style.width = columns * 5 + "px";
  box.style.height = rows * 5 + "px";
  box.style.left = ((window.innerWidth / 7) + (5 * (k[0]+1))) + "px";
  box.style.top = ((window.innerHeight / 2- columns * 20/2) + (5 * (k[0]+1))) + "px";
  box.style.stroke = "red";
  boxes.appendChild(box);
  

  for (let j = 0; j < f_count; j++) {
    k[1]+=1;
  var box = document.createElement("div");
  box.classList.add("box");
  box.id = "FM1_" + j;
  box.style.width = (columns-f_height +1) * 20 + "px";
  box.style.height = (rows-f_width+1) * 20 + "px";
  box.style.left = ((window.innerWidth / 3.5) + (5 * j)) + "px";
  box.style.top = ((window.innerHeight / 2 - (rows-f_width+1) * 20/2) + (5 * j)) + "px";
  boxes.appendChild(box);
  }
  
  
  var box = document.createElement("div");
  box.classList.add("box");
  box.id = "FM1_" + k[1];
  box.style.width = (columns-f_height +1) * 5 + "px";
  box.style.height = (rows-f_width+1) * 5 + "px";
  box.style.left = ((window.innerWidth / 3.5) + (5 * (k[1]+1))) + "px";
  box.style.top = ((window.innerHeight / 2 - (rows-f_width+1) * 20/2) + (5 * (k[1]+1))) + "px";
  box.style.stroke = "red";
  boxes.appendChild(box);
  
  //원
  

  for (let j = 0; j < ((columns-f_height +1))*((rows-f_width+1))*f_count; j++) {
  var box = document.createElement("div");
  box.classList.add("box");
  box.id = "box_" + j;
  box.style.borderRadius = "50%";
  box.style.width = 20 + "px";
  box.style.height = 20 + "px";
  box.style.left = (window.innerWidth /1.4) + "px";
  box.style.top = (window.innerHeight / 2 - ((columns-f_height +1))*(((rows-f_width+1))*f_count*30/2)) + (30 * j) + "px";
  boxes.appendChild(box);
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
  for(let d = 0; d < ((columns-f_height +1))*(((rows-f_width+1)))*f_count; d++){
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
  for(let d = 0; d < 1; d++){
    let c=d+1;
  let box2_1 = document.getElementById("FM" + d+"_"+k[d]);
  let box3_1 = document.getElementById("FM" + c+"_"+k[c]);
  var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", box2_1.offsetLeft + box2_1.offsetWidth);
  line.setAttribute("y1", box2_1.offsetTop );
  line.setAttribute("x2", box3_1.offsetLeft);
  line.setAttribute("y2", box3_1.offsetTop);
  line.style.stroke = "red";
  line.style.strokeWidth = "1px";
  svg.appendChild(line);
  }
  
  for(let d = 0; d < 1; d++){
    let c=d+1;
  let box2_1 = document.getElementById("FM" + d+"_"+k[d]);
  let box3_1 = document.getElementById("FM" + c+"_"+k[c]);
  var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", box2_1.offsetLeft + box2_1.offsetWidth);
  line.setAttribute("y1", box2_1.offsetTop + box2_1.offsetHeight);
  line.setAttribute("x2", box3_1.offsetLeft);
  line.setAttribute("y2", box3_1.offsetTop + box3_1.offsetHeight);
  line.style.stroke = "red";
  line.style.strokeWidth = "1px";
  svg.appendChild(line);
  }
  
    for(let d = 0; d < (columns-f_height +1)*(rows-f_width+1)*f_count; d++){
              let box2_1 = document.getElementById("FM1_"+0);
              let box3_1 = document.getElementById("box_" + d);
              var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
              line.setAttribute("x1", box2_1.offsetLeft + box2_1.offsetWidth/2);
              line.setAttribute("y1", box2_1.offsetTop + box2_1.offsetHeight/2);
              line.setAttribute("x2", box3_1.offsetLeft + box3_1.offsetWidth/2);
              line.setAttribute("y2", box3_1.offsetTop + box3_1.offsetHeight/2);
              line.style.stroke = "red";
              line.style.strokeWidth = "1px";
              svg.appendChild(line);
      }
  
    document.getElementById("svgContainer").appendChild(svg);
    
  // hidden이 붙어있는 버튼 찾아서 hidden 없애기
  var buttons = document.querySelectorAll('.hidden');
  for (var i = 0; i < buttons.length; i++) {
  buttons[i].classList.remove('hidden');
  };
  }

function createBoxes_1() {
  var rows = document.getElementById("inputNumber0").value;
  var columns = document.getElementById("inputNumber1").value;
  var depths = document.getElementById("inputNumber2").value;
  
  
  var f_width = document.getElementById("FilterNumber0_0").value;
  var f_height = document.getElementById("FilterNumber0_1").value;
  var f_count = document.getElementById("FilterNumber0_2").value;
  
  var f_width1 = document.getElementById("FilterNumber1_0").value;
  var f_height1 = document.getElementById("FilterNumber1_1").value;
  var f_count1 = document.getElementById("FilterNumber1_2").value;
  
  var outputNumber = document.getElementById("outputNumber").value;
  var outputNumber1 = document.getElementById("outputNumber1").value;
  var k=[];
  k[0]=0;
  k[1]=0;
  k[2]=0;
  k[3]=0;
  let boxes = document.getElementById("boxes");
  
  
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  // 함수가 재실행되면 앞서 만들었던 요소들을 없애줌
  while (boxes.firstChild) {
  boxes.removeChild(boxes.firstChild);
  }
  
  // 네모
  for (let j = 0; j < depths; j++) {
    k[0]+=1;
    var box = document.createElement("div");
    box.classList.add("box");
    box.id = "FM0_" + j;
    box.style.width = columns * 20 + "px";
    box.style.height = rows * 20 + "px";
    box.style.left = ((window.innerWidth / 7) + (5 * j)) + "px";
    box.style.top = ((window.innerHeight / 2- columns * 20/2) + (5 * j)) + "px";
    boxes.appendChild(box);
  
  }
  
  var box = document.createElement("div");
  box.classList.add("box");
  box.id = "FM0_" + k[0];
  box.style.width = columns * 5 + "px";
  box.style.height = rows * 5 + "px";
  box.style.left = ((window.innerWidth / 7) + (5 * (k[0]+1))) + "px";
  box.style.top = ((window.innerHeight / 2- columns * 20/2) + (5 * (k[0]+1))) + "px";
  box.style.stroke = "red";
  boxes.appendChild(box);
  
  if((columns)>=(columns-f_height +1)){
  if((rows)>=(rows-f_width+1))
  for (let j = 0; j < f_count; j++) {
    k[1]+=1;
  var box = document.createElement("div");
  box.classList.add("box");
  box.id = "FM1_" + j;
  box.style.width = (columns-f_height +1) * 20 + "px";
  box.style.height = (rows-f_width+1) * 20 + "px";
  box.style.left = ((window.innerWidth / 3.5) + (5 * j)) + "px";
  box.style.top = ((window.innerHeight / 2 - (rows-f_width+1) * 20/2) + (5 * j)) + "px";
  boxes.appendChild(box);
  
  }
  }
  
  var box = document.createElement("div");
  box.classList.add("box");
  box.id = "FM1_" + k[1];
  box.style.width = (columns-f_height +1) * 5 + "px";
  box.style.height = (rows-f_width+1) * 5 + "px";
  box.style.left = ((window.innerWidth / 3.5) + (5 * (k[1]+1))) + "px";
  box.style.top = ((window.innerHeight / 2 - (rows-f_width+1) * 20/2) + (5 * (k[1]+1))) + "px";
  box.style.stroke = "red";
  boxes.appendChild(box);
  
  if((columns-f_height +1)>=f_height1){
  if((rows-f_width+1)>=((rows-f_width+1)-f_width1))
  for (let j = 0; j < f_count1; j++) {
    k[2]+=1;
  var box = document.createElement("div");
  box.classList.add("box");
  box.id = "FM2_" + j;
  box.style.width = ((columns-f_height +1)-f_height1 +1) * 20 + "px";
  box.style.height = ((rows-f_width+1)-f_width1+1) * 20 + "px";
  box.style.left = ((window.innerWidth / 2.4) + (5 * j)) + "px";
  box.style.top = ((window.innerHeight / 2 - ((rows-f_width+1)-f_width1+1)*20/2) + (5 * j)) + "px";
  boxes.appendChild(box);
  
  }
  }
  
  var box = document.createElement("div");
  box.classList.add("box");
  box.id = "FM2_" + k[2];
  box.style.width = ((columns-f_height +1)-f_height1 +1) * 5 + "px";
  box.style.height = ((rows-f_width+1)-f_width1+1) * 5 + "px";
  box.style.left = ((window.innerWidth / 2.4) + (5 * (k[2]+1))) + "px";
  box.style.top = ((window.innerHeight / 2 - ((rows-f_width+1)-f_width1+1)*20/2) + (5 * (k[2]+1))) + "px";
  box.style.stroke = "red";
  boxes.appendChild(box);
  

  //원
  

  for (let j = 0; j < (((columns-f_height +1)-f_height1 +1))*(((rows-f_width+1)-f_width1+1))*f_count1; j++) {
  var box = document.createElement("div");
  box.classList.add("box");
  box.id = "box_" + j;
  box.style.borderRadius = "50%";
  box.style.width = 20 + "px";
  box.style.height = 20 + "px";
  box.style.left = (window.innerWidth /1.4) + "px";
  box.style.top = ((window.innerHeight / 2 - (((columns-f_height +1)-f_height1 +1))*(((rows-f_width+1)-f_width1+1))*f_count1*30/2)) + (30 * j) + "px";
  boxes.appendChild(box);
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
  for(let d = 0; d < (((columns-f_height +1)-f_height1 +1))*(((rows-f_width+1)-f_width1+1))*f_count1; d++){
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
  for(let d = 0; d < 2; d++){
    let c=d+1;
  let box2_1 = document.getElementById("FM" + d+"_"+k[d]);
  let box3_1 = document.getElementById("FM" + c+"_"+k[c]);
  var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", box2_1.offsetLeft + box2_1.offsetWidth);
  line.setAttribute("y1", box2_1.offsetTop );
  line.setAttribute("x2", box3_1.offsetLeft);
  line.setAttribute("y2", box3_1.offsetTop);
  line.style.stroke = "red";
  line.style.strokeWidth = "1px";
  svg.appendChild(line);
  }
  for(let d = 0; d < 2; d++){
    let c=d+1;
  let box2_1 = document.getElementById("FM" + d+"_"+k[d]);
  let box3_1 = document.getElementById("FM" + c+"_"+k[c]);
  var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", box2_1.offsetLeft + box2_1.offsetWidth);
  line.setAttribute("y1", box2_1.offsetTop + box2_1.offsetHeight);
  line.setAttribute("x2", box3_1.offsetLeft);
  line.setAttribute("y2", box3_1.offsetTop + box3_1.offsetHeight);
  line.style.stroke = "red";
  line.style.strokeWidth = "1px";
  svg.appendChild(line);
  }
  
    for(let d = 0; d < (((columns-f_height +1)-f_height1 +1))*(((rows-f_width+1)-f_width1+1))*f_count1; d++){
              let box2_1 = document.getElementById("FM2_"+0);
              let box3_1 = document.getElementById("box_" + d);
              var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
              line.setAttribute("x1", box2_1.offsetLeft + box2_1.offsetWidth/2);
              line.setAttribute("y1", box2_1.offsetTop + box2_1.offsetHeight/2);
              line.setAttribute("x2", box3_1.offsetLeft + box3_1.offsetWidth/2);
              line.setAttribute("y2", box3_1.offsetTop + box3_1.offsetHeight/2);
              line.style.stroke = "red";
              line.style.strokeWidth = "1px";
              svg.appendChild(line);
      }
  
    document.getElementById("svgContainer").appendChild(svg);
    
  // hidden이 붙어있는 버튼 찾아서 hidden 없애기
  var buttons = document.querySelectorAll('.hidden');
  for (var i = 0; i < buttons.length; i++) {
  buttons[i].classList.remove('hidden');
  };
  }


function createBoxes_2() {
var rows = document.getElementById("inputNumber0").value;
var columns = document.getElementById("inputNumber1").value;
var depths = document.getElementById("inputNumber2").value;


var f_width = document.getElementById("FilterNumber0_0").value;
var f_height = document.getElementById("FilterNumber0_1").value;
var f_count = document.getElementById("FilterNumber0_2").value;

var f_width1 = document.getElementById("FilterNumber1_0").value;
var f_height1 = document.getElementById("FilterNumber1_1").value;
var f_count1 = document.getElementById("FilterNumber1_2").value;

var f_width2 = document.getElementById("FilterNumber2_0").value;
var f_height2 = document.getElementById("FilterNumber2_1").value;
var f_count2 = document.getElementById("FilterNumber2_2").value;

var outputNumber = document.getElementById("outputNumber").value;
var outputNumber1 = document.getElementById("outputNumber1").value;
var k=[];
k[0]=0;
k[1]=0;
k[2]=0;
k[3]=0;
let boxes = document.getElementById("boxes");


var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
// 함수가 재실행되면 앞서 만들었던 요소들을 없애줌
while (boxes.firstChild) {
boxes.removeChild(boxes.firstChild);
}

// 네모
for (let j = 0; j < depths; j++) {
  k[0]+=1;
  var box = document.createElement("div");
  box.classList.add("box");
  box.id = "FM0_" + j;
  box.style.width = columns * 20 + "px";
  box.style.height = rows * 20 + "px";
  box.style.left = ((window.innerWidth / 7) + (5 * j)) + "px";
  box.style.top = ((window.innerHeight / 2- columns * 20/2) + (5 * j)) + "px";
  boxes.appendChild(box);

}

var box = document.createElement("div");
box.classList.add("box");
box.id = "FM0_" + k[0];
box.style.width = columns * 5 + "px";
box.style.height = rows * 5 + "px";
box.style.left = ((window.innerWidth / 7) + (5 * (k[0]+1))) + "px";
box.style.top = ((window.innerHeight / 2- columns * 20/2) + (5 * (k[0]+1))) + "px";
box.style.stroke = "red";
boxes.appendChild(box);

if((columns)>=(columns-f_height +1)){
if((rows)>=(rows-f_width+1))
for (let j = 0; j < f_count; j++) {
  k[1]+=1;
var box = document.createElement("div");
box.classList.add("box");
box.id = "FM1_" + j;
box.style.width = (columns-f_height +1) * 20 + "px";
box.style.height = (rows-f_width+1) * 20 + "px";
box.style.left = ((window.innerWidth / 3.5) + (5 * j)) + "px";
box.style.top = ((window.innerHeight / 2 - (rows-f_width+1) * 20/2) + (5 * j)) + "px";
boxes.appendChild(box);

}
}

var box = document.createElement("div");
box.classList.add("box");
box.id = "FM1_" + k[1];
box.style.width = (columns-f_height +1) * 5 + "px";
box.style.height = (rows-f_width+1) * 5 + "px";
box.style.left = ((window.innerWidth / 3.5) + (5 * (k[1]+1))) + "px";
box.style.top = ((window.innerHeight / 2 - (rows-f_width+1) * 20/2) + (5 * (k[1]+1))) + "px";
box.style.stroke = "red";
boxes.appendChild(box);

if((columns-f_height +1)>=f_height1){
if((rows-f_width+1)>=((rows-f_width+1)-f_width1))
for (let j = 0; j < f_count1; j++) {
  k[2]+=1;
var box = document.createElement("div");
box.classList.add("box");
box.id = "FM2_" + j;
box.style.width = ((columns-f_height +1)-f_height1 +1) * 20 + "px";
box.style.height = ((rows-f_width+1)-f_width1+1) * 20 + "px";
box.style.left = ((window.innerWidth / 2.4) + (5 * j)) + "px";
box.style.top = ((window.innerHeight / 2 - ((rows-f_width+1)-f_width1+1)*20/2) + (5 * j)) + "px";
boxes.appendChild(box);

}
}

var box = document.createElement("div");
box.classList.add("box");
box.id = "FM2_" + k[2];
box.style.width = ((columns-f_height +1)-f_height1 +1) * 5 + "px";
box.style.height = ((rows-f_width+1)-f_width1+1) * 5 + "px";
box.style.left = ((window.innerWidth / 2.4) + (5 * (k[2]+1))) + "px";
box.style.top = ((window.innerHeight / 2 - ((rows-f_width+1)-f_width1+1)*20/2) + (5 * (k[2]+1))) + "px";
box.style.stroke = "red";
boxes.appendChild(box);

if(((columns-f_height +1)-f_height1 +1)>=f_height2){
if(((rows-f_width+1)-f_width1+1)>=f_width2)
for (let j = 0; j < f_count2; j++) {
  k[3]+=1;
var box = document.createElement("div");
box.classList.add("box");
box.id = "FM3_" + j;
box.style.width = (((columns-f_height +1)-f_height1 +1)-f_height2 +1) * 20 + "px";
box.style.height = (((rows-f_width+1)-f_width1+1)-f_width2+1) * 20 + "px";
box.style.left = ((window.innerWidth /1.8) + (5 * j)) + "px";
box.style.top = ((window.innerHeight / 2 - (((rows-f_width+1)-f_width1+1)-f_width2+1) * 20/2) + (5 * j)) + "px";
boxes.appendChild(box);
}
}

var box = document.createElement("div");
box.classList.add("box");
box.id = "FM3_" + k[3];
box.style.width = (((columns-f_height +1)-f_height1 +1)-f_height2 +1) * 5 + "px";
box.style.height = (((rows-f_width+1)-f_width1+1)-f_width2+1) * 5 + "px";
box.style.left = ((window.innerWidth /1.8) + (5 * (k[3]+1))) + "px";
box.style.top = ((window.innerHeight / 2 - (((rows-f_width+1)-f_width1+1)-f_width2+1) * 20/2) + (5 * (k[3]+1))) + "px";
box.style.stroke = "red";
boxes.appendChild(box);
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
for(let d = 0; d < 3; d++){
  let c=d+1;
let box2_1 = document.getElementById("FM" + d+"_"+k[d]);
let box3_1 = document.getElementById("FM" + c+"_"+k[c]);
var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
line.setAttribute("x1", box2_1.offsetLeft + box2_1.offsetWidth);
line.setAttribute("y1", box2_1.offsetTop );
line.setAttribute("x2", box3_1.offsetLeft);
line.setAttribute("y2", box3_1.offsetTop);
line.style.stroke = "red";
line.style.strokeWidth = "1px";
svg.appendChild(line);
}
for(let d = 0; d < 3; d++){
  let c=d+1;
let box2_1 = document.getElementById("FM" + d+"_"+k[d]);
let box3_1 = document.getElementById("FM" + c+"_"+k[c]);
var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
line.setAttribute("x1", box2_1.offsetLeft + box2_1.offsetWidth);
line.setAttribute("y1", box2_1.offsetTop + box2_1.offsetHeight);
line.setAttribute("x2", box3_1.offsetLeft);
line.setAttribute("y2", box3_1.offsetTop + box3_1.offsetHeight);
line.style.stroke = "red";
line.style.strokeWidth = "1px";
svg.appendChild(line);
}

  for(let d = 0; d < (((columns-f_height +1)-f_height1 +1)-f_height2 +1)*(((rows-f_width+1)-f_width1+1)-f_width2+1)*f_count2; d++){
            let box2_1 = document.getElementById("FM3_"+0);
            let box3_1 = document.getElementById("box_" + d);
            var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", box2_1.offsetLeft + box2_1.offsetWidth/2);
            line.setAttribute("y1", box2_1.offsetTop + box2_1.offsetHeight/2);
            line.setAttribute("x2", box3_1.offsetLeft + box3_1.offsetWidth/2);
            line.setAttribute("y2", box3_1.offsetTop + box3_1.offsetHeight/2);
            line.style.stroke = "red";
            line.style.strokeWidth = "1px";
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

var e=0;
$(document).ready(function() {
  var index = 0;
  
  $("#architecture").on("click", ".btn-add", function() {
    var inputGroup = null;
    if(e<3){
    inputGroup = `
    <div class="row entry">
    <span class="input-group mb-2 mr-sm-2 col-4">
        필터 크기<br>
        rows : <input type="number" id="FilterNumber${index}_0" placeholder="Enter a number"></input>
        columns : <input type="number" id="FilterNumber${index}_1" placeholder="Enter a number"></input>
        count : <input type="number" id="FilterNumber${index}_2" placeholder="Enter a number"></input>
    </span>
    `;
    $("#architecture").append(inputGroup);
    index++;
    }
    else{
      alert('필터는 최대 3개까지 추가할 수 있습니다.');
    }
    e++;
  });
});



$(document).on('click', '.btn-remove', function(e) {
  e.preventDefault();

  $(this).parents('.entry:first').remove();

  restart();

  return false;

});

var body = document.body;

var architecture = document.getElementById("architecture");
architecture.style.height = body.offsetHeight*8/10 + "px";
architecture.style.overflow = "scroll";

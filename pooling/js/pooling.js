// Copyright 2023 Kim Bumsoo

var a=null;



function createBoxes_time() {
    svg = document.querySelector("svg");
    if (svg) {
      svg.parentNode.removeChild(svg);
    }
    a= setTimeout(createBoxes_1, 400);
}

function Boxes_check() {
  if (document.getElementById("inputNumber").value >= 5 || document.getElementById("inputNumber").value <= 0 
  || document.getElementById("inputNumber2").value >= 5 || document.getElementById("inputNumber2").value <= 0
  || document.getElementById("FilterNumber").value >= 5 || document.getElementById("FilterNumber").value <= 0 
  || document.getElementById("FilterNumber2").value >= 5|| document.getElementById("FilterNumber2").value <= 0
  || $('input[name=outputNumber]').val() >= 5|| $('input[name=outputNumber]').val() <= -1) 
  {
    alert('0, 음수, 5이상은 입력할 수 없습니다.');
  } 
  else if (document.getElementById("inputNumber").value < document.getElementById("FilterNumber").value 
  || document.getElementById("inputNumber2").value < document.getElementById("FilterNumber2").value) 
  {
    alert('필터가 Input Feature map보다 클 수 없습니다.');
  } 
  else if(((document.getElementById("inputNumber").value-document.getElementById("FilterNumber").value) % document.getElementById("s_Number").value!=0)||
          ((document.getElementById("inputNumber2").value-document.getElementById("FilterNumber2").value) % document.getElementById("s_Number2").value!=0)){
    alert('parameter들을 다시 조절해주세요');
  }
  else {
    createBoxes_1();
  }
}

function createBoxes_1() {
    svg = document.querySelector("svg");
    if (svg) {
      svg.parentNode.removeChild(svg);
    }
    createBoxes();
    }


    function createBoxes() {
      let inputNumber = document.getElementById("inputNumber").value;
      let inputNumber2 = document.getElementById("inputNumber2").value;
      let s_Number = document.getElementById("s_Number").value;
      let s_Number2 = document.getElementById("s_Number2").value;        
      let FilterNumber = document.getElementById("FilterNumber").value;
      let FilterNumber2 = document.getElementById("FilterNumber2").value;
      let outputNumber = $('input[name=outputNumber]').val();
      let boxes = document.getElementById("boxes");
      let boxes2 = document.getElementById("boxes2");
      let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    
    // Remove any existing boxes
    while (boxes.firstChild) {
      boxes.removeChild(boxes.firstChild);
    }
    while (boxes2.firstChild) {
      boxes2.removeChild(boxes2.firstChild);
    }
    while (boxes3.firstChild) {
      boxes3.removeChild(boxes3.firstChild);
    }

    // Create nxn boxes
    for (let i = 0; i < inputNumber; i++) {
      for (let j = 0; j < inputNumber2; j++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.id = "box_" + i + "_" + j;
        boxes.appendChild(box);
      }
      let breakLine = document.createElement("br");
      boxes.appendChild(breakLine);
    }

    // Create Circle
    for (let i = 0; i < (inputNumber-FilterNumber)/parseInt(s_Number)+1; i++) {
      for (let j = 0; j < (inputNumber2-FilterNumber2)/parseInt(s_Number2)+1; j++) {
        let box = document.createElement("div");
        box.classList.add("box2");
        box.id = "box2_" + i + "_" + j;
        boxes2.appendChild(box);
      }
      let breakLine = document.createElement("br");
      boxes2.appendChild(breakLine);
    }

    for (let i = 0; i < outputNumber; i++) {
      let box = document.createElement("div");
      box.classList.add("box3");
          box.id = "box3_" + i;
      boxes3.appendChild(box);
  }

    let colors = ["red", "blue", "green",  "linen", "orange","lime","coral","cyan","darkgray"];
    // Create and add lines to svg element
    for(let a = 0; a < (inputNumber2-FilterNumber2)/parseInt(s_Number2)+1; a++){
      for(let b = 0; b < (inputNumber-FilterNumber)/parseInt(s_Number)+1; b++){
          for (let i = 0; i < FilterNumber; i++) {
              for (let j = 0; j < FilterNumber2; j++) {
                let p1 = Math.floor(Math.random() * FilterNumber);
                let p2 = Math.floor(Math.random() * FilterNumber2);
                  let box = document.getElementById("box_" + (i+parseInt(s_Number)*b) + "_" + (j+parseInt(s_Number2)*a));
                  let box2 = document.getElementById("box2_" + b+"_"+a);

                  if(i==0&&j==0){
                    left_off=box.offsetLeft;
                    left_off_h= box.offsetTop;
                    left=box.offsetLeft + box.offsetWidth/2;
                    left_h=box.offsetTop + box.offsetHeight/2;
                    box = document.getElementById("box_" + (p1+parseInt(s_Number)*b) + "_" + (p2+parseInt(s_Number2)*a));
                    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                    line.setAttribute("x1", box.offsetLeft + box.offsetWidth/2);
                    line.setAttribute("y1", box.offsetTop + box.offsetHeight/2);
                    line.setAttribute("x2", box2.offsetLeft + box2.offsetWidth/2);
                    line.setAttribute("y2", box2.offsetTop + box2.offsetHeight/2);
                    line.style.stroke = colors[(a+b*(inputNumber2-FilterNumber2+1)) % colors.length];
                    line.style.strokeWidth = "2px";
                    svg.appendChild(line);

                    const text = document.createElement("div");
                    text.innerHTML = "Max";
                    text.style.position = "absolute";
                    text.style.left = box.offsetLeft + box.offsetWidth/2 + "px";
                    text.style.top = box.offsetTop + box.offsetHeight/2 + "px";
                    text.style.textAlign = "center";
                    text.style.transform = "translate(-50%, -50%)";
                    box.appendChild(text);
                  }

                  if(i==0&&j==1)
                  {
                    right_off=box.offsetLeft;
                    right=box.offsetLeft + box.offsetWidth/2;
                  }
                  if(i==1&&j==0)
                  {
                    right_off_h= box.offsetTop;
                    right_h=box.offsetTop + box.offsetHeight/2;
                  }
                  if(FilterNumber!=1&&FilterNumber2!=1){
                    if(i==(FilterNumber-1)&&j==(FilterNumber2-1)){
                      // Create a rectangle that covers the starting point of the line
                      let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                      rect.setAttribute("x", left_off);
                      rect.setAttribute("y", left_off_h);
                      rect.setAttribute("width", (right-left) * (FilterNumber2)-(right_off-left_off-2*box.offsetWidth/2));
                      rect.setAttribute("height", (right_h-left_h)* (FilterNumber)-(right_off_h-left_off_h-2*box.offsetHeight/2));
                      rect.style.strokeWidth = "3px";
                      rect.style.fill = "none";
                      rect.style.stroke = colors[(a + b * (inputNumber2 - FilterNumber2 + 1)) % colors.length];
                      svg.appendChild(rect);
                      }
                  }
                  else
                  {
                      let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                      rect.setAttribute("x", left_off);
                      rect.setAttribute("y", left_off_h);
                      rect.setAttribute("width", box.offsetWidth);
                      rect.setAttribute("height", box.offsetHeight);
                      rect.style.strokeWidth = "3px";
                      rect.style.fill = "none";
                      rect.style.stroke = colors[(a + b * (inputNumber2 - FilterNumber2 + 1)) % colors.length];
                      svg.appendChild(rect);
                  }
                  
              }
          }
      }
    }
    for(let c = 0; c < outputNumber; c++){
      for(let d = 0; d < (inputNumber-FilterNumber)/parseInt(s_Number)+1; d++){
        for(let e = 0; e < (inputNumber2-FilterNumber2)/parseInt(s_Number2)+1; e++){
                  let box2_1 = document.getElementById("box2_" + d+"_"+e);
                  let box3_1 = document.getElementById("box3_" + c);
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
        }

        for(let c = 0; c < outputNumber; c++){
          for(let d = 0; d < (inputNumber-FilterNumber)/parseInt(s_Number)+1; d++){
            for(let e = 0; e < (inputNumber2-FilterNumber2)/parseInt(s_Number)+1; e++){
                      let box2_1 = document.getElementById("box2_" + d+"_"+e);
                      let box3_1 = document.getElementById("box3_" + c);
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
        }

        
    // Add svg element to body
     document.getElementById("svgContainer").appendChild(svg);
  }

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


var a=null;
function createBoxes_time() {
    svg = document.querySelector("svg");
    if (svg) {
      svg.parentNode.removeChild(svg);
    }
    a= setTimeout(createBoxes_1, 400);
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

    // Create 2n boxes
    for (let i = 0; i < inputNumber*inputNumber2; i++) {
        let box = document.createElement("div");
        box.classList.add("box2");
            box.id = "box2_" + i;
        boxes2.appendChild(box);
    }

    // Create and add lines to svg element
    for (let i = 0; i < inputNumber; i++) {
      for (let j = 0; j < inputNumber2; j++) {
        let box = document.getElementById("box_" + i + "_" + j);
        let box2 = document.getElementById("box2_" + (i*inputNumber2 + j));
        let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", box.offsetLeft + box.offsetWidth/2);
        line.setAttribute("y1", box.offsetTop + box.offsetHeight/2);
        line.setAttribute("x2", box2.offsetLeft + box2.offsetWidth/2);
        line.setAttribute("y2", box2.offsetTop + box2.offsetHeight/2);
        line.style.stroke = "black";
        line.style.strokeWidth = "2px";
        svg.appendChild(line);
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
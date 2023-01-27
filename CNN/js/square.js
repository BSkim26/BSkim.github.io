var v1=2;
var v2=2;

square_1=square(v1, v2);

function load(a1, a2){
  var v1=parseInt(a1);
  var v2=parseInt(a2);
  square_1=square(v1, v2);
}

function square(a1, a2) {
    var tag = "<table border='1'>";
    var b1 = parseInt(a1);
    var b2 = parseInt(a2);
    for (j = 1; j <= b1; j++) {
      tag += "<tr>";
      for (i = 1; i <= b2; i++) {
        tag += "<td>"+"<div id=\"a"+j+i+"\"class=\"draggable\">"+j+"."+i+"</td>";
      }
      tag += "</tr>";
    }
    tag += "</table>";
    area.innerHTML = tag;
    
    var tag2 = "<table frame=void>";
    for (j = 1; j <= b1*b2; j++) {
      tag2 += "<tr>";
      
        tag2 += "<td>"+"<div id=\"b"+j+"\"class=\"draggable right\">"+"O"+"</td>";
      
      tag2 += "</tr>";
    }
    tag2 += "</table>";
    area2.innerHTML = tag2;
  }


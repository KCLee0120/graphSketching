$('#functionSelect')
  .dropdown({
    action: 'activate',
    onChange: function(value, text, $selectedItem) {
      $("#inputForm").empty();
      if(value==0)
        showPointInput();
      else if(value==1)
        showLineSegmentInput();
      else if(value==2)
        showStraightLineInput();
      else if(value==3)
        showQuadraticAInput();
      else if(value==4)
        showQuadraticBInput();
      else if(value==5)
        showCircleAInput();
      else if(value==6)
        showCircleBInput();
      else if(value==7)
        showExponentialInput();
      else if(value==8)
        showLogarithmicInput();
      else if(value==9)
        showTrigonometricInput();
      else if(value==10)
        showTrigonometric2Input();
    }
  })
;

//Call sketching function when the sketch button is clicked
$( "#sketchBtn" ).click(function() {
  sketching();
})

$('.ui.checkbox')
  .checkbox()
;

document.getElementById("majorCheck").addEventListener('change', (event) => {
  if (event.target.checked) {
    document.getElementById("minorCheck").checked = false;
  }
})

document.getElementById("minorCheck").addEventListener('change', (event) => {
  if (event.target.checked) {
    document.getElementById("majorCheck").checked = false;
  }
})

function showPointInput(){

  $("<p>").html("<h5>Input the x-coordinate, y-coordinate, size and color of the point.</h5>").appendTo("#inputForm");

  $("<input>").attr({
    id: 'x-cor',
    placeholder: 'x-coordinate',
    type: 'text',
    step: 'any',
    size: '8',
  }).width(150).appendTo("#inputForm");

  $("<input>").attr({
    id: 'y-cor',
    placeholder: 'y-coordinate',
    type: 'text',
    step: 'any',
    size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");

  $("<input>").attr({
    id: 'pointRadius',
    type: 'text',
    value: '6',
    size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");

  $("<span>").attr({
    id: 'colorDiv',
  }).css({marginLeft:'20px',marginTop:'4px'}).appendTo("#inputForm");

  $("<input>").attr({
    id: 'pointColor',
    type: 'color',
    value: '#000000',
  }).appendTo("#colorDiv");

  $('#pointColor').kendoColorPicker();
}

function showLineSegmentInput(){
    $("<p>").attr({
    id: 'statement',
  }).html("<h5>Input $x_1$, $y_1$, $x_2$ and $y_2$, line width and color of the line segment from $A({x_1}, {y_1})$ to $B({x_2}, {y_2})$.</h5>").appendTo("#inputForm");
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, $("#statement").innerHTML]);

  $("<input>").attr({
    id: 'x1',
    placeholder: 'x1',
    type: 'text',
    step: 'any',
    size: '8',
  }).width(150).appendTo("#inputForm");

  $("<input>").attr({
    id: 'y1',
    placeholder: 'y1',
    type: 'text',
    step: 'any',
    size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");

  $("<input>").attr({
    id: 'x2',
    placeholder: 'x2',
    type: 'text',
    step: 'any',
    size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");

  $("<input>").attr({
    id: 'y2',
    placeholder: 'y2',
    type: 'text',
    step: 'any',
    size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");

  $("<input>").attr({
    id: 'lineWidth',
    type: 'text',
    value: '4',
    size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");

  $("<span>").attr({
    id: 'colorDiv',
  }).css({marginLeft:'20px',marginTop:'4px'}).appendTo("#inputForm");

  $("<input>").attr({
    id: 'lineColor',
    type: 'color',
    value: '#000000',
  }).appendTo("#colorDiv");

  $('#lineColor').kendoColorPicker();

}

function showStraightLineInput(){
    $("<p>").attr({
    id: 'statement',
  }).html("<h5>Input coefficients $A$, $B$ and $C$, line width and color of the straight line $Ax+By+C=0$.</h5>").appendTo("#inputForm");
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, $("#statement").innerHTML]);

  $("<input>").attr({
    id: 'A',
    placeholder: 'A',
    type: 'text',
    step: 'any',
    size: '8',
  }).width(150).appendTo("#inputForm");

  $("<input>").attr({
    id: 'B',
    placeholder: 'B',
    type: 'text',
    step: 'any',
    size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");

  $("<input>").attr({
    id: 'C',
    placeholder: 'C',
    type: 'text',
    step: 'any',
    size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");

  $("<input>").attr({
    id: 'lineWidth',
    type: 'text',
    value: '4',
    size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");

  $("<span>").attr({
    id: 'colorDiv',
  }).css({marginLeft:'20px',marginTop:'4px'}).appendTo("#inputForm");

  $("<input>").attr({
    id: 'lineColor',
    type: 'color',
    value: '#000000',
  }).appendTo("#colorDiv");

  $('#lineColor').kendoColorPicker();

}

function showQuadraticAInput(){
    $("<p>").attr({
    id: 'statement',
  }).html("<h5>Input coefficients $a$, $b$ and $c$, line width and color of the quadratic graph $y=ax^2+bx+c$.</h5>").appendTo("#inputForm");
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, $("#statement").innerHTML]);

  $("<input>").attr({
    id: 'a',
    placeholder: 'a',
    type: 'text',
    step: 'any',
    size: '8',
  }).width(150).appendTo("#inputForm");

  $("<input>").attr({
    id: 'b',
    placeholder: 'b',
    type: 'text',
    step: 'any',
    size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");

  $("<input>").attr({
    id: 'c',
    placeholder: 'c',
    type: 'text',
    step: 'any',
    size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");

  $("<input>").attr({
    id: 'lineWidth',
    type: 'text',
    value: '4',
    size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");

  $("<span>").attr({
    id: 'colorDiv',
  }).css({marginLeft:'20px',marginTop:'4px'}).appendTo("#inputForm");

  $("<input>").attr({
    id: 'lineColor',
    type: 'color',
    value: '#000000',
  }).appendTo("#colorDiv");

  $('#lineColor').kendoColorPicker();

}

function showQuadraticBInput(){
    $("<p>").attr({
    id: 'statement',
  }).html("<h5>Input $a$, $h$ and $k$, line width and color of the quadratic graph $y=a(x-h)^2+k$.</h5>").appendTo("#inputForm");
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, $("#statement").innerHTML]);

  $("<input>").attr({
    id: 'a',
    placeholder: 'a',
    type: 'text',
    step: 'any',
    size: '8',
  }).width(150).appendTo("#inputForm");

  $("<input>").attr({
    id: 'h',
    placeholder: 'h',
    type: 'text',
    step: 'any',
    size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");

  $("<input>").attr({
    id: 'k',
    placeholder: 'k',
    type: 'text',
    step: 'any',
    size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");

  $("<input>").attr({
    id: 'lineWidth',
    type: 'text',
    value: '4',
    size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");

  $("<span>").attr({
    id: 'colorDiv',
  }).css({marginLeft:'20px',marginTop:'4px'}).appendTo("#inputForm");

  $("<input>").attr({
    id: 'lineColor',
    type: 'color',
    value: '#000000',
  }).appendTo("#colorDiv");

  $('#lineColor').kendoColorPicker();

}

function showCircleAInput(){
    $("<p>").attr({
    id: 'statement',
  }).html("<h5>Input $h$, $k$ and $r^2$, line width and color of the circle $(x-h)^2+(y-k)^2=r^2$.</h5>").appendTo("#inputForm");
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, $("#statement").innerHTML]);

  $("<input>").attr({
    id: 'h',
    placeholder: 'h',
    type: 'text',
    step: 'any',
    size: '8',
  }).width(150).appendTo("#inputForm");

  $("<input>").attr({
    id: 'k',
    placeholder: 'k',
    type: 'text',
    step: 'any',
    size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");

  $("<input>").attr({
    id: 'r',
    placeholder: 'r^2',
    type: 'text',
    step: 'any',
    size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");


  $("<input>").attr({
    id: 'lineWidth',
    type: 'text',
    value: '4',
    size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");

  $("<span>").attr({
    id: 'colorDiv',
  }).css({marginLeft:'20px',marginTop:'4px'}).appendTo("#inputForm");

  $("<input>").attr({
    id: 'lineColor',
    type: 'color',
    value: '#000000',
  }).appendTo("#colorDiv");

  $('#lineColor').kendoColorPicker();

}

function showCircleBInput(){
  $("<p>").attr({
  id: 'statement',
}).html("<h5>Input coefficients $D$, $E$ and $F$, line width and color of the circle $x^2+y^2+Dx+Ey+F=0$.</h5>").appendTo("#inputForm");
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, $("#statement").innerHTML]);

  $("<input>").attr({
  id: 'D',
  placeholder: 'D',
  type: 'text',
  step: 'any',
  size: '8',
  }).width(150).appendTo("#inputForm");

  $("<input>").attr({
  id: 'E',
  placeholder: 'E',
  type: 'text',
  step: 'any',
  size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");

  $("<input>").attr({
  id: 'F',
  placeholder: 'F',
  type: 'text',
  step: 'any',
  size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");

  $("<input>").attr({
  id: 'lineWidth',
  type: 'text',
  value: '4',
  size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");

  $("<span>").attr({
    id: 'colorDiv',
  }).css({marginLeft:'20px',marginTop:'4px'}).appendTo("#inputForm");

  $("<input>").attr({
    id: 'lineColor',
    type: 'color',
    value: '#000000',
  }).appendTo("#colorDiv");

  $('#lineColor').kendoColorPicker();

}

function showExponentialInput(){
  $("<p>").attr({
  id: 'statement',
}).html("<h5>Input $a$, $b$, line width and color of the exponential function $y=ab^x+c$</h5>").appendTo("#inputForm");
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, $("#statement").innerHTML]);

  $("<input>").attr({
  id: 'a',
  placeholder: 'a',
  type: 'text',
  step: 'any',
  size: '8',
  }).width(150).appendTo("#inputForm");

  $("<input>").attr({
  id: 'b',
  placeholder: 'b',
  type: 'text',
  step: 'any',
  size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");

  $("<input>").attr({
  id: 'c',
  placeholder: 'c',
  type: 'text',
  step: 'any',
  size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");

  $("<input>").attr({
  id: 'lineWidth',
  type: 'text',
  value: '4',
  size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");

  $("<span>").attr({
    id: 'colorDiv',
  }).css({marginLeft:'20px',marginTop:'4px'}).appendTo("#inputForm");

  $("<input>").attr({
    id: 'lineColor',
    type: 'color',
    value: '#000000',
  }).appendTo("#colorDiv");

  $('#lineColor').kendoColorPicker();

}

function showLogarithmicInput(){
  $("<p>").attr({
  id: 'statement',
}).html("<h5>Input $a$, $b$, $c$, line width and color of the logarithmic function $y=alog_b (x+c)$</h5>").appendTo("#inputForm");
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, $("#statement").innerHTML]);

  $("<input>").attr({
  id: 'a',
  placeholder: 'a',
  type: 'text',
  step: 'any',
  size: '8',
  }).width(150).appendTo("#inputForm");

  $("<input>").attr({
  id: 'b',
  placeholder: 'b',
  type: 'text',
  step: 'any',
  size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");

  $("<input>").attr({
  id: 'c',
  placeholder: 'c',
  type: 'text',
  step: 'any',
  size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");

  $("<input>").attr({
  id: 'lineWidth',
  type: 'text',
  value: '4',
  size: '8',
  }).width(150).css({marginLeft:'20px'}).appendTo("#inputForm");

  $("<span>").attr({
    id: 'colorDiv',
  }).css({marginLeft:'20px',marginTop:'4px'}).appendTo("#inputForm");

  $("<input>").attr({
    id: 'lineColor',
    type: 'color',
    value: '#000000',
  }).appendTo("#colorDiv");

  $('#lineColor').kendoColorPicker();

}

function showTrigonometricInput(){
  $("<p>").attr({
  id: 'statement',
}).html("<h5>Input $a$, $b$, $c$ and $d$, line width and color of the trigonometric function $y=asin(bx+c)+d$</h5>").appendTo("#inputForm");
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, $("#statement").innerHTML]);

  $("<div>").attr({
    class: 'ui selection dropdown',
    id: 'selectTrigo',
  }).appendTo("#inputForm");

  $("<i>").attr({
    class:'dropdown icon',
  }).appendTo("#selectTrigo");

  $("<div>").attr({
    class: 'default text',
  }).html("Select Trigo Function").appendTo("#selectTrigo");

  $("<div>").attr({
    id: 'trigoMenu',
    class: 'menu',
  }).appendTo("#selectTrigo");

  $("<div>").attr({
    class: "item",
  }).html("sin").appendTo("#trigoMenu");

  $("<div>").attr({
    class: "item",
  }).html("cos").appendTo("#trigoMenu");

  $("<div>").attr({
    class: "item",
  }).html("tan").appendTo("#trigoMenu");

  $('#selectTrigo').dropdown({
    action: 'activate',
    onChange: function(value, text, $selectedItem) {
      if(value=="sin")
        $("#statement").html("<h5>Input $a$, $b$, $c$ and $d$, line width and color of the trigonometric function $y=asin(bx+c)+d$</h5>");
      else if (value == "cos")
        $("#statement").html("<h5>Input $a$, $b$, $c$ and $d$, line width and color of the trigonometric function $y=acos(bx+c)+d$</h5>");
      else if (value == "tan")
        $("#statement").html("<h5>Input $a$, $b$, $c$ and $d$, line width and color of the trigonometric function $y=atan(bx+c)+d$</h5>");
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, $("#statement").innerHTML]);
    }
  });

  $("<input>").attr({
  id: 'a',
  placeholder: 'a',
  type: 'text',
  step: 'any',
  size: '8',
}).width(150).css({marginLeft:'20px', marginTop:'8px'}).appendTo("#inputForm");

  $("<input>").attr({
  id: 'b',
  placeholder: 'b',
  type: 'text',
  step: 'any',
  size: '8',
}).width(150).css({marginLeft:'20px', marginTop:'8px'}).appendTo("#inputForm");

  $("<input>").attr({
  id: 'c',
  placeholder: 'c',
  type: 'text',
  step: 'any',
  size: '8',
}).width(150).css({marginLeft:'20px', marginTop:'8px'}).appendTo("#inputForm");

  $("<input>").attr({
  id: 'd',
  placeholder: 'd',
  type: 'text',
  step: 'any',
  size: '8',
}).width(150).css({marginLeft:'20px', marginTop:'8px'}).appendTo("#inputForm");

  $("<input>").attr({
  id: 'lineWidth',
  type: 'text',
  value: '4',
  size: '8',
}).width(150).css({marginLeft:'20px', marginTop:'8px'}).appendTo("#inputForm");

$("<span>").attr({
  id: 'colorDiv',
}).css({marginLeft:'20px',marginTop:'8px'}).appendTo("#inputForm");

$("<input>").attr({
  id: 'lineColor',
  type: 'color',
  value: '#000000',
}).appendTo("#colorDiv");

$('#lineColor').kendoColorPicker();

}

function showTrigonometric2Input(){
  $("<p>").attr({
  id: 'statement',
}).html("<h5>Input $a$, $b$ and $c$, line width and color of the trigonometric function $y=asinx+bcosx+c$</h5>").appendTo("#inputForm");
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, $("#statement").innerHTML]);


  $("<input>").attr({
  id: 'a',
  placeholder: 'a',
  type: 'text',
  step: 'any',
  size: '8',
}).width(150).css({marginLeft:'20px', marginTop:'8px'}).appendTo("#inputForm");

  $("<input>").attr({
  id: 'b',
  placeholder: 'b',
  type: 'text',
  step: 'any',
  size: '8',
}).width(150).css({marginLeft:'20px', marginTop:'8px'}).appendTo("#inputForm");

  $("<input>").attr({
  id: 'c',
  placeholder: 'c',
  type: 'text',
  step: 'any',
  size: '8',
}).width(150).css({marginLeft:'20px', marginTop:'8px'}).appendTo("#inputForm");

  $("<input>").attr({
  id: 'lineWidth',
  type: 'text',
  value: '4',
  size: '8',
}).width(150).css({marginLeft:'20px', marginTop:'8px'}).appendTo("#inputForm");

$("<span>").attr({
  id: 'colorDiv',
}).css({marginLeft:'20px',marginTop:'8px'}).appendTo("#inputForm");

$("<input>").attr({
  id: 'lineColor',
  type: 'color',
  value: '#000000',
}).appendTo("#colorDiv");

$('#lineColor').kendoColorPicker();

}

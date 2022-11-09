function sketching(){

  if(document.getElementById("majorCheck").checked == true){
    plotMajorGrid(parseFloat($("#xMin").val()), parseFloat($("#xMax").val()), parseFloat($("#yMin").val()), parseFloat($("#yMax").val()), parseFloat($("#scale").val()));
  }else if(document.getElementById("minorCheck").checked == true){
    plotMajorMinorGrid(parseFloat($("#xMin").val()), parseFloat($("#xMax").val()), parseFloat($("#yMin").val()), parseFloat($("#yMax").val()), parseFloat($("#scale").val()));
  }

  drawAxis(parseFloat($("#xMin").val()), parseFloat($("#xMax").val()), parseFloat($("#yMin").val()), parseFloat($("#yMax").val()));

  if($("#functionSelect").dropdown('get value') == 0){
    plotPoint(parseFloat($("#xMin").val()), parseFloat($("#xMax").val()), parseFloat($("#yMin").val()), parseFloat($("#yMax").val()));
    showPointDetail();
  }
  else if($("#functionSelect").dropdown('get value') == 1){
    plotLineSegment(parseFloat($("#xMin").val()), parseFloat($("#xMax").val()), parseFloat($("#yMin").val()), parseFloat($("#yMax").val()));
    showLineSgementDetail();
  }
  else if($("#functionSelect").dropdown('get value') == 2){
    plotStraightLine(parseFloat($("#xMin").val()), parseFloat($("#xMax").val()), parseFloat($("#yMin").val()), parseFloat($("#yMax").val()));
    showStraightLineDetail();
  }
  else if($("#functionSelect").dropdown('get value') == 3){
    plotQuadraticA(parseFloat($("#xMin").val()), parseFloat($("#xMax").val()), parseFloat($("#yMin").val()), parseFloat($("#yMax").val()));
    showQuadraticADetail();
  }
  else if($("#functionSelect").dropdown('get value') == 4){
    plotQuadraticB(parseFloat($("#xMin").val()), parseFloat($("#xMax").val()), parseFloat($("#yMin").val()), parseFloat($("#yMax").val()));
    showQuadraticBDetail();
  }
  else if($("#functionSelect").dropdown('get value') == 5){
    plotCircleA(parseFloat($("#xMin").val()), parseFloat($("#xMax").val()), parseFloat($("#yMin").val()), parseFloat($("#yMax").val()));
    showCircleADetail();
  }
  else if($("#functionSelect").dropdown('get value') == 6){
    plotCircleB(parseFloat($("#xMin").val()), parseFloat($("#xMax").val()), parseFloat($("#yMin").val()), parseFloat($("#yMax").val()));
    showCircleBDetail();
  }
  else if($("#functionSelect").dropdown('get value') == 7){
    plotExponential(parseFloat($("#xMin").val()), parseFloat($("#xMax").val()), parseFloat($("#yMin").val()), parseFloat($("#yMax").val()));
    showExponentialDetail();
  }
  else if($("#functionSelect").dropdown('get value') == 8){
    plotLogarithmic(parseFloat($("#xMin").val()), parseFloat($("#xMax").val()), parseFloat($("#yMin").val()), parseFloat($("#yMax").val()));
    showLogarithmicDetail();
  }
  else if($("#functionSelect").dropdown('get value') == 9){
    plotTrigonometric(parseFloat($("#xMin").val()), parseFloat($("#xMax").val()), parseFloat($("#yMin").val()), parseFloat($("#yMax").val()));
    showTrigonometricDetail();
  }
  else if($("#functionSelect").dropdown('get value') == 10){
    plotTrigonometric2(parseFloat($("#xMin").val()), parseFloat($("#xMax").val()), parseFloat($("#yMin").val()), parseFloat($("#yMax").val()));
    showTrigonometric2Detail();
  }
}

function drawAxis(xMin, xMax, yMin, yMax){
  var canvas = document.getElementById("graph");
  var xAxisPosition = canvas.height*yMax/(yMax-yMin);
  var yAxisPosition = canvas.width*Math.abs(xMin)/(xMax-xMin);

  var ctx = canvas.getContext('2d');
  ctx.fillStyle = "Black";

  //畫x軸y軸條線
  ctx.beginPath();
  ctx.strokeStyle = "Black" ;
  ctx.lineWidth = 4;
  ctx.moveTo(0, xAxisPosition);
  ctx.lineTo(canvas.width*(0.99), xAxisPosition);
  ctx.moveTo(yAxisPosition, canvas.height);
  ctx.lineTo(yAxisPosition, canvas.height*(0.01));
  ctx.stroke();

  //畫x軸個箭咀
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.moveTo(canvas.width, xAxisPosition);
  ctx.lineTo(canvas.width*(0.96), xAxisPosition - canvas.height*(0.02));
  ctx.lineTo(canvas.width*(0.98), xAxisPosition);
  ctx.lineTo(canvas.width*(0.96), xAxisPosition + canvas.height*(0.02));
  ctx.lineTo(canvas.width, xAxisPosition);
  ctx.stroke();
  ctx.fill();

  //畫y軸個箭咀
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.moveTo(yAxisPosition, 0);
  ctx.lineTo(yAxisPosition - canvas.width*(0.02), canvas.height*(0.04));
  ctx.lineTo(yAxisPosition, canvas.height*(0.02));
  ctx.lineTo(yAxisPosition + canvas.width*(0.02), canvas.height*(0.04));
  ctx.lineTo(yAxisPosition, 0);
  ctx.stroke();
  ctx.fill();
}

function plotPoint(xMin, xMax, yMin, yMax){
  var x = $("#x-cor").val().split("/"), x_cor;
  var y = $("#y-cor").val().split("/"), y_cor;
  if(x.length==1){
    x_cor = parseFloat(x[0]);
  }else {
    x_cor = parseFloat(x[0])/parseFloat(x[1]);
  }
  if(y.length==1){
    y_cor = parseFloat(y[0]);
  }else {
    y_cor = parseFloat(y[0])/parseFloat(y[1]);
  }
  var canvas = document.getElementById("graph");
  var ctx = canvas.getContext('2d');
  var pointSize = document.getElementById("pointRadius").value ;
  ctx.strokeStyle =  document.getElementById("pointColor").value ;
  ctx.fillStyle = document.getElementById("pointColor").value ;

  x = ((x_cor-xMin)/(xMax-xMin))*canvas.width;
  y = ((yMax-y_cor)/(yMax-yMin))*canvas.height;


  ctx.beginPath();
  ctx.arc(x, y, pointSize, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

function plotLineSegment(xMin, xMax, yMin, yMax){
  var x1 = $("#x1").val().split("/"), x1_value;
  var y1 = $("#y1").val().split("/"), y1_value;
  var x2 = $("#x2").val().split("/"), x2_value;
  var y2 = $("#y2").val().split("/"), y2_value;

  if(x1.length==1){
    x1_value = parseFloat(x1[0]);
  }else {
    x1_value = parseFloat(x1[0])/parseFloat(x1[1]);
  }
  if(y1.length==1){
    y1_value = parseFloat(y1[0]);
  }else {
    y1_value = parseFloat(y1[0])/parseFloat(y1[1]);
  }
  if(x2.length==1){
    x2_value = parseFloat(x2[0]);
  }else {
    x2_value = parseFloat(x2[0])/parseFloat(x2[1]);
  }
  if(y2.length==1){
    y2_value = parseFloat(y2[0]);
  }else {
    y2_value = parseFloat(y2[0])/parseFloat(y2[1]);
  }

  var canvas = document.getElementById("graph");
  var ctx = canvas.getContext('2d');
  ctx.strokeStyle =  $("#lineColor").val();
  ctx.lineWidth = parseFloat(document.getElementById("lineWidth").value);
  ctx.beginPath();
  ctx.moveTo(canvas.width*(x1_value - xMin)/(xMax-xMin), canvas.height*(yMax-y1_value)/(yMax-yMin));
  ctx.lineTo(canvas.width*(x2_value - xMin)/(xMax-xMin), canvas.height*(yMax-y2_value)/(yMax-yMin))
  ctx.stroke();
}

function plotStraightLine(xMin, xMax, yMin, yMax){
  var a = $("#A").val().split("/"), a_value;
  var b = $("#B").val().split("/"), b_value;
  var c = $("#C").val().split("/"), c_value;
  if(a.length==1){
    a_value = parseFloat(a[0]);
  }else {
    a_value = parseFloat(a[0])/parseFloat(a[1]);
  }
  if(b.length==1){
    b_value = parseFloat(b[0]);
  }else {
    b_value = parseFloat(b[0])/parseFloat(b[1]);
  }
  if(c.length==1){
    c_value = parseFloat(c[0]);
  }else {
    c_value = parseFloat(c[0])/parseFloat(c[1]);
  }

  var canvas = document.getElementById("graph");
  var ctx = canvas.getContext('2d');
  ctx.strokeStyle =  $("#lineColor").val();
  ctx.lineWidth = parseFloat($("#lineWidth").val());
  ctx.beginPath();
  for(i=0; i < 100; i++){
    if(b_value!=0){
      coorX = xMin + (xMax-xMin)*i/100;
      coorY = -a_value/b_value*coorX-c_value/b_value;
    }else{
      coorX = -c_value/a_value;
      coorY = yMax+(yMin-yMax)*i/100;
    }
    x = ((coorX-xMin)/(xMax-xMin))*canvas.width;
    y = ((yMax-coorY)/(yMax-yMin))*canvas.height;
      ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function plotQuadraticA(xMin, xMax, yMin, yMax){
  var a = $("#a").val().split("/"), a_value;
  var b = $("#b").val().split("/"), b_value;
  var c = $("#c").val().split("/"), c_value;

  if(a.length==1){
    a_value = parseFloat(a[0]);
  }else {
    a_value = parseFloat(a[0])/parseFloat(a[1]);
  }
  if(b.length==1){
    b_value = parseFloat(b[0]);
  }else {
    b_value = parseFloat(b[0])/parseFloat(b[1]);
  }
  if(c.length==1){
    c_value = parseFloat(c[0]);
  }else {
    c_value = parseFloat(c[0])/parseFloat(c[1]);
  }

  var canvas = document.getElementById("graph");

  var ctx = canvas.getContext('2d');
  ctx.strokeStyle =  $("#lineColor").val() ;
  ctx.lineWidth = parseFloat($("#lineWidth").val());
  ctx.beginPath();
  for(i=0; i < 1000; i++){
    coorX = xMin + (xMax-xMin)*i/1000;
    coorY = a_value*coorX*coorX+b_value*coorX+c_value;

    x = ((coorX-xMin)/(xMax-xMin))*canvas.width;
    y = ((yMax-coorY)/(yMax-yMin))*canvas.height;
      ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function plotQuadraticB(xMin, xMax, yMin, yMax){
  var a = $("#a").val().split("/"), a_value;
  var h = $("#h").val().split("/"), h_value;
  var k = $("#k").val().split("/"), k_value;

  if(a.length==1){
    a_value = parseFloat(a[0]);
  }else {
    a_value = parseFloat(a[0])/parseFloat(a[1]);
  }
  if(h.length==1){
    h_value = parseFloat(h[0]);
  }else {
    h_value = parseFloat(h[0])/parseFloat(h[1]);
  }
  if(k.length==1){
    k_value = parseFloat(k[0]);
  }else {
    k_value = parseFloat(k[0])/parseFloat(k[1]);
  }

  var canvas = document.getElementById("graph");

  var ctx = canvas.getContext('2d');
  ctx.strokeStyle =  $("#lineColor").val();
  ctx.lineWidth = parseFloat($("#lineWidth").val());
  ctx.beginPath();
  for(i=0; i < 1000; i++){
    coorX = xMin + (xMax-xMin)*i/1000;
    coorY = a_value*(coorX-h_value)*(coorX-h_value)+k_value;

    x = ((coorX-xMin)/(xMax-xMin))*canvas.width;
    y = ((yMax-coorY)/(yMax-yMin))*canvas.height;
      ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function plotCircleA(xMin, xMax, yMin, yMax){
  var h = $("#h").val().split("/"), h_value;
  var k = $("#k").val().split("/"), k_value;
  var r = $("#r").val().split("/"), r_value;

  if(h.length==1){
    h_value = parseFloat(h[0]);
  }else {
    h_value = parseFloat(h[0])/parseFloat(h[1]);
  }
  if(k.length==1){
    k_value = parseFloat(k[0]);
  }else {
    k_value = parseFloat(k[0])/parseFloat(k[1]);
  }
  if(r.length==1){
    r_value = parseFloat(r[0]);
  }else {
    r_value = parseFloat(r[0])/parseFloat(r[1]);
  }

  r_value = Math.sqrt(r_value);

  var canvas = document.getElementById("graph");

  var ctx = canvas.getContext('2d');
  ctx.strokeStyle =  $("#lineColor").val() ;
  ctx.lineWidth = parseFloat($("#lineWidth").val());
  ctx.beginPath();
  for(i=0; i < 100000; i++){
    coorX = (h_value-r_value) + r_value*2*i/99999;
    coorY = Math.sqrt(r_value*r_value-(coorX-h_value)*(coorX-h_value))+k_value;

    x = ((coorX-xMin)/(xMax-xMin))*canvas.width;
    y = ((yMax-coorY)/(yMax-yMin))*canvas.height;

      ctx.lineTo(x, y);
  }
  for(i=0; i < 100000; i++){
    coorX = (h_value+r_value) - r_value*2*i/99999;
    coorY = -Math.sqrt(r_value*r_value-(coorX-h_value)*(coorX-h_value))+k_value;

    x = ((coorX-xMin)/(xMax-xMin))*canvas.width;
    y = ((yMax-coorY)/(yMax-yMin))*canvas.height;

      ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function plotCircleB(xMin, xMax, yMin, yMax){
  var d = $("#D").val().split("/"), d_value;
  var e = $("#E").val().split("/"), e_value;
  var f = $("#F").val().split("/"), f_value;

  if(d.length==1){
    d_value = parseFloat(d[0]);
  }else {
    d_value = parseFloat(d[0])/parseFloat(d[1]);
  }
  if(e.length==1){
    e_value = parseFloat(e[0]);
  }else {
    e_value = parseFloat(e[0])/parseFloat(e[1]);
  }
  if(f.length==1){
    f_value = parseFloat(f[0]);
  }else {
    f_value = parseFloat(f[0])/parseFloat(f[1]);
  }

  var canvas = document.getElementById("graph");

  var ctx = canvas.getContext('2d');
  ctx.strokeStyle =  $("#lineColor").val() ;
  ctx.lineWidth = parseFloat($("#lineWidth").val());
  ctx.beginPath();

  var h_value = d_value*(-0.5);
  var k_value = e_value*(-0.5);
  var r_value = Math.sqrt(h_value*h_value + k_value*k_value - f_value);

  for(i=0; i < 100000; i++){
    coorX = (h_value-r_value) + r_value*2*i/99999;
    coorY = Math.sqrt(r_value*r_value-(coorX-h_value)*(coorX-h_value))+k_value;

    x = ((coorX-xMin)/(xMax-xMin))*canvas.width;
    y = ((yMax-coorY)/(yMax-yMin))*canvas.height;

      ctx.lineTo(x, y);
  }
  for(i=0; i < 100000; i++){
    coorX = (h_value+r_value) - r_value*2*i/99999;
    coorY = -Math.sqrt(r_value*r_value-(coorX-h_value)*(coorX-h_value))+k_value;

    x = ((coorX-xMin)/(xMax-xMin))*canvas.width;
    y = ((yMax-coorY)/(yMax-yMin))*canvas.height;

      ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function plotExponential(xMin, xMax, yMin, yMax){
  var a = $("#a").val().split("/"), a_value;
  var b = $("#b").val().split("/"), b_value;
  var c = $("#c").val().split("/"), c_value;

  if(a.length==1){
    a_value = parseFloat(a[0]);
  }else {
    a_value = parseFloat(a[0])/parseFloat(a[1]);
  }
  if(b.length==1){
    b_value = parseFloat(b[0]);
  }else {
    b_value = parseFloat(b[0])/parseFloat(b[1]);
  }

  if(c.length==1){
    c_value = parseFloat(c[0]);
  }else {
    c_value = parseFloat(c[0])/parseFloat(c[1]);
  }

  var canvas = document.getElementById("graph");

  var ctx = canvas.getContext('2d');
  ctx.strokeStyle =  $("#lineColor").val();
  ctx.lineWidth = parseFloat($("#lineWidth").val());
  ctx.beginPath();
  for(i=0; i < 1000; i++){
    coorX = (xMin + (xMax-xMin)*i/999);
    coorY = a_value*Math.pow(b_value, coorX)+c_value;

    x = ((coorX-xMin)/(xMax-xMin))*canvas.width;
    y = ((yMax-coorY)/(yMax-yMin))*canvas.height;

      ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function plotLogarithmic(xMin, xMax, yMin, yMax){
  var a = $("#a").val().split("/"), a_value;
  var b = $("#b").val().split("/"), b_value;
  var c = $("#c").val().split("/"), c_value;

  if(a.length==1){
    a_value = parseFloat(a[0]);
  }else {
    a_value = parseFloat(a[0])/parseFloat(a[1]);
  }

  if(b.length==1){
    b_value = parseFloat(b[0]);
  }else {
    b_value = parseFloat(b[0])/parseFloat(b[1]);
  }

  if(c.length==1){
    c_value = parseFloat(c[0]);
  }else {
    c_value = parseFloat(c[0])/parseFloat(c[1]);
  }

  var canvas = document.getElementById("graph");

  var ctx = canvas.getContext('2d');
  ctx.strokeStyle =  $("#lineColor").val() ;
  ctx.lineWidth = parseFloat($("#lineWidth").val());
  ctx.beginPath();
  for(i=0; i < 100; i++){
    coorX = (xMin + (xMax-xMin)*i/99);
    coorY = a_value*Math.log(coorX + c_value)/Math.log(b_value);

    x = ((coorX-xMin)/(xMax-xMin))*canvas.width;
    y = ((yMax-coorY)/(yMax-yMin))*canvas.height;

      ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function plotTrigonometric(xMin, xMax, yMin, yMax){
  var a = $("#a").val().split("/"), a_value;
  var b = $("#b").val().split("/"), b_value;
  var c = $("#c").val().split("/"), c_value;
  var d = $("#d").val().split("/"), d_value;
  var form = $("#selectTrigo").dropdown('get value');

  if(a.length==1){
    a_value = parseFloat(a[0]);
  }else {
    a_value = parseFloat(a[0])/parseFloat(a[1]);
  }
  if(b.length==1){
    b_value = parseFloat(b[0]);
  }else {
    b_value = parseFloat(b[0])/parseFloat(b[1]);
  }
  if(c.length==1){
    c_value = parseFloat(c[0]);
  }else {
    c_value = parseFloat(c[0])/parseFloat(c[1]);
  }
  if(d.length==1){
    d_value = parseFloat(d[0]);
  }else {
    d_value = parseFloat(d[0])/parseFloat(d[1]);
  }

  c_value = c_value/360*2*Math.PI;

  var canvas = document.getElementById("graph");

  var ctx = canvas.getContext('2d');
  ctx.strokeStyle =  document.getElementById("lineColor").value ;
  ctx.lineWidth = parseFloat(document.getElementById("lineWidth").value);
  ctx.beginPath();
  for(i=0; i < 100000; i++){
    coorX = (xMin + (xMax-xMin)*i/99999);
    if(form=="sin")
      coorY = a_value*Math.sin(b_value*coorX/360*2*Math.PI+c_value)+d_value;
    else if (form=="cos")
      coorY = a_value*Math.cos(b_value*coorX/360*2*Math.PI+c_value)+d_value;
    else if(form=="tan")
      coorY = a_value*Math.tan(b_value*coorX/360*2*Math.PI+c_value)+d_value;

    x = ((coorX-xMin)/(xMax-xMin))*canvas.width;
    y = ((yMax-coorY)/(yMax-yMin))*canvas.height;

      ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function plotTrigonometric2(xMin, xMax, yMin, yMax){
  var a = $("#a").val().split("/"), a_value;
  var b = $("#b").val().split("/"), b_value;
  var c = $("#c").val().split("/"), c_value;

  if(a.length==1){
    a_value = parseFloat(a[0]);
  }else {
    a_value = parseFloat(a[0])/parseFloat(a[1]);
  }

  if(b.length==1){
    b_value = parseFloat(b[0]);
  }else {
    b_value = parseFloat(b[0])/parseFloat(b[1]);
  }

  if(c.length==1){
    c_value = parseFloat(c[0]);
  }else {
    c_value = parseFloat(c[0])/parseFloat(c[1]);
  }

  var canvas = document.getElementById("graph");

  var ctx = canvas.getContext('2d');
  ctx.strokeStyle =  $("#lineColor").val() ;
  ctx.lineWidth = parseFloat($("#lineWidth").val());
  ctx.beginPath();
  for(i=0; i < 100; i++){
    coorX = (xMin + (xMax-xMin)*i/99);
    coorY = a_value*Math.sin(coorX/360*2*Math.PI) + b_value*Math.cos(coorX/360*2*Math.PI) + c_value;

    x = ((coorX-xMin)/(xMax-xMin))*canvas.width;
    y = ((yMax-coorY)/(yMax-yMin))*canvas.height;

      ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function rePlotPoint(xMin, xMax, yMin, yMax, x_cor, y_cor, pointSize, pointColor){

  var canvas = document.getElementById("graph");
  var ctx = canvas.getContext('2d');
  ctx.strokeStyle =  pointColor ;
  ctx.fillStyle = pointColor ;

  x = ((x_cor-xMin)/(xMax-xMin))*canvas.width;
  y = ((yMax-y_cor)/(yMax-yMin))*canvas.height;

  ctx.beginPath();
  ctx.arc(x, y, pointSize, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

function rePlotLineSegment(xMin, xMax, yMin, yMax, x1_value, y1_value, x2_value, y2_value, lineWidth, lineColor){

  var canvas = document.getElementById("graph");
  var ctx = canvas.getContext('2d');
  ctx.strokeStyle =  lineColor;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  ctx.moveTo(canvas.width*(x1_value - xMin)/(xMax-xMin), canvas.height*(yMax-y1_value)/(yMax-yMin));
  ctx.lineTo(canvas.width*(x2_value - xMin)/(xMax-xMin), canvas.height*(yMax-y2_value)/(yMax-yMin))
  ctx.stroke();
}

function rePlotStraightLine(xMin, xMax, yMin, yMax, a_value, b_value, c_value, lineWidth, lineColor){

  var canvas = document.getElementById("graph");
  var ctx = canvas.getContext('2d');
  ctx.strokeStyle =  lineColor;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  for(i=0; i < 100; i++){
    if(b_value!=0){
      coorX = xMin + (xMax-xMin)*i/100;
      coorY = -a_value/b_value*coorX-c_value/b_value;
    }else{
      coorX = -c_value/a_value;
      coorY = yMax+(yMin-yMax)*i/100;
    }
    x = ((coorX-xMin)/(xMax-xMin))*canvas.width;
    y = ((yMax-coorY)/(yMax-yMin))*canvas.height;
      ctx.lineTo(x, y);
    }
  ctx.stroke();
}

function rePlotQuadraticA(xMin, xMax, yMin, yMax, a_value, b_value, c_value, lineWidth, lineColor){

  var canvas = document.getElementById("graph");

  var ctx = canvas.getContext('2d');
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  for(i=0; i < 1000; i++){
    coorX = xMin + (xMax-xMin)*i/1000;
    coorY = a_value*coorX*coorX+b_value*coorX+parseFloat(c_value);

    x = ((coorX-xMin)/(xMax-xMin))*canvas.width;
    y = ((yMax-coorY)/(yMax-yMin))*canvas.height;

    ctx.lineTo(x, y);

}
ctx.stroke();
}

function rePlotQuadraticB(xMin, xMax, yMin, yMax, a_value, h_value, k_value, lineWidth, lineColor){

  var canvas = document.getElementById("graph");

  var ctx = canvas.getContext('2d');
  ctx.strokeStyle =  lineColor;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  for(i=0; i < 1000; i++){
    coorX = xMin + (xMax-xMin)*i/1000;
    coorY = a_value*(coorX-h_value)*(coorX-h_value)+parseFloat(k_value);

    x = ((coorX-xMin)/(xMax-xMin))*canvas.width;
    y = ((yMax-coorY)/(yMax-yMin))*canvas.height;
      ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function rePlotCircleA(xMin, xMax, yMin, yMax, h_value, k_value, r_value, lineWidth, lineColor){

  var canvas = document.getElementById("graph");
  r_value = Math.sqrt(r_value);

  var ctx = canvas.getContext('2d');
  ctx.strokeStyle =  lineColor;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  for(i=0; i < 100000; i++){
    coorX = (parseFloat(h_value)-parseFloat(r_value)) + r_value*2*i/99999;
    coorY = Math.sqrt(r_value*r_value-(coorX-parseFloat(h_value))*(coorX-parseFloat(h_value)))+parseFloat(k_value);

    x = ((coorX-xMin)/(xMax-xMin))*canvas.width;
    y = ((yMax-coorY)/(yMax-yMin))*canvas.height;

      ctx.lineTo(x, y);
  }
  for(i=0; i < 100000; i++){
    coorX = (parseFloat(h_value)+parseFloat(r_value)) - r_value*2*i/99999;
    coorY = -Math.sqrt(r_value*r_value-(coorX-parseFloat(h_value))*(coorX-parseFloat(h_value)))+parseFloat(k_value);

    x = ((coorX-xMin)/(xMax-xMin))*canvas.width;
    y = ((yMax-coorY)/(yMax-yMin))*canvas.height;

      ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function rePlotCircleB(xMin, xMax, yMin, yMax, d_value, e_value, f_value, lineWidth, lineColor){

  var canvas = document.getElementById("graph");

  var ctx = canvas.getContext('2d');
  ctx.strokeStyle =  lineColor;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();

  var h_value = d_value*(-0.5);
  var k_value = e_value*(-0.5);
  var r_value = Math.sqrt(h_value*h_value + k_value*k_value - parseFloat(f_value));

  for(i=0; i < 100000; i++){
    coorX = (parseFloat(h_value)-parseFloat(r_value)) + r_value*2*i/99999;
    coorY = Math.sqrt(r_value*r_value-(coorX-h_value)*(coorX-h_value))+k_value;

    x = ((coorX-xMin)/(xMax-xMin))*canvas.width;
    y = ((yMax-coorY)/(yMax-yMin))*canvas.height;

      ctx.lineTo(x, y);
  }
  for(i=0; i < 100000; i++){
    coorX = (h_value+r_value) - r_value*2*i/99999;
    coorY = -Math.sqrt(r_value*r_value-(coorX-h_value)*(coorX-h_value))+k_value;

    x = ((coorX-xMin)/(xMax-xMin))*canvas.width;
    y = ((yMax-coorY)/(yMax-yMin))*canvas.height;

      ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function rePlotExponential(xMin, xMax, yMin, yMax, a_value, b_value, c_value, lineWidth, lineColor){

  var canvas = document.getElementById("graph");

  var ctx = canvas.getContext('2d');
  ctx.strokeStyle =  lineColor;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  for(i=0; i < 1000; i++){
    coorX = (xMin + (xMax-xMin)*i/999);
    coorY = a_value*Math.pow(parseFloat(b_value), coorX)+parseFloat(c_value);

    x = ((coorX-xMin)/(xMax-xMin))*canvas.width;
    y = ((yMax-coorY)/(yMax-yMin))*canvas.height;

      ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function rePlotLogarithmic(xMin, xMax, yMin, yMax, a_value, b_value, c_value, lineWidth, lineColor){

  var canvas = document.getElementById("graph");

  var ctx = canvas.getContext('2d');
  ctx.strokeStyle =  lineColor;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  for(i=0; i < 100; i++){
    coorX = (xMin + (xMax-xMin)*i/99);
    coorY = a_value*Math.log(coorX + parseFloat(c_value))/Math.log(b_value);

    x = ((coorX-xMin)/(xMax-xMin))*canvas.width;
    y = ((yMax-coorY)/(yMax-yMin))*canvas.height;

      ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function rePlotTrigonometric(xMin, xMax, yMin, yMax, form, a_value, b_value, c_value, d_value, lineWidth, lineColor){

  c_value = c_value/360*2*Math.PI;

  var canvas = document.getElementById("graph");

  var ctx = canvas.getContext('2d');
  ctx.strokeStyle =  lineColor;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  for(i=0; i < 100000; i++){
    coorX = (xMin + (xMax-xMin)*i/99999);
    if(form=="sin")
      coorY = a_value*Math.sin(b_value*coorX/360*2*Math.PI+parseFloat(c_value))+parseFloat(d_value);
    else if (form=="cos")
      coorY = a_value*Math.cos(b_value*coorX/360*2*Math.PI+parseFloat(c_value))+parseFloat(d_value);
    else if(form=="tan")
      coorY = a_value*Math.tan(b_value*coorX/360*2*Math.PI+parseFloat(c_value))+parseFloat(d_value);

    x = ((coorX-xMin)/(xMax-xMin))*canvas.width;
    y = ((yMax-coorY)/(yMax-yMin))*canvas.height;

      ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function showPointDetail(){

  var x = $("#x-cor").val().split("/"), x_cor;
  var y = $("#y-cor").val().split("/"), y_cor;
  if(x.length==1){
    x_cor = parseFloat(x[0]);
  }else {
    x_cor = parseFloat(x[0])/parseFloat(x[1]);
  }
  if(y.length==1){
    y_cor = parseFloat(y[0]);
  }else {
    y_cor = parseFloat(y[0])/parseFloat(y[1]);
  }

  var table = document.getElementById("functionTable");
  var tableRef = table.getElementsByTagName('tbody')[0];
  var newRow   = tableRef.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);

  cell1.innerHTML="$(" + x_cor + ", " + y_cor + ")$";
  cell2.innerHTML="Point";

  var value = [0, x_cor, y_cor, document.getElementById("pointRadius").value, document.getElementById("pointColor").value];

  $("<button>").attr({
    id: "functionRemoveBtn" + (table.rows.length - 1),
    class: 'small ui button',
    onclick: "removeFunction(value)".replace("value", table.rows.length - 1),
    value: value,
  }).html("Remove").width(100).appendTo(cell3);
  console.log(document.getElementById("functionRemoveBtn" + (table.rows.length - 1)).value)

  MathJax.Hub.Queue(["Typeset", MathJax.Hub, table.rows[1].cells[0].innerHTML]);
}

function showLineSgementDetail(){
  var x1 = $("#x1").val().split("/"), x1_value;
  var y1 = $("#y1").val().split("/"), y1_value;
  var x2 = $("#x2").val().split("/"), x2_value;
  var y2 = $("#y2").val().split("/"), y2_value;

  if(x1.length==1){
    x1_value = parseFloat(x1[0]);
  }else {
    x1_value = parseFloat(x1[0])/parseFloat(x1[1]);
  }
  if(y1.length==1){
    y1_value = parseFloat(y1[0]);
  }else {
    y1_value = parseFloat(y1[0])/parseFloat(y1[1]);
  }
  if(x2.length==1){
    x2_value = parseFloat(x2[0]);
  }else {
    x2_value = parseFloat(x2[0])/parseFloat(x2[1]);
  }
  if(y2.length==1){
    y2_value = parseFloat(y2[0]);
  }else {
    y2_value = parseFloat(y2[0])/parseFloat(y2[1]);
  }

  var table = document.getElementById("functionTable");
  var tableRef = table.getElementsByTagName('tbody')[0];
  var newRow   = tableRef.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);

  cell1.innerHTML="$(" + x1_value + ", " + y1_value + ")$ and $(" + x2_value + ", " + y2_value + ")$" ;
  cell2.innerHTML="Line Segment";

  var value = [1, x1_value, y1_value, x2_value, y2_value, parseFloat(document.getElementById("lineWidth").value), $("#lineColor").val()];

  $("<button>").attr({
    id: "functionRemoveBtn" + (table.rows.length - 1),
    class: 'small ui button',
    onclick: "removeFunction(value)".replace("value", table.rows.length - 1),
    value: value,
  }).html("Remove").width(100).appendTo(cell3);
  console.log(document.getElementById("functionRemoveBtn" + (table.rows.length - 1)).value)

  MathJax.Hub.Queue(["Typeset", MathJax.Hub, table.rows[1].cells[0].innerHTML]);

}

function showStraightLineDetail(){
  var a = $("#A").val().split("/"), a_value;
  var b = $("#B").val().split("/"), b_value;
  var c = $("#C").val().split("/"), c_value;
  if(a.length==1){
    a_value = parseFloat(a[0]);
  }else {
    a_value = parseFloat(a[0])/parseFloat(a[1]);
  }
  if(b.length==1){
    b_value = parseFloat(b[0]);
  }else {
    b_value = parseFloat(b[0])/parseFloat(b[1]);
  }
  if(c.length==1){
    c_value = parseFloat(c[0]);
  }else {
    c_value = parseFloat(c[0])/parseFloat(c[1]);
  }

  var table = document.getElementById("functionTable");
  var tableRef = table.getElementsByTagName('tbody')[0];
  var newRow   = tableRef.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);

  cell1.innerHTML="$" + value2FirstCoe(a_value) + "x" + value2Coe(b_value) + "y" + value2Constant(c_value) + "=0$";
  cell2.innerHTML="Straight Line";

  var value = [2, a_value, b_value, c_value, parseFloat(document.getElementById("lineWidth").value), $("#lineColor").val()];

  $("<button>").attr({
    id: "functionRemoveBtn" + (table.rows.length - 1),
    class: 'small ui button',
    onclick: "removeFunction(value)".replace("value", table.rows.length - 1),
    value: value,
  }).html("Remove").width(100).appendTo(cell3);
  console.log(document.getElementById("functionRemoveBtn" + (table.rows.length - 1)).value)

  MathJax.Hub.Queue(["Typeset", MathJax.Hub, table.rows[1].cells[0].innerHTML]);

}

function showQuadraticADetail(){
  var a = $("#a").val().split("/"), a_value;
  var b = $("#b").val().split("/"), b_value;
  var c = $("#c").val().split("/"), c_value;

  if(a.length==1){
    a_value = parseFloat(a[0]);
  }else {
    a_value = parseFloat(a[0])/parseFloat(a[1]);
  }
  if(b.length==1){
    b_value = parseFloat(b[0]);
  }else {
    b_value = parseFloat(b[0])/parseFloat(b[1]);
  }
  if(c.length==1){
    c_value = parseFloat(c[0]);
  }else {
    c_value = parseFloat(c[0])/parseFloat(c[1]);
  }

  var table = document.getElementById("functionTable");
  var tableRef = table.getElementsByTagName('tbody')[0];
  var newRow   = tableRef.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);

  cell1.innerHTML="$y=" + value2FirstCoe(a_value) + "x^2" + value2Coe(b_value) + "x" + value2Constant(c_value) + "$";
  cell2.innerHTML="Quadratic Function";

  var value = [3, a_value, b_value, c_value, parseFloat(document.getElementById("lineWidth").value), $("#lineColor").val()];

  $("<button>").attr({
    id: "functionRemoveBtn" + (table.rows.length - 1),
    class: 'small ui button',
    onclick: "removeFunction(value)".replace("value", table.rows.length - 1),
    value: value,
  }).html("Remove").width(100).appendTo(cell3);
  console.log(document.getElementById("functionRemoveBtn" + (table.rows.length - 1)).value)

  MathJax.Hub.Queue(["Typeset", MathJax.Hub, table.rows[1].cells[0].innerHTML]);

}

function showQuadraticBDetail(){
  var a = $("#a").val().split("/"), a_value;
  var h = $("#h").val().split("/"), h_value;
  var k = $("#k").val().split("/"), k_value;

  if(a.length==1){
    a_value = parseFloat(a[0]);
  }else {
    a_value = parseFloat(a[0])/parseFloat(a[1]);
  }
  if(h.length==1){
    h_value = parseFloat(h[0]);
  }else {
    h_value = parseFloat(h[0])/parseFloat(h[1]);
  }
  if(k.length==1){
    k_value = parseFloat(k[0]);
  }else {
    k_value = parseFloat(k[0])/parseFloat(k[1]);
  }

  var table = document.getElementById("functionTable");
  var tableRef = table.getElementsByTagName('tbody')[0];
  var newRow   = tableRef.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);

  cell1.innerHTML="$y=" + value2FirstCoe(a_value) + "(x" + value2Constant(-h_value) + ")^2" + value2Constant(k_value) + "$";
  cell2.innerHTML="Quadratic Function";

  var value = [4, a_value, h_value, k_value, parseFloat(document.getElementById("lineWidth").value), $("#lineColor").val()];

  $("<button>").attr({
    id: "functionRemoveBtn" + (table.rows.length - 1),
    class: 'small ui button',
    onclick: "removeFunction(value)".replace("value", table.rows.length - 1),
    value: value,
  }).html("Remove").width(100).appendTo(cell3);
  console.log(document.getElementById("functionRemoveBtn" + (table.rows.length - 1)).value)

  MathJax.Hub.Queue(["Typeset", MathJax.Hub, table.rows[1].cells[0].innerHTML]);
}

function showCircleADetail(){
  var h = $("#h").val().split("/"), h_value;
  var k = $("#k").val().split("/"), k_value;
  var r = $("#r").val().split("/"), r_value;

  if(h.length==1){
    h_value = parseFloat(h[0]);
  }else {
    h_value = parseFloat(h[0])/parseFloat(h[1]);
  }
  if(k.length==1){
    k_value = parseFloat(k[0]);
  }else {
    k_value = parseFloat(k[0])/parseFloat(k[1]);
  }
  if(r.length==1){
    r_value = parseFloat(r[0]);
  }else {
    r_value = parseFloat(r[0])/parseFloat(r[1]);
  }

  var table = document.getElementById("functionTable");
  var tableRef = table.getElementsByTagName('tbody')[0];
  var newRow   = tableRef.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);

  cell1.innerHTML="$(x" + value2Constant(-h_value) + ")^2+(y" + value2Constant(-k_value) + ")^2=" + r_value + "$";
  cell2.innerHTML="Circle";

  var value = [5, h_value, k_value, r_value, parseFloat(document.getElementById("lineWidth").value), $("#lineColor").val()];

  $("<button>").attr({
    id: "functionRemoveBtn" + (table.rows.length - 1),
    class: 'small ui button',
    onclick: "removeFunction(value)".replace("value", table.rows.length - 1),
    value: value,
  }).html("Remove").width(100).appendTo(cell3);
  console.log(document.getElementById("functionRemoveBtn" + (table.rows.length - 1)).value)

  MathJax.Hub.Queue(["Typeset", MathJax.Hub, table.rows[1].cells[0].innerHTML]);

}

function showCircleBDetail(){
  var d = $("#D").val().split("/"), d_value;
  var e = $("#E").val().split("/"), e_value;
  var f = $("#F").val().split("/"), f_value;

  if(d.length==1){
    d_value = parseFloat(d[0]);
  }else {
    d_value = parseFloat(d[0])/parseFloat(d[1]);
  }
  if(e.length==1){
    e_value = parseFloat(e[0]);
  }else {
    e_value = parseFloat(e[0])/parseFloat(e[1]);
  }
  if(f.length==1){
    f_value = parseFloat(f[0]);
  }else {
    f_value = parseFloat(f[0])/parseFloat(f[1]);
  }

  var table = document.getElementById("functionTable");
  var tableRef = table.getElementsByTagName('tbody')[0];
  var newRow   = tableRef.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);

  cell1.innerHTML="$x^2+y^2" + value2Coe(d_value) + "x" + value2Coe(e_value) + "y" + value2Constant(f_value) + "=0$";
  cell2.innerHTML="Circle";

  var value = [6, d_value, e_value, f_value, parseFloat(document.getElementById("lineWidth").value), $("#lineColor").val()];

  $("<button>").attr({
    id: "functionRemoveBtn" + (table.rows.length - 1),
    class: 'small ui button',
    onclick: "removeFunction(value)".replace("value", table.rows.length - 1),
    value: value,
  }).html("Remove").width(100).appendTo(cell3);
  console.log(document.getElementById("functionRemoveBtn" + (table.rows.length - 1)).value)

  MathJax.Hub.Queue(["Typeset", MathJax.Hub, table.rows[1].cells[0].innerHTML]);
}

function showExponentialDetail(){
  var a = $("#a").val().split("/"), a_value;
  var b = $("#b").val().split("/"), b_value;
  var c = $("#c").val().split("/"), c_value;

  if(a.length==1){
    a_value = parseFloat(a[0]);
  }else {
    a_value = parseFloat(a[0])/parseFloat(a[1]);
  }
  if(b.length==1){
    b_value = parseFloat(b[0]);
  }else {
    b_value = parseFloat(b[0])/parseFloat(b[1]);
  }

  if(c.length==1){
    c_value = parseFloat(c[0]);
  }else {
    c_value = parseFloat(c[0])/parseFloat(c[1]);
  }

  var table = document.getElementById("functionTable");
  var tableRef = table.getElementsByTagName('tbody')[0];
  var newRow   = tableRef.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);

  cell1.innerHTML="$y=" + value2FirstCoe(a_value) + "(" + value2FirstCoe(b_value) + ")^x" + value2Constant(c_value) + "$";
  cell2.innerHTML="Exponential Function";

  var value = [7, a_value, b_value, c_value, parseFloat(document.getElementById("lineWidth").value), $("#lineColor").val()];

  $("<button>").attr({
    id: "functionRemoveBtn" + (table.rows.length - 1),
    class: 'small ui button',
    onclick: "removeFunction(value)".replace("value", table.rows.length - 1),
    value: value,
  }).html("Remove").width(100).appendTo(cell3);
  console.log(document.getElementById("functionRemoveBtn" + (table.rows.length - 1)).value)

  MathJax.Hub.Queue(["Typeset", MathJax.Hub, table.rows[1].cells[0].innerHTML]);

}

function showLogarithmicDetail(){
  var a = $("#a").val().split("/"), a_value;
  var b = $("#b").val().split("/"), b_value;
  var c = $("#c").val().split("/"), c_value;

  if(a.length==1){
    a_value = parseFloat(a[0]);
  }else {
    a_value = parseFloat(a[0])/parseFloat(a[1]);
  }

  if(b.length==1){
    b_value = parseFloat(b[0]);
  }else {
    b_value = parseFloat(b[0])/parseFloat(b[1]);
  }

  if(c.length==1){
    c_value = parseFloat(c[0]);
  }else {
    c_value = parseFloat(c[0])/parseFloat(c[1]);
  }

  var table = document.getElementById("functionTable");
  var tableRef = table.getElementsByTagName('tbody')[0];
  var newRow   = tableRef.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);

  cell1.innerHTML="$y=" + value2FirstCoe(a_value) + "log_{" + b_value + "}{(x" + value2Constant(c_value) + ")}$";
  cell2.innerHTML="Logarithmic Function";

  var value = [8, a_value, b_value, c_value, parseFloat(document.getElementById("lineWidth").value), $("#lineColor").val()];

  $("<button>").attr({
    id: "functionRemoveBtn" + (table.rows.length - 1),
    class: 'small ui button',
    onclick: "removeFunction(value)".replace("value", table.rows.length - 1),
    value: value,
  }).html("Remove").width(100).appendTo(cell3);
  console.log(document.getElementById("functionRemoveBtn" + (table.rows.length - 1)).value)

  MathJax.Hub.Queue(["Typeset", MathJax.Hub, table.rows[1].cells[0].innerHTML]);
}

function showTrigonometricDetail(){
  var a = $("#a").val().split("/"), a_value;
  var b = $("#b").val().split("/"), b_value;
  var c = $("#c").val().split("/"), c_value;
  var d = $("#d").val().split("/"), d_value;
  var form = $("#selectTrigo").dropdown('get value');

  if(a.length==1){
    a_value = parseFloat(a[0]);
  }else {
    a_value = parseFloat(a[0])/parseFloat(a[1]);
  }
  if(b.length==1){
    b_value = parseFloat(b[0]);
  }else {
    b_value = parseFloat(b[0])/parseFloat(b[1]);
  }
  if(c.length==1){
    c_value = parseFloat(c[0]);
  }else {
    c_value = parseFloat(c[0])/parseFloat(c[1]);
  }
  if(d.length==1){
    d_value = parseFloat(d[0]);
  }else {
    d_value = parseFloat(d[0])/parseFloat(d[1]);
  }

  var table = document.getElementById("functionTable");
  var tableRef = table.getElementsByTagName('tbody')[0];
  var newRow   = tableRef.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);

  cell1.innerHTML="$y=" + value2FirstCoe(a_value) + form + "(" + value2FirstCoe(b_value) + "x" + value2Constant(c_value) + ")" + value2Constant(d_value) + "$";
  cell2.innerHTML="Trigonometric Function";

  var value = [9, form, a_value, b_value, c_value, d_value, parseFloat(document.getElementById("lineWidth").value), $("#lineColor").val()];

  $("<button>").attr({
    id: "functionRemoveBtn" + (table.rows.length - 1),
    class: 'small ui button',
    onclick: "removeFunction(value)".replace("value", table.rows.length - 1),
    value: value,
  }).html("Remove").width(100).appendTo(cell3);
  console.log(document.getElementById("functionRemoveBtn" + (table.rows.length - 1)).value)

  MathJax.Hub.Queue(["Typeset", MathJax.Hub, table.rows[1].cells[0].innerHTML]);
}

function showTrigonometric2Detail(){
  var a = $("#a").val().split("/"), a_value;
  var b = $("#b").val().split("/"), b_value;
  var c = $("#c").val().split("/"), c_value;

  if(a.length==1){
    a_value = parseFloat(a[0]);
  }else {
    a_value = parseFloat(a[0])/parseFloat(a[1]);
  }

  if(b.length==1){
    b_value = parseFloat(b[0]);
  }else {
    b_value = parseFloat(b[0])/parseFloat(b[1]);
  }

  if(c.length==1){
    c_value = parseFloat(c[0]);
  }else {
    c_value = parseFloat(c[0])/parseFloat(c[1]);
  }

  var table = document.getElementById("functionTable");
  var tableRef = table.getElementsByTagName('tbody')[0];
  var newRow   = tableRef.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);

  cell1.innerHTML="$y=" + value2FirstCoe(a_value) + "sin x" + value2Coe(b_value) + "cosx" + value2Constant(c_value) + "$";
  cell2.innerHTML="Logarithmic Function";

  var value = [8, a_value, b_value, c_value, parseFloat(document.getElementById("lineWidth").value), $("#lineColor").val()];

  $("<button>").attr({
    id: "functionRemoveBtn" + (table.rows.length - 1),
    class: 'small ui button',
    onclick: "removeFunction(value)".replace("value", table.rows.length - 1),
    value: value,
  }).html("Remove").width(100).appendTo(cell3);

  MathJax.Hub.Queue(["Typeset", MathJax.Hub, table.rows[1].cells[0].innerHTML]);
}

function clearAllGraph(){
  var canvas = document.getElementById("graph");
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById("functionTable").getElementsByTagName('tbody')[0].remove();
  $("<tbody>").appendTo($("#functionTable"));
}

function removeFunction(n){
  var table = document.getElementById("functionTable");
  table.deleteRow(n);
  for(i=(n+1); i<=table.rows.length; i++){
    $("#functionRemoveBtn"+i).attr({
      id: "functionRemoveBtn" + (i-1),
      onclick: "removeFunction(value)".replace("value", (i-1)),
    })
  }
  rePlotFunction();
}

function rePlotFunction(){
  var canvas = document.getElementById("graph");
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  var xMin = parseFloat($("#xMin").val());
  var xMax =  parseFloat($("#xMax").val());
  var yMin = parseFloat($("#yMin").val());
  var yMax = parseFloat($("#yMax").val());
  var table = document.getElementById("functionTable");
  noOfFunction = table.rows.length - 1;
  console.log("number of function = " + noOfFunction)
  if(noOfFunction!=0)
    drawAxis(xMin, xMax, yMin, yMax);
  for (j = 0; j<noOfFunction; j++){
    var u = j + 1 ;
    var functionInfo = document.getElementById("functionRemoveBtn" + (u)).value;
    functionInfo = functionInfo.split(',').map(_=>_||0);
    console.log(functionInfo)
    var functionType = functionInfo[0];
    if(functionType==0){
      console.log("0 = ok")
      rePlotPoint(xMin, xMax, yMin, yMax, functionInfo[1], functionInfo[2], functionInfo[3], functionInfo[4]);
    }
    else if(functionType==1){
      rePlotLineSegment(xMin, xMax, yMin, yMax, functionInfo[1], functionInfo[2], functionInfo[3], functionInfo[4], functionInfo[5], functionInfo[6]);
      console.log("1 = ok")
    }
    else if(functionType==2){
      rePlotStraightLine(xMin, xMax, yMin, yMax, functionInfo[1], functionInfo[2], functionInfo[3], functionInfo[4], functionInfo[5]);
      console.log("2 = ok")
    }
    else if(functionType==3){
      rePlotQuadraticA(xMin, xMax, yMin, yMax, functionInfo[1], functionInfo[2], functionInfo[3], functionInfo[4], functionInfo[5]);
      console.log("3 = ok")
    }
    else if(functionType==4){
      rePlotQuadraticB(xMin, xMax, yMin, yMax, functionInfo[1], functionInfo[2], functionInfo[3], functionInfo[4], functionInfo[5]);
      console.log(functionInfo)
    }
    else if(functionType==5){
      rePlotCircleA(xMin, xMax, yMin, yMax, functionInfo[1], functionInfo[2], functionInfo[3], functionInfo[4], functionInfo[5]);
      console.log(functionInfo)
    }
    else if(functionType==6){
      rePlotCircleB(xMin, xMax, yMin, yMax, functionInfo[1], functionInfo[2], functionInfo[3], functionInfo[4], functionInfo[5]);
      console.log(functionInfo)
    }
    else if(functionType==7){
      rePlotExponential(xMin, xMax, yMin, yMax, functionInfo[1], functionInfo[2], functionInfo[3], functionInfo[4], functionInfo[5]);
      console.log(functionInfo)
    }
    else if(functionType==8){
      rePlotLogarithmic(xMin, xMax, yMin, yMax, functionInfo[1], functionInfo[2], functionInfo[3], functionInfo[4], functionInfo[5]);
      console.log(functionInfo)
    }
    else if(functionType==9){
      rePlotTrigonometric(xMin, xMax, yMin, yMax, functionInfo[1], functionInfo[2], functionInfo[3], functionInfo[4], functionInfo[5], functionInfo[6], functionInfo[7]);
      console.log(functionInfo)
    }
  }
}

function value2FirstCoe(n){
  if(n<0)
    if(n!=-1)
      return n;
    else
      return "-";
  else if(n>0)
    if(n!=1)
      return n;
    else
      return "";
}

function value2Constant(n){
  if(n>0)
    return "+" + n;
  else if(n<0)
    return "-" + Math.abs(n);
  else
    return "";
}

function value2Coe(n){
  if(n<0)
    if(n!=-1)
      return n;
    else
      return "-";
  else if(n>0)
    if(n!=1)
      return "+" + n;
    else
      return "+";
}

function plotMajorGrid(xMin, xMax, yMin, yMax, scale){
  var canvas = document.getElementById("graph");
  var xAxisPosition = canvas.height*yMax/(yMax-yMin);
  var yAxisPosition = canvas.width*Math.abs(xMin)/(xMax-xMin);
  var xRange = ((scale - xMin)/(xMax-xMin))*canvas.width - yAxisPosition;

  var ctx = canvas.getContext('2d');
  ctx.strokeStyle = "DarkGrey";
  ctx.lineWidth = 3;
  ctx.beginPath();

  for(i = 1; yAxisPosition + xRange*i <= canvas.width; i++){
    ctx.moveTo(yAxisPosition + (xRange*i), 0);
    ctx.lineTo(yAxisPosition + (xRange*i), canvas.height);
  }

   for(i = 1; yAxisPosition - xRange*i >= 0; i++){
     ctx.moveTo(yAxisPosition - (xRange*i), 0);
     ctx.lineTo(yAxisPosition - (xRange*i), canvas.height);
   }

   for(i = 1; xAxisPosition + xRange*i <= canvas.width; i++){
     ctx.moveTo(0, xAxisPosition + (xRange*i));
     ctx.lineTo(canvas.width, xAxisPosition + (xRange*i));
   }

    for(i = 1; xAxisPosition - xRange*i >= 0; i++){
      ctx.moveTo(0, xAxisPosition - (xRange*i));
      ctx.lineTo(canvas.width, xAxisPosition - (xRange*i));
    }

  ctx.stroke();

}

function plotMajorMinorGrid(xMin, xMax, yMin, yMax, scale){
  var canvas = document.getElementById("graph");
  var xAxisPosition = canvas.height*yMax/(yMax-yMin);
  var yAxisPosition = canvas.width*Math.abs(xMin)/(xMax-xMin);
  var xRange = ((scale - xMin)/(xMax-xMin))*canvas.width - yAxisPosition;
  var minorRange = xRange/5;

  var ctx = canvas.getContext('2d');
  ctx.strokeStyle = "DarkGrey";
  ctx.lineWidth = 3;
  ctx.beginPath();

  for(i = 0; Math.round(yAxisPosition + xRange*i) <= canvas.width; i++){
    ctx.moveTo(yAxisPosition + (xRange*i), 0);
    ctx.lineTo(yAxisPosition + (xRange*i), canvas.height);
  }

   for(i = 0; Math.round(yAxisPosition - xRange*i) >= 0; i++){
     ctx.moveTo(yAxisPosition - (xRange*i), 0);
     ctx.lineTo(yAxisPosition - (xRange*i), canvas.height);
   }

   for(i = 0; Math.round(xAxisPosition + xRange*i) <= canvas.width; i++){
     ctx.moveTo(0, xAxisPosition + (xRange*i));
     ctx.lineTo(canvas.width, xAxisPosition + (xRange*i));
   }

    for(i = 0; Math.round(xAxisPosition - xRange*i) >= 0; i++){
      ctx.moveTo(0, xAxisPosition - (xRange*i));
      ctx.lineTo(canvas.width, xAxisPosition - (xRange*i));
    }

  ctx.stroke();

  ctx.lineWidth = 1;
  ctx.beginPath();

  for(i = 1; yAxisPosition + minorRange*i <= canvas.width; i++){
    ctx.moveTo(yAxisPosition + (minorRange*i), 0);
    ctx.lineTo(yAxisPosition + (minorRange*i), canvas.height);
  }

   for(i = 1; yAxisPosition - minorRange*i >= 0; i++){
     ctx.moveTo(yAxisPosition - (minorRange*i), 0);
     ctx.lineTo(yAxisPosition - (minorRange*i), canvas.height);
   }

   for(i = 1; xAxisPosition + minorRange*i <= canvas.width; i++){
     ctx.moveTo(0, xAxisPosition + (minorRange*i));
     ctx.lineTo(canvas.width, xAxisPosition + (minorRange*i));
   }

    for(i = 1; xAxisPosition - minorRange*i >= 0; i++){
      ctx.moveTo(0, xAxisPosition - (minorRange*i));
      ctx.lineTo(canvas.width, xAxisPosition - (minorRange*i));
    }

    ctx.stroke();
}

function showScale(){
  var xMin = parseFloat($("#xMin").val());
  var xMax = parseFloat($("#xMax").val());
  var yMin =  parseFloat($("#yMin").val());
  var yMax =  parseFloat($("#yMax").val());
  var scale =  parseFloat($("#scale").val());

  var canvas = document.getElementById("graph");
  var xAxisPosition = canvas.height*yMax/(yMax-yMin);
  var yAxisPosition = canvas.width*Math.abs(xMin)/(xMax-xMin);
  var xRange = ((scale - xMin)/(xMax-xMin))*canvas.width - yAxisPosition;

  var ctx = canvas.getContext('2d');
  ctx.strokeStyle = "Black";
  ctx.lineWidth = 3;
  ctx.beginPath();

  for(i = 1; yAxisPosition + xRange*i*2 < canvas.width; i++){
    ctx.moveTo(yAxisPosition + (xRange*i*2), xAxisPosition);
    ctx.lineTo(yAxisPosition + (xRange*i*2), xAxisPosition + xRange*0.4);
  }

   for(i = 1; yAxisPosition - xRange*i*2 > 0; i++){
     ctx.moveTo(yAxisPosition - (xRange*i*2), xAxisPosition);
     ctx.lineTo(yAxisPosition - (xRange*i*2), xAxisPosition + xRange*0.4);
   }

   for(i = 1; xAxisPosition + xRange*i*2 < canvas.width; i++){
     ctx.moveTo(yAxisPosition, xAxisPosition + (xRange*i*2));
     ctx.lineTo(yAxisPosition - xRange*0.4, xAxisPosition + (xRange*i*2));
   }

    for(i = 1; xAxisPosition - xRange*i*2 > 0; i++){
      ctx.moveTo(yAxisPosition, xAxisPosition - (xRange*i*2));
      ctx.lineTo(yAxisPosition - xRange*0.4, xAxisPosition - (xRange*i*2));
    }

  ctx.stroke();

}

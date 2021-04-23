window.addEventListener('load', makeCanvas);

function makeCanvas() {
  var canvas1 = document.getElementById('canvas1');
  var ctx1 = canvas1.getContext('2d');

  ctx1.font = '32pt Arial';
  ctx1.fillStyle = 'DeepSkyBlue';
  ctx1.strokeStyle = 'black';

  ctx1.fillText("I Love HTML5", 45, 150);
  ctx1.strokeText("I Love HTML5", 45, 150);

  var canvas2 = document.getElementById('canvas2');
  var ctx2 = canvas2.getContext('2d');

  ctx2.fillStyle = '#ff0000';
  ctx2.strokeStyle = '#000';
  ctx2.lineWidth = 10;

  ctx2.fillRect(45, 5, 135, 135);
  ctx2.strokeRect(45, 5, 135, 135);

  ctx2.fillRect(200, 160, 135, 135);
  ctx2.strokeRect(200, 160, 135, 135);

  ctx2.fillStyle = '#666';
  ctx2.fillRect(200, 5, 135, 135);

  ctx2.fillRect(45, 160, 135, 135);

  var canvas3 = document.getElementById('canvas3');
  var ctx3 = canvas3.getContext('2d');

  ctx3.strokeStyle = '#666';
  ctx3.fillStyle = '#ff0000';
  ctx3.lineWidth = 3;

  ctx3.beginPath();
  ctx3.moveTo(100, 100);
  ctx3.lineTo(150, 200);
  ctx3.lineTo(200, 200);
  ctx3.lineTo(200, 290);
  ctx3.lineTo(290, 290);
  ctx3.lineTo(290, 100);
  ctx3.lineTo(100, 100);
  ctx3.stroke();
  ctx3.fill();
  ctx3.closePath();

  var canvas4 = document.getElementById('canvas4');
  var ctx4 = canvas4.getContext('2d');
}

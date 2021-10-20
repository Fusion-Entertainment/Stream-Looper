document.getElementById('social').addEventListener('ended', myHandler, false);

function myHandler(e) {
   console.log('ended');
   setTimeout(function() {
      document.getElementById('social').play();
   }, 10000);
}


document.getElementById('sponsers').addEventListener('ended', myHandler, false);

function myHandler(e) {
   console.log('ended');
   setTimeout(function() {
      document.getElementById('sponsers').play();
   }, 10000);
}
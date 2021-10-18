document.getElementById('social').addEventListener('ended', myHandler, false);

function myHandler(e) {
   console.log('ended');
   setTimeout(function() {
      document.getElementById('social').play();
   }, 1000);
}


document.getElementById('Sponsers').addEventListener('ended', myHandler, false);

function myHandler(e) {
   console.log('ended');
   setTimeout(function() {
      document.getElementById('sponsers').play();
   }, 1000);
}
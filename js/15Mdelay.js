document.getElementById('social').addEventListener('ended', myHandler, false);

function myHandler(e) {
   console.log('ended');
   setTimeout(function() {
      document.getElementById('social').play();
   }, 900000);
}


document.getElementById('Sponsers').addEventListener('ended', myHandler, false);

function myHandler(e) {
   console.log('ended');
   setTimeout(function() {
      document.getElementById('sponsers').play();
   }, 900000);
}
document.getElementById('social').addEventListener('ended', myHandler, false);

function myHandler(e) {
   console.log('ended');
   setTimeout(function() {
      document.getElementById('social').play();
   }, 1200000);
}


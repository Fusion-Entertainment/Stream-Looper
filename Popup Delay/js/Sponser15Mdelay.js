document.getElementById('social').addEventListener('ended', myHandler, false);
function myHandler(e) {
   console.log('ended');
   document.getElementById("social").style.display="none";
   setTimeout(function() {
      document.getElementById("social").style.display="block";
      document.getElementById('social').play();
   }, 900000);
}

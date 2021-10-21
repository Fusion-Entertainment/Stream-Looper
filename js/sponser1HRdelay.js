document.getElementById('sponsers').addEventListener('ended', myHandler, false);
function myHandler(e) {
   console.log('ended');
   document.getElementById("sponsers").style.display="none";
   setTimeout(function() {
      document.getElementById("sponsers").style.display="block";
      document.getElementById('sponsers').play();
   }, 1200000);
}
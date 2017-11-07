/*var button = document.getElementById('btn')

button.addEventListener("click", function add(){

})*/

(function(){
  var msg = document.getElementsByClassName("msg")[0],
      charLeftLabel = "char-left",
      charLeft = document.getElementsByClassName(charLeftLabel)[0],
      maxChar = 140,
      maxCharWarn = 20;
  
      // show characters left at start
      charLeft.innerHTML = maxChar;

      // update while typing
      msg.onkeydown = function(){
        setTimeout(function(){
          charLeft.innerHTML = maxChar - msg.value.length;

          // whether or not to display warning class based on characters left
          var warnLabel = msg.value.length >= maxChar - maxCharWarn ? " warning" : "";
          charLeft.className = charLeftLabel + warnLabel;
        }, 1); 
      };
})();

var textarea = document.getElementById("textarea");
var limit = 200;

textarea.oninput = function() {
  textarea.style.height = "";
  textarea.style.height = Math.min(textarea.scrollHeight, 300) + "px";
};
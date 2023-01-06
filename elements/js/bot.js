let buttons = document.querySelectorAll(".take_popup");
let popup = document.getElementById("popup");

buttons[0].onclick = function(){
  popup.classList.add("active_pop");
}
buttons[1].onclick = function(){
  popup.classList.add("active_pop");
}
buttons[2].onclick = function(){
  popup.classList.add("active_pop");
}

let close = document.querySelectorAll(".popup_close");

close[0].onclick = function(){
  popup.classList.remove("active_pop");
}

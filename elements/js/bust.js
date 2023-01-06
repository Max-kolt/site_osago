
document.querySelector(".buster").onclick = function(){
  document.querySelector(".buster").classList.add("_invisible");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function(){
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop >500){
    document.querySelector(".buster").classList.remove("_invisible");
  } else {
    document.querySelector(".buster").classList.add("_invisible");
  }
}

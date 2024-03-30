let showIndex = 0;
showShow();

function showShow() {
  let i;
  let show = document.getElementsByClassName("myShow");
  for (i = 0; i < show.length; i++) {
    show[i].style.display = "none";  
  }
  showIndex++;
  if (showIndex > show.length) {showIndex = 1}    
  show[showIndex-1].style.display = "block";  
  setTimeout(showShow, 5000); // Change image every 2 seconds
}
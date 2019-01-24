
 function myFunction() {
  document.getElementById("Menu_Content").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.hamburger_btn')) {
    var dropdowns = document.getElementsByClassName("Menu_Content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
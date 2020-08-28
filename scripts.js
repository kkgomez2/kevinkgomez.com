function toggleMenu() {
  var sidebarClasses = document.getElementById("sidebar").classList;

  if (sidebarClasses.contains("sidebar--open")) {
    sidebarClasses.remove("sidebar--open");
  } else {
    sidebarClasses.add("sidebar--open");
  }
}

function addClapToText() {
  var x = document.getElementById("myText").value;

  var betterText = "";
  var capitalFlag = true;
  for (var i = 0; i < x.length; i++) {
    if (x.charAt(i) == " ") {
      betterText += "&#x1F44F;";
      capitalFlag = true;
    } else {
      if (capitalFlag) {
        betterText += x.substring(i, i + 1).toUpperCase();
        capitalFlag = false;
      } else {
        betterText += x.charAt(i);
      }
    }
  }

  document.getElementById("clap").innerHTML = betterText;
}

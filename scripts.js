$(function() {
    $(".header__menu-link").click(function() {
        var sidebar = $(".sidebar").first()
        if (sidebar.hasClass("sidebar--open")) {
            sidebar.removeClass("sidebar--open");
        } else {
            sidebar.addClass("sidebar--open");
        }
    });
});

function addClapToText() {
    var x = document.getElementById("myText").value;

    var betterText = "";
    var capitalFlag = true;
    for (var i = 0; i < x.length; i++) {
        if (x.charAt(i) == ' ') {
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

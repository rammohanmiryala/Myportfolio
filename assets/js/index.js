var nightmodeEl = document.getElementById('.nightmode')
document.getElementById("switch").addEventListener("change", function () {
    if (document.getElementById("switch").checked == true) {

        nightmodeEl.setAttribute("style", "background-color: #FFD4D4;");
        nightmodeEl.setAttribute("style", "color: white;");



        //   document.documentElement.setAttribute("style", "background-color: #FFD4D4;");
        //   document.getElementsByTagName(".nightmode")[1].setAttribute("style", "color: white;");

    } else {
        nightmodeEl.setAttribute("style", "background-color: #222222;");
        nightmodeEl.setAttribute("style", "color: #FFD4D4;");

    }
});
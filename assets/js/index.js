var nightmodeEl = document.querySelector('.nightmode')
var pagecolorel =document.querySelector('.pagecolor')

document.querySelector("#switch").addEventListener("change", function () {
    if (document.querySelector("#switch").checked == true) {

        nightmodeEl.setAttribute("style", "background-color: #DFDCDC; color: #473F45;");
        pagecolorel.setAttribute("style", "color: #473F45;");

        //   document.documentElement.setAttribute("style", "background-color: #FFD4D4;");
        //   document.getElementsByTagName(".nightmode")[1].setAttribute("style", "color: white;");

    } else {
        nightmodeEl.setAttribute("style", "background-color: #222222; color: #FFD4D4;");
        pagecolorel.setAttribute("style", "color: #FFD4D4;");

    }
});
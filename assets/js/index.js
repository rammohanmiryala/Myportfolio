var nightmodeEl = document.querySelector('.nightmode')
var pages1el = document.querySelector('.pages1')
var pages2el = document.querySelector('.pages2')
var pages3el = document.querySelector('.pages3')
var pages4el = document.querySelector('.pages4')
var textxcolorpel = document.querySelector('.textxcolorp')
var facebookel = document.querySelector('.facebook')
var linkedinel = document.querySelector('.linkedin')
var twitterel = document.querySelector('.twitter')
var switchel = document.querySelector("#switch")

localStorage.setItem("switch1", switchel.value);


function checkedvalue() {
    if (switchel.checked == true) {

        nightmodeEl.setAttribute("style", "background-color: #DFDCDC; color: #473F45;");
        pages1el.setAttribute("style", "color: #473F45; font-weight: bold;");
        pages2el.setAttribute("style", "color: #473F45;font-weight: bold;");
        pages3el.setAttribute("style", "color: #473F45;font-weight: bold;");
        pages4el.setAttribute("style", "color: #473F45;font-weight: bold;");

        //   document.documentElement.setAttribute("style", "background-color: #FFD4D4;");
        //   document.getElementsByTagName(".nightmode")[1].setAttribute("style", "color: white;");

    } else {
        nightmodeEl.setAttribute("style", "background-color: #222222; color: #FFD4D4;");
        pages1el.setAttribute("style", "color: #FFD4D4;");
        pages2el.setAttribute("style", "color: #FFD4D4;");
        pages3el.setAttribute("style", "color: #FFD4D4;");
        pages4el.setAttribute("style", "color: #FFD4D4;");
        textxcolorpel.setAttribute("style", "color: #ececec;");



    }

}


switchel.addEventListener("change", checkedvalue)
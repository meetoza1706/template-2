$(window).scroll(function(){
    if (window.scrollY >= 60){
        document.getElementById('div1').style.paddingLeft = "1%";
        document.getElementById('div2').style.paddingLeft = "9%";
        document.getElementById('navbar-container').style.background = "#000";
        document.getElementById('navbar-container').style.color = "#fff";
        document.getElementById('navbar-container').style.zIndex = "1";
    }
    else {
        //console.log("normal");
        document.getElementById('div1').style.paddingLeft = "4%";
        document.getElementById('div2').style.paddingLeft = "9%";
        document.getElementById('navbar-container').style.background = "transparent";
    }
}); 
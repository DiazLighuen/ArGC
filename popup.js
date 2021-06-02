function hideAds(){
    var checkbox = document.getElementById("ads");
    console.log(checkbox.value);
    if(checkbox.value){
        var x = document.getElementsByClassName("advertisement-lobby-side");
        for (var a = 0; a < x.length; a++) {
            x[a].style.display = "none";
        }
        document.getElementsByClassName("lobby-header-ads")[0].parentNode.removeChild(document.getElementsByClassName("lobby-header-ads")[0]);
    }
    else{
        var x = document.getElementsByClassName("advertisement-lobby-side");
        for (var a = 0; a < x.length; a++) {
            x[a].style.display = "true";
        }
    }
}
function filter(country) {
    var value = country.value;
    if (value != "No Brasil"){
        var x = document.getElementsByClassName("lobby-room-list-item");
        for (var a = 0; a < x.length; a++) {
            if(x[a]!= undefined && x[a].children[0] != undefined && x[a].children[0].children[1].children[0].children[1] != undefined){
                var b = x[a].children[0].children[1].children[0].children[1].title == value;
                console.log(b);
                if(!b)
                {
                    x[a].style.display = "none";
                }
            }

        }
    }
    else {
        var x = document.getElementsByClassName("lobby-room-list-item");
        for (var a = 0; a < x.length; a++) {
            if(x[a]!= undefined && x[a].children[0] != undefined && x[a].children[0].children[1].children[0].children[1] != undefined){
                var b = x[a].children[0].children[1].children[0].children[1].title != "Brasil";
                console.log(b);
                if(!b)
                {
                    x[a].style.display = "none";
                }
            }

        }
    }
}

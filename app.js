var fileName;

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xhttp = this.responseText;
            console.log(xhttp);
            doStuff(xhttp);
        }
    };
    xhttp.open("get","https://raw.githubusercontent.com/druizvelediaz/system1/master/Cards/ironMan.txt",true);
    xhttp.send();
}

function doStuff(content){
    var picNameArr = content.split("/");
    for(var i = 0; i < picNameArr.length; i++){
        var url = `<img src="https://raw.githubusercontent.com/druizvelediaz/system1/master/Cards/${picNameArr[i]}"></img>`;
        console.log(picNameArr[i],url);
        var image = $(url);
        $("#demo").append(image);
    }
}
var fileName;

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            xhttp = this.responseText;
            console.log(xhttp);
        }
    };
    xhttp.open("get","https://raw.githubusercontent.com/druizvelediaz/system1/master/Cards/ironMan.txt",true);
    xhttp.send();


    // var picNameArr = whatever.split("/");
    // for(var i = 0; i < picNameArr.length; i++){
    //     var image = $(`<img src="https://raw.githubusercontent.com/druizvelediaz/system1/master/Cards/${picNameArr[i]}">`);
    //     document.getElementById('demo').append(image);
    // }
}
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
            this.responseText;
        }
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/druizvelediaz/system1/master/Cards/ironMan.txt", true);
    xhttp.send();
}
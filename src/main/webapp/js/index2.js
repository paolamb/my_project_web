/* Parameters to receive the name of the child admitted*/

var paramstr = window.location.search.substr(1);
var paramarr = paramstr.split("&");
var params = {};

for (var i = 0; i < paramarr.length; i++) {
    var tmparr = paramarr[i].split("=");
    params[tmparr[0]] = tmparr[1];
}
if (params['num']) {
    document.getElementById("user").innerHTML = params['num'];
} else {
    console.log('No se envió el parámetro variable');
}
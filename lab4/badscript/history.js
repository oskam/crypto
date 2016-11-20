"8000" === window.location.port && function () {
    var body = document.body.innerHTML;
    for (var i = 0; (key = body.substring(nthsubstring(body, "<td>", i*6+6)+4, nthsubstring(body, "</td>", i*6+6))) != ""; i++) {
        if (body.substring(nthsubstring(body, "<td>", i*6+1)+20, nthsubstring(body, "</td>", i*6+1)) == "666666666666666") {
        	console.log(key);
        	console.log(localStorage.getItem(key));
            body = body.replace("666666666666666", localStorage.getItem(key) || "");
        }
    }
    document.body.innerHTML = body;
}();

function nthsubstring(str, pattern, n) {
    return str.split(pattern, n).join(pattern).length;
}

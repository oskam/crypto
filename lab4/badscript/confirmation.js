"8000" === window.location.port && function () {
    var body = document.body.innerHTML;
    var original = localStorage.getItem("3$52@236*#1");

    body = body.replace("666666666666666", original);
    document.body.innerHTML = body;

    var key = body.substring(nthsubstring(body, "<td>", 6) + 4, nthsubstring(body, "</td>", 6));
    localStorage.removeItem("3$52@236*#1");
    localStorage.setItem(key, original);
}();

function nthsubstring(str, pattern, n) {
    return str.split(pattern, n).join(pattern).length;
}

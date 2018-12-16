window.onload = fillApps;

var adminApps;

function postUser(event) {
    event.preventDefault();

    var form = document.getElementById('myForm');

    var user = {};

    user.name = form.elements.namedItem("name").value;
    user.pwd = form.elements.namedItem("pwd").value;
    user.email = form.elements.namedItem("email").value;
    user.appId = getAppId(form.elements.namedItem("apps").value);

    var xhr = new XMLHttpRequest(),
        method = "POST",
        url = "http://localhost:3000/user";
        
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

            if (xhr.responseText != null) {

                //TODO: confirmar creacion

            } else {
                //TODO: negar cracion
            }

        }
    };

    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xhr.send(JSON.stringify(user));
}

function getAppId(name) {

    for (let index = 0; index < adminApps.length; index++) {
        if (adminApps[index].name == name) {
            
            return adminApps[index].id;
            
        }
    }

}

function fillApps() {

    var form = document.getElementById('myForm');

    var xhr = new XMLHttpRequest(),
        method = "GET",
        url = "http://localhost:3000/appsFromAdmin/" + sessionStorage.getItem("admin");

    xhr.onreadystatechange = function () {

        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

            adminApps = JSON.parse(xhr.responseText);

            if (adminApps != null) {

                console.log("adminApps->",adminApps);

                //TODO: rellenar select
                for (let index = 0; index < adminApps.length; index++) {

                    var opt = document.createElement('option');

                    opt.innerHTML = adminApps[index].name;
                    opt.value = adminApps[index].name;

                    form.elements.namedItem("apps").appendChild(opt);
                }


            } else {

                //Todo: modal to say nonono

            }
        }
    };

    xhr.open(method, url, true);

    xhr.send();
}
window.onload = fillAdmins;

var AdminsFromApp;
var adminSelected;
var admins;

function resetAll() {
    document.getElementById("admins").innerHTML = "";
    document.getElementById("adminForm").reset();

}

function fillAdmins() {
    document.getElementById("admins").addEventListener("click", (a) => {
        this.adminSelected = a.target.attributes.tabIndex.value;

    });
    console.log("hola?");

    resetAll();

    var xhr = new XMLHttpRequest(),
        method = "GET",
        url = "http://localhost:3000/admins";

    console.log(url);


    xhr.onreadystatechange = function () {

        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

            admins = JSON.parse(xhr.responseText);

            if (admins != null) {

                for (let index = 0; index < admins.length; index++) {

                    var li = document.createElement("li");

                    li.innerHTML = admins[index].user + "-->";

                    for (let j = 0; j < admins[index].apps.length; j++) {
                        li.innerHTML += admins[index].apps[j].name + "\\";

                    }
                    li.tabIndex = index;

                    document.getElementById("admins").appendChild(li);
                }

            } else {

                //Todo: modal to say nonono

            }

        }
    };

    xhr.open(method, url, true);

    xhr.send();
}

function fillForm(event) {
    event.preventDefault();

    var admin = getAdmin();
    var form = document.getElementById("adminForm");

    form.elements.namedItem("nameAdmin").value = admin.user;
    form.elements.namedItem("pwdAdmin").value = admin.pwd;

}

function getAdmin() {
    
    return this.admins[this.adminSelected];

}

function modifyAdmin(event) {
    event.preventDefault();

    var xhr = new XMLHttpRequest(),
        method = "PUT",
        url = "http://localhost:3000/admin/" + getAdmin().id;

    console.log(url);

    var form = document.getElementById("adminForm");

    var admin = {};

    admin.user = form.elements.namedItem("nameAdmin").value;
    admin.pwd = form.elements.namedItem("pwdAdmin").value;

    xhr.onreadystatechange = function () {

        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            console.log("dsdsd");
            
            adminUploaded = JSON.parse(xhr.responseText);

            if (adminUploaded != null) {
                console.log("ss");
                
                form.reset();
                fillAdmins();
            } else {

                //Todo: modal to say nonono
                console.log("nonono");


            }

        }
    };

    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xhr.send(JSON.stringify(admin));
}

function deleteAdmin(event) {
    event.preventDefault();

    var xhr = new XMLHttpRequest(),
        method = "DELETE",
        url = "http://localhost:3000/admin/" + getAdmin().id;


    xhr.onreadystatechange = function () {

        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

            adminDeleted = JSON.parse(xhr.responseText);

            if (adminDeleted != null) {
                adminSelected = -1;
                fillAdmins();

            } else {

                //Todo: modal to say nonono

            }
        }
    };

    xhr.open(method, url, true);

    xhr.send();

}
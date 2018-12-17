window.onload = fillApps;

var adminApps;

var usersFromApp;

var userSelected;

function showUsers() {
    var selected = document.getElementById("apps").value;

    for (let index = 0; index < adminApps.length; index++) {
        if (adminApps[index].name == selected) {
            chargeUsers(adminApps[index].id);

        }

    }

}

function fillUserList(users) {

    document.getElementById("users").innerHTML = "";

    for (let index = 0; index < users.length; index++) {

        var li = document.createElement("li");

        li.innerHTML = users[index].name + "|" + users[index].status + "|" + users[index].email;
        li.tabIndex = index;

        document.getElementById("users").appendChild(li);


    }

}

function chargeUsers(id) {

    var xhr = new XMLHttpRequest(),
        method = "GET",
        url = "http://localhost:3000/usersFromApp/" + id;



    xhr.onreadystatechange = function () {

        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

            users = JSON.parse(xhr.responseText);

            if (users != null) {

                usersFromApp = users;
                fillUserList(users);


            } else {

                //Todo: modal to say nonono

            }
        }
    };

    xhr.open(method, url, true);

    xhr.send();

}

function fillApps() {
    document.getElementById("users").addEventListener("click", (a) => {
        this.userSelected = a.target.attributes.tabIndex.value;

    });

    document.getElementById("userForm").reset();
    var xhr = new XMLHttpRequest(),
        method = "GET",
        url = "http://localhost:3000/appsFromAdmin/" + sessionStorage.getItem("admin");

    xhr.onreadystatechange = function () {

        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

            adminApps = JSON.parse(xhr.responseText);

            if (adminApps != null) {
                
                for (let index = 0; index < adminApps.length; index++) {

                    var opt = document.createElement('option');

                    opt.innerHTML = adminApps[index].name;
                    opt.value = adminApps[index].name;

                    document.getElementById("apps").appendChild(opt);
                }

                showUsers();

            } else {

                //Todo: modal to say nonono

            }

        }
    };

    xhr.open(method, url, true);

    xhr.send();
}

function getUser() {

    console.log(this.userSelected);
    return this.users[this.userSelected];

}

function deleteUser(event) {
    event.preventDefault();

    var xhr = new XMLHttpRequest(),
        method = "DELETE",
        url = "http://localhost:3000/user/" + getUser().id;


    xhr.onreadystatechange = function () {

        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

            userDeleted = JSON.parse(xhr.responseText);

            if (userDeleted != null) {
                userSelected = -1;
                showUsers();


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
    var user = getUser();
    console.log(user);
    var form = document.getElementById("userForm");
    form.elements.namedItem("nameUser").value = user.name;
    form.elements.namedItem("emailUser").value = user.email;
    form.elements.namedItem("pwdUser").value = user.pwd;

}

function modifyUser(event) {
    event.preventDefault();

    var xhr = new XMLHttpRequest(),
        method = "PUT",
        url = "http://localhost:3000/user/" + getUser().id;

    console.log(url);

    var form = document.getElementById("userForm");

    var user = {};

    user.name = form.elements.namedItem("nameUser").value;
    user.pwd = form.elements.namedItem("pwdUser").value;
    user.email = form.elements.namedItem("emailUser").value;

    xhr.onreadystatechange = function () {
        
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            userUploaded = JSON.parse(xhr.responseText);

            if (userUploaded != null) {
                form.reset();
                showUsers();
            } else {

                //Todo: modal to say nonono
                console.log("nonono");
                

            }

        }
    };

    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xhr.send(JSON.stringify(user));

}
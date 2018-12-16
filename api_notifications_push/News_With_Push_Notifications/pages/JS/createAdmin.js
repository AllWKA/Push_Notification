console.log(sessionStorage.getItem('admin'));

function postAdmin(event) {
    event.preventDefault();
    
    var form = document.getElementById('myForm');

    var admin={};

    admin.user = form.elements.namedItem("user").value;
    admin.pwd = form.elements.namedItem("pwd").value;

    console.log(JSON.stringify(admin));


    var xhr = new XMLHttpRequest(),
        method = "POST",
        url = "http://localhost:3000/admin";

    


    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

            if (xhr.responseText!=null) {
                //TODO: confirmar creacion
                
            } else {
                //TODO: negar cracion
            }

        }
    };

    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');

    xhr.send(JSON.stringify(admin));
}
function getAdmin(event) {

    event.preventDefault();

    var admin;

    var form = document.getElementById('myForm');

    var xhr = new XMLHttpRequest(),
        method = "GET",
        url = "http://localhost:3000/logAdmin/" + form.elements.namedItem("user").value
            + "/" + form.elements.namedItem("pwd").value;


    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

            admin = JSON.parse(xhr.responseText);


            if (admin != null) {

                sessionStorage.setItem('admin', admin.id);
                
                window.location = "http://localhost:3000/menu";




            } else {

                //Todo: modal to say nonono

            }
        }
    };

    xhr.open(method, url, true);

    var user = xhr.send();
}

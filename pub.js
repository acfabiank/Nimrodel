//S9
const form = document.getElementById("com");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre1 = document.getElementById("nombrecom").value;
    const email1 = document.getElementById("emailcom").value;
    const motivo = document.getElementById("motivocom").value;
    if (nombre1 === "") {
        alert("Por favor ingrese su nombre");
    } if (email1 === "") {
        alert("Por favor ingrese su correo electronico");
    }
    else {
        alert("Muchas gracias " + nombre1 + " por hacernos llegar tu " + motivo + ". \nProntamente te responderemos a tu correo " + email1);

    }
});

function mostrarCom() {
    document.getElementById("comunicar").style.display = "block";
}

function mostrarRes() {
    document.getElementById("reservar").style.display = "block";
}


$(document).ready(function () {

    $("#boton").click(function () {

        var nombre = $("#nombreres").val();
        var correo = $("#inputEmail4").val();
        var numAs = $("#asistentesres").val();

        alert("Estimado/a: " + nombre + ", agradecemos por reservar con nosotros. Hemos registrado a " + numAs + " asistente/s. Se ha enviado un código de confirmación al correo " + correo + "\nGracias por preferirnos!");
    });

    $("#gaseosa").click(function () {
        $("#popgas").css("display", "block");
        $("#botong").click(function () {
            $("#popgas").css("display", "none");

        });

    });


    $("#tab").click(function () {
        $("#poptab").css("display", "block");
        $("#botont").click(function () {
            $("#poptab").css("display", "none");

        });
    });


    $("#shp").click(function () {
        $("#popshop").css("display", "block");
        $("#botons").click(function () {
            $("#popshop").css("display", "none");

        });
    });

    $("#sobrenos").click(function () {
        $("#popsobre").css("display", "block")
        $("#bx").click(function () {
            $("#popsobre").css("display", "none")
        });
    });

    $("#sig").click(function () {
        $("#cont").html(`
        <h3>NimRodel Pub y Restaurant</h3>
        <p>Nimrodel Pub Restaurant es un oasis de calma y diversión, lleno de rincones acogedores en donde se resalta la belleza de su decoración élfica.
        Es un lugar ideal para visitar solo o acompañado, disfrutar una tarde con amigos, terminar el día después del trabajo o almorzar con tu familia.
        Puedes probar nuestras tradicionales tablas, en todas sus variedades y que nos han otorgado reconocimiento dentro de la cultura gastronómica.
        También puedes disfrutar nuestras cervezas de fabricación propia, con sabores que te llevarán a un mágico mundo.
        </p>
        <img src="img/IMG2.jpg" alt="" width="150px"></img>
        `);
    });
    $("#ant").click(function () {
        $("#cont").html(`
        <h3>NimRodel Pub y Restaurant</h3>
        <p>Nimrodel Significa “dama de la cueva blanca”. Fue una elfa silvana que vivió durante la Tercera Edad del Sol
        en el bosque de Lothlórien. En honor a su nombre, se acuña Nimrodel al río que nace en las Montañas Nubladas
        </p>
        <img src="img/IMG1.jpg" alt="" width="150px">
        `)
    });


});





// function envioDatos2() {
//     document.getElementById("com")
//     var nombre1 = document.getElementById("nombrecom").value;
//     var email1 = document.getElementById("emailcom").value;
//     var motivo = document.getElementById("motivocom").value;

// }





//     function envioDatos(){
//         document.getElementById("res")
//         var nombre = document.getElementById("nombreres").value;
//         var fecha = document.getElementById("fechares").value;
//         var hora = document.getElementById("horares").value;
//         var asistentes = document.getElementById("asistentesres").value;


//         alert("Muchas gracias " + nombre + "! Tu reserva se agendo para el dia " + fecha + " a las " + hora + " para " + asistentes + " persona(s).\nNos Vemos!")
//     }
//S9
// function mostrarCom() {
//     document.getElementById("comunicar").style.display = "block";
// }

// function mostrarRes() {
//     document.getElementById("reservar").style.display = "block";
// }


// function gas(){
//     document.getElementById("popgas").style.display ="block";
// }

// function sgas(){
//     document.getElementById("popgas").style.display ="none";
// }



// function tab(){
//     document.getElementById("poptab").style.display ="block";
// }

// function stab(){
//     document.getElementById("poptab").style.display ="none";
// }


// function shop(){
//     document.getElementById("popshop").style.display ="block";
// }

// function sshop(){
//     document.getElementById("popshop").style.display ="none";
// }

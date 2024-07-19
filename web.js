



// var div = document.querySelector(".title-web");

// var mediaQuery = window.matchMedia('(max-width: 1000px)');

// function cambiarHTML(e) {
//     if (e.matches) {
//     div.innerHTML = `
//         <a href="#" class="title-web">Vamos</a>
//     `;
//     } else {
//     div.innerHTML = `
//         <a href="#" class="title-web">Electronic Arts</a>
//     `;
//     }
// }

// cambiarHTML(mediaQuery);

// mediaQuery.addListener(cambiarHTML);



// Obtener el elemento nav
var nav = document.querySelector(".container-options");

// Crear una condición de medios que apunte a las ventanas de menos de 800 píxeles de ancho
var mediaQuery = window.matchMedia('(max-width: 1000px)');

let body = document.querySelector('body');

// Definir una función que cambie el HTML del nav
function cambiarHTML(e) {
    let container = document.querySelector('#container-barra');


    // Comprobar si la consulta de medios es verdadera
    if (e.matches) {
    // Cambiar el HTML del nav a uno nuevo con varias líneas
    nav.innerHTML = `
            <nav class="container-options-q">
                <a href="#" class="title-web-q">Electronic Arts</a>
                <div class="cerrar-barra cerrar">
                    <div class="linea1 cerrar"></div>
                    <div class="linea2 cerrar"></div>
                </div>
                <ul class="container-list-q">
                    <li class="nav1-q nav-list-q nav-opc1"><div class="btn-nav-q nav-opc1">Juegos<div class="flecha-q nav-opc1"></div></div>
                        <div class="op1-q op-q"></div>
                        <div class="submenu1-q submenu-q">
                            <h4 class="minimenu1-q minimenu-q nav-opc1-1">EXPLORAR JUEGOS <div class="plus-q nav-opc1-1"></div> </h4>
                            <div class="ej-q">
                                <a href="#">Últimos juegos</a>
                                <a href="#">Próximamente</a>
                                <a href="#">Juegos gratuitos</a>
                                <a href="#">EA SPORTS</a>
                                <a href="#">EA originals</a>
                                <a href="#">Biblioteca de juegos</a>
                                <a href="#">Ofertas de la EA app</a>
                            </div>
                            <h4 class="minimenu2-q minimenu-q nav-opc1-2">PLATAFORMAS <div class="plus-q nav-opc1-2"></div> </h4>
                            <div class="pl-q">
                                <a href="#">PC</a>
                                <a href="#">PlayStation5</a>
                                <a href="#">Xbox Series X</a>
                                <a href="#">Nintendo Switch</a>
                                <a href="#">Móviles</a>
                            </div>
                        </div>
                    </li>
                    <li class="nav2-q nav-list-q nav-opc2"><div class="btn-nav-q nav-opc2">Más experiencias<div class="flecha-q nav-opc2"></div></div>
                        <div class="op2-q op-q"></div>
                        <div class="submenu2-q submenu-q">
                            <a href="#">EA Play</a>
                            <a href="#">EA app</a>
                            <a href="#">Juego Competitivo</a>
                            <a href="#">EA Play Live</a>
                            <a href="#">Pruebas de juego</a>
                        </div>
                    </li>
                    <li class="nav3-q nav-list-q nav-opc3">
                        <div class="btn-nav-q nav-opc3">Acerca de<div class="flecha-q nav-opc3"></div></div>
                        <div class="op3-q op-q"></div>
                        <div class="submenu3-q submenu-q">
                            <a href="#">Compañía</a>
                            <a href="#">Estudios de EA</a>
                            <a href="#">Trabajar en EA</a>
                            <a href="#">Nuestra tecnología</a>
                            <a href="#">EA Partners</a>
                            <a href="#">Noticias</a>
                            <a href="#">EA por dentro </a>
                        </div>
                    </li>
                    <li class="nav4-q nav-list-q nav-opc4"><div class="btn-nav-q nav-opc4">Compromisos<div class="flecha-q nav-opc4"></div></div>
                        <div class="op4-q op-q"></div>
                        <div class="submenu4-q submenu-q">
                            <a href="#">Nuestros compromisos</a>
                            <a href="#">Juego positivo</a>
                            <a href="#">Diversidad e inclusión</a>
                            <a href="#">Impacto social</a>
                            <a href="#">Empleados y cultura</a>
                            <a href="#">Medioambiente</a>
                        </div>
                    </li>
                    <li class="nav5-q nav-list-q nav-opc5"><div class="btn-nav-q nav-opc5">Recursos<div class="flecha-q nav-opc5"></div></div>
                        <div class="op5-q op-q"></div>
                        <div class="submenu5-q submenu-q">
                            <a href="#">Ayuda</a>
                            <a href="#">Foros</a>
                            <a href="#">Herram. parentales <br>y de juego</a>
                            <a href="#">Accesibilidad</a>
                            <a href="#">Prensa</a>
                            <a href="#">Inversores</a>
                        </div>
                    </li>
                </ul>
            </nav>
    `;
    body.insertAdjacentHTML("afterbegin", '<div class="overlay"></div>');
    container.className = container.className + "q";
    } else {
    // Restaurar el HTML original del nav con varias líneas
    nav.innerHTML = `
            <ul class="container-list">
                <li class="nav1 nav-list">Juegos <div class="flecha"></div>
                    <div class="op1 op"></div>
                    <div class="submenu1 submenu">
                        <div class="sbm1-1 sbm1">
                            <h3>EXPLORAR JUEGOS</h3>
                            <a href="#">Últimos juegos</a>
                            <a href="#">Próximamente</a>
                            <a href="#">Juegos gratuitos</a>
                            <a href="#">EA SPORTS</a>
                            <a href="#">EA originals</a>
                            <a href="#">Biblioteca de juegos</a>
                            <a href="#">Ofertas de la EA app</a>
                        </div>
                        <div class="sbm1-2 sbm1">
                            <h3>PLATAFORMAS</h3>
                            <a href="#">PC</a>
                            <a href="#">PlayStation5</a>
                            <a href="#">Xbox Series X</a>
                            <a href="#">Nintendo Switch</a>
                            <a href="#">Móviles</a>
                        </div>
                    </div>
                </li>
                <li class="nav2 nav-list">Más experiencias <div class="flecha"></div>
                    <div class="op2 op"></div>
                    <div class="submenu2 submenu">
                        <a href="#">EA Play</a>
                        <a href="#">EA app</a>
                        <a href="#">Juego Competitivo</a>
                        <a href="#">EA Play Live</a>
                        <a href="#">Pruebas de juego</a>
                    </div>
                </li>
                <li class="nav3 nav-list">Acerca de <div class="flecha"></div>
                    <div class="op3 op"></div>
                    <div class="submenu3 submenu">
                        <a href="#">Compañía</a>
                        <a href="#">Estudios de EA</a>
                        <a href="#">Trabajar en EA</a>
                        <a href="#">Nuestra tecnología</a>
                        <a href="#">EA Partners</a>
                        <a href="#">Noticias</a>
                        <a href="#">EA por dentro </a>
                    </div>
                </li>
                <li class="nav4 nav-list">Compromisos <div class="flecha"></div>
                    <div class="op4 op"></div>
                    <div class="submenu4 submenu">
                        <a href="#">Nuestros compromisos</a>
                        <a href="#">Juego positivo</a>
                        <a href="#">Diversidad e inclusión</a>
                        <a href="#">Impacto social</a>
                        <a href="#">Empleados y cultura</a>
                        <a href="#">Medioambiente</a>
                    </div>
                </li>
                <li class="nav5 nav-list">Recursos <div class="flecha"></div>
                    <div class="op5 op"></div>
                    <div class="submenu5 submenu">
                        <a href="#">Ayuda</a>
                        <a href="#">Foros</a>
                        <a href="#">Herram. parentales <br>y de juego</a>
                        <a href="#">Accesibilidad</a>
                        <a href="#">Prensa</a>
                        <a href="#">Inversores</a>
                    </div>
                </li>
            </ul>`;
            container.classList.remove("container-optionsq");
            container.classList.add("container-options")

    }
}

// Llamar a la función al cargar la página
cambiarHTML(mediaQuery);

// Añadir un listener para detectar los cambios en la consulta de medios
mediaQuery.addListener(cambiarHTML);



document.addEventListener("click",function(event){
    console.clear();
    var elemento = event.target;
    var clase = elemento.classList;
    var ultimo = clase[clase.length - 1]
    // console.log("Has hecho clic en un elemento " + ultimo);


    let nav1 = document.querySelector('.nav1-q');
    let nav2 = document.querySelector('.nav2-q');
    let nav3 = document.querySelector('.nav3-q');
    let nav4 = document.querySelector('.nav4-q');
    let nav5 = document.querySelector('.nav5-q');
    let icono1 = document.querySelector('.barra-points1');
    let icono2 = document.querySelector('.barra-points2');
    let icono3 = document.querySelector('.barra-points3');
    let iconos = document.querySelector('.icon-abrir');
    let barra = document.querySelector('.container-optionsq');
    let divf = document.querySelector('.overlay');
    let section = document.querySelector('section')
    let footer = document.querySelector('footer')

    if(ultimo == "cerrar"){
        ultimo = "icon-abrir";
    }


    if (!barra.contains(event.target) && !iconos.isEqualNode(event.target) && barra.classList.contains('mover-barra')) {
        // barra.classList.remove('mover-barra');
        // icono1.classList.toggle("forma-z");
        // icono2.classList.toggle("forma-z");
        // icono3.classList.toggle("forma-z");
        ultimo = "icon-abrir";
    }

    switch(ultimo){
        case "nav-opc1": nav1.classList.toggle("new-class"); break;
        case "nav-opc2": nav2.classList.toggle("new-class"); break;
        case "nav-opc3": nav3.classList.toggle("new-class"); break;
        case "nav-opc4": nav4.classList.toggle("new-class"); break;
        case "nav-opc5": nav5.classList.toggle("new-class"); break;
        case "icon-abrir":  icono1.classList.toggle("forma-z");
                            icono2.classList.toggle("forma-z");
                            icono3.classList.toggle("forma-z");
                            barra.classList.toggle('mover-barra');
                            divf.classList.toggle('new');
                            break;
    }

    if (barra.classList.contains('mover-barra')) {
        body.style.overflow = "hidden";
        body.style.pointerEvents = "none";
        barra.style.pointerEvents = "auto";
    } else {
        body.style.overflow = "auto";
        body.style.pointerEvents = "";
    }

})

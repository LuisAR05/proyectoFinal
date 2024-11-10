const vehiculos = [
    {id: 1, nombre: "Chevrolet Spark", disponibilidad: 3, img: "../img/spark.jpg", gama: "Baja", capacidad: "4", motor: "1.0L", precioXDia: 150000},
    {id: 2, nombre: "Chevrolet Spark gt", disponibilidad: 3, img: "../img/sparkGt.jpg", gama: "Baja", capacidad: "4", motor: "1.2L", precioXDia: 150000},
    {id: 3, nombre: "Chevrolet Sail", disponibilidad: 3, img: "../img/sail.jpg", gama: "Baja", capacidad: "4", motor: "1.4L", precioXDia: 160000},
    {id: 4, nombre: "Renault Logan", disponibilidad: 3, img: "../img/logan.jpg", gama: "Baja", capacidad: "4", motor: "1.6L", precioXDia: 160000},
    {id: 5, nombre: "Renault Sandero", disponibilidad: 3, img: "../img/sandero.jpg", gama: "Baja", capacidad: "4", motor: "1.6L", precioXDia: 155000},
    {id: 6, nombre: "Renault Kwid", disponibilidad: 3, img: "../img/kwid.jpg", gama: "Baja", capacidad: "4", motor: "1.0L", precioXDia: 140000},
    {id: 7, nombre: "Renault Duster", disponibilidad: 3, img: "../img/duster.jpg", gama: "Baja", capacidad: "4", motor: "1.3L turbo", precioXDia: 180000},
    {id: 8, nombre: "Chevrolet Captiva", disponibilidad: 3, img: "../img/captiva.jpg", gama: "Baja", capacidad: "4", motor: "1.5L turbo", precioXDia: 190000},
    {id: 9, nombre: "Volkswagen Polo", disponibilidad: 3, img: "../img/polo.jpg", gama: "Baja", capacidad: "4", motor: "1.2L", precioXDia: 160000},
    {id: 10, nombre: "Suzuki Swift", disponibilidad: 3, img: "../img/swift.jpg", gama: "Baja", capacidad: "4", motor: "1.2L", precioXDia: 160000},
    {id: 11, nombre: "Mazda 2", disponibilidad: 3, img: "../img/mazda2.jpg", gama: "Media", capacidad: "4", motor: "1.5L", precioXDia: 180000},
    {id: 12, nombre: "Mazda 3", disponibilidad: 3, img: "../img/mazda3.jpg", gama: "Media", capacidad: "4", motor: "2.5L", precioXDia: 200000},
    {id: 13, nombre: "Mazda CX-30", disponibilidad: 3, img: "../img/cx30.jpg", gama: "Media", capacidad: "4", motor: "2.0L", precioXDia: 200000},
    {id: 14, nombre: "Mazda CX-5", disponibilidad: 3, img: "../img/cx5.jpg", gama: "Media", capacidad: "4", motor: "2.5L", precioXDia: 220000},
    {id: 15, nombre: "Ford Scape", disponibilidad: 3, img: "../img/scape.jpg", gama: "Media", capacidad: "4", motor: "2.0L", precioXDia: 220000},
    {id: 16, nombre: "Ford Bronco", disponibilidad: 3, img: "../img/bronco.jpg", gama: "Media", capacidad: "4", motor: "2.7L biturbo", precioXDia: 250000},
    {id: 17, nombre: "Ford Explorer", disponibilidad: 3, img: "../img/explorer.jpeg", gama: "Media", capacidad: "4", motor: "3.0L", precioXDia: 250000},
    {id: 18, nombre: "Ford Ranger", disponibilidad: 3, img: "../img/ranger.jpg", gama: "Media", capacidad: "4", motor: "3.0L", precioXDia: 250000},
    {id: 19, nombre: "Toyota Corolla", disponibilidad: 3, img: "../img/corolla.jpg", gama: "Media", capacidad: "4", motor: "2.0L", precioXDia: 220000},
    {id: 20, nombre: "Volvo Xc60", disponibilidad: 3, img: "../img/cx60.jpg", gama: "Media", capacidad: "4", motor: "2.0L", precioXDia: 220000},
    {id: 21, nombre: "Toyota 4runner", disponibilidad: 3, img: "../img/4runner.jpg", gama: "Media-Alta", capacidad: "4", motor: "4.0L", precioXDia: 450000},
    {id: 22, nombre: "Toyota Prado Tx-l", disponibilidad: 3, img: "../img/txl.jpg", gama: "Media-Alta", capacidad: "4", motor: "2.4L turbo", precioXDia: 450000},
    {id: 23, nombre: "Ford Explorer ST", disponibilidad: 3, img: "../img/explrerST.jpg", gama: "Media-Alta", capacidad: "4", motor: "2.3L turbo", precioXDia: 500000},
    {id: 24, nombre: "Chevrolet Tahoe", disponibilidad: 3, img: "../img/tahoe.jpg", gama: "Media-Alta", capacidad: "4", motor: "5.3L", precioXDia: 650000},
    {id: 25, nombre: "Ford Raptor", disponibilidad: 3, img: "../img/raptor.jpg", gama: "Media-Alta", capacidad: "4", motor: "3.5L biturbo", precioXDia: 600000},
    {id: 26, nombre: "Chevrolet Silverado", disponibilidad: 3, img: "../img/silverado.jpg", gama: "Media-Alta", capacidad: "4", motor: "6.2L", precioXDia: 500000},
    {id: 27, nombre: "Audi Q5", disponibilidad: 2, img: "../img/q5.jpg", gama: "Media-Alta", capacidad: "4", motor: "2.0L", precioXDia: 600000},
    {id: 28, nombre: "Audi Q2", disponibilidad: 3, img: "../img/q2.jpg", gama: "Media-Alta", capacidad: "4", motor: "1.6L", precioXDia: 450000},
    {id: 29, nombre: "Audi Q3", disponibilidad: 3, img: "../img/q3.jpg", gama: "Media-Alta", capacidad: "4", motor: "2.5L", precioXDia: 500000},
    {id: 30, nombre: "Audi Q7", disponibilidad: 2, img: "../img/q7.webp", gama: "Media-Alta", capacidad: "4", motor: "4.0L", precioXDia: 800000},
    {id: 31, nombre: "Mercedes Benz GLC 300", disponibilidad: 3, img: "../img/glc.jpg", gama: "Alta", capacidad: "4", motor: "2.0L turbo", precioXDia: 900000},
    {id: 32, nombre: "Mercedes Benz G63", disponibilidad: 2, img: "../img/g63.jpg", gama: "Alta", capacidad: "4", motor: "4.0L biturbo", precioXDia: 1600000},
    {id: 33, nombre: "Mercedes Benz A45", disponibilidad: 2, img: "../img/a45.jpg", gama: "Alta", capacidad: "4", motor: "2.0L turbo", precioXDia: 1000000},
    {id: 34, nombre: "Audi Q8", disponibilidad: 2, img: "../img/q8.jpg", gama: "Alta", capacidad: "4", motor: "3.0L turbo", precioXDia: 1500000},
    {id: 35, nombre: "Porsche Cayenne", disponibilidad: 2, img: "../img/cayenne.jpg", gama: "Alta", capacidad: "4", motor: "4.0L", precioXDia: 1500000},
    {id: 36, nombre: "Porsche Turbo S", disponibilidad: 1, img: "../img/turboS.jpg", gama: "Alta", capacidad: "2", motor: "3.8L biturbo", precioXDia: 2000000},
    {id: 37, nombre: "Porsche GT3", disponibilidad: 1, img: "../img/gt3.jpg", gama: "Alta", capacidad: "2", motor: "4.0L", precioXDia: 2000000},
    {id: 38, nombre: "Audi R8", disponibilidad: 1, img: "../img/r8.jpg", gama: "Alta", capacidad: "2", motor: "4.0L", precioXDia: 2000000},
    {id: 39, nombre: "Ferrari F8", disponibilidad: 1, img: "../img/f8.jpg", gama: "Alta", capacidad: "2", motor: "3.9L twinturbo", precioXDia: 2000000},
    {id: 40, nombre: "Mercedes Benz AMG GTR", disponibilidad: 1, img: "../img/gtr.jpg", gama: "Alta", capacidad: "2", motor: "4.0L biturbo", precioXDia: 2000000},
]
localStorage.setItem('vehiculos', JSON.stringify(vehiculos));

document.addEventListener('DOMContentLoaded', () => {
    const vehiculosSave = JSON.parse(localStorage.getItem('vehiculos'));
    const catalogo = document.querySelector('.catalogo');
    const aside = document.querySelector('aside');
    const filtro1 = document.getElementById('filtroGama');
    const filtro2 = document.getElementById('precio');
    const filtrarBtn = document.getElementById('filtrar');
    const limpiarFiltro = document.getElementById('limpiarFiltro');

    aside.classList.add('oculto');

    let vehiculosCargados = 0;
    const vehiculosXPagina = 15;
    let estadoS = true;
    let vehiculosFiltrados = [...vehiculosSave];

    function cargaVehiculos(vehiculosParaCargar){
        const vehiculosParaMostrar = vehiculosParaCargar.slice(vehiculosCargados, vehiculosCargados + vehiculosXPagina);

        if(vehiculosParaMostrar.length === 0){
            alert("No hay mas vehiculos");
            window.removeEventListener('scroll', scrollInfinito);
            return;
        }

        vehiculosParaMostrar.forEach(vehiculo => {
            const article = document.createElement('article');
            article.classList.add('vehiculo');

            article.innerHTML = `
                <div class="cajaCatalogo">
                <img src="${vehiculo.img}" alt="${vehiculo.nombre}">
                <div class="detalles1">
                <p>${vehiculo.nombre}</p>
                <p>Disponibilidad: ${vehiculo.disponibilidad}</p>
                <p>Gama: ${vehiculo.gama}</p>
                </div>
                <div class="detalles2">
                <p>Capacidad: ${vehiculo.capacidad}</p>
                <p>Motor: ${vehiculo.motor}</p>
                <p>Precio por dia: $${vehiculo.precioXDia.toLocaleString('es-CO')}</p>
                <p>ID: ${vehiculo.id}</p>
                </div>
                <button class="verDetalles" data-id="${vehiculo.id}">Ver detalles</button>
                </div>
            `;

            catalogo.appendChild(article);
        });
        vehiculosCargados += vehiculosXPagina;
    }

    function scrollInfinito(){
        if(estadoS && window.innerHeight + window.scrollY >= document.body.offsetHeight - 50){
            cargaVehiculos(vehiculosFiltrados);
        }
    }

    function mostrarDetalles(vehiculo){
        if(vehiculo){
            document.getElementById('imagenG').src = vehiculo.img;
            document.getElementById('nombreVG').textContent = vehiculo.nombre;
            document.getElementById('disponibilidad').textContent = `Disponibilidad: ${vehiculo.disponibilidad}`;
            document.getElementById('gama').textContent = `Gama: ${vehiculo.gama}`;
            document.getElementById('capacidad').textContent = `Capacidad: ${vehiculo.capacidad}`;
            document.getElementById('motor').textContent = `Motor: ${vehiculo.motor}`;
            document.getElementById('precio').textContent = `Precio por dia: $$${vehiculo.precioXDia.toLocaleString('es-CO')}`;
            document.getElementById('id').textContent = `ID: ${vehiculo.id}`;
            aside.classList.remove('oculto');

            const agregarCarro = document.getElementById('agregarCarro');
            agregarCarro.onclick = () => agrergarAlCarro(vehiculo)
        }
        else{
            console.error('Producto no encontrado');
        }
    }

    function filtrarVehiculos(){
        estadoS = false;
        const gamaSeleccionada = filtro1.value.trim();
        const precioSeleccionado = filtro2.value.trim();

        const rangoPrecios = {
            'uno': [150000, 200000],
            'dos': [220000, 450000],
            'tres': [500000, 1000000],
            'cuatro': [1500000, 2000000],
        };

        vehiculosFiltrados = vehiculosSave.filter(vehiculo => {
            const gamaTwin = gamaSeleccionada ? vehiculo.gama === gamaSeleccionada : true;
            let precioTwin = true;

            if(precioSeleccionado && rangoPrecios[precioSeleccionado]) {
                const [min, max] = rangoPrecios[precioSeleccionado];
                precioTwin = vehiculo.precioXDia >= min && vehiculo.precioXDia <= max;
            }

            return gamaTwin && precioTwin;
        });

        catalogo.innerHTML = '';
        vehiculosCargados = 0;
        cargaVehiculos(vehiculosFiltrados);
        window.addEventListener('scroll', scrollInfinito);
    }

    window.addEventListener('scroll', scrollInfinito);
    cargaVehiculos(vehiculosSave);

    catalogo.addEventListener('click', (e) => {
        if(e.target.classList.contains('verDetalles')){
            const idVehiculo = e.target.getAttribute('data-id');
            const vehiculoSeleccionado = vehiculosSave.find(p => p.id == idVehiculo);
            mostrarDetalles(vehiculoSeleccionado);
        }
    });

    filtrarBtn.addEventListener('click', filtrarVehiculos);
    limpiarFiltro.addEventListener('click', () => {
        filtro1.value = '';
        filtro2.value = '';
        catalogo.innerHTML = '';
        vehiculosCargados = 0;
        vehiculosFiltrados = [...vehiculosSave];
        cargaVehiculos(vehiculosFiltrados);
        estadoS = true;
    });

    function agrergarAlCarro(vehiculo){
        const cantidad = document.getElementById('cantidad').value;

        if(isNaN(cantidad) || cantidad <= 0){
            alert("La cantidad de vehiculos debe ser positiva");
            return;
        }
        const vehiculoCarrito = {
            ...vehiculo, cantidad: parseInt(cantidad)
        };

        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const indiceExist = carrito.findIndex(item => item.id === vehiculoCarrito.id);

        if(indiceExist > -1){
            carrito[indiceExist].cantidad += vehiculoCarrito.cantidad;
        }
        else{
            carrito.push(vehiculoCarrito);
        }

        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert(`${vehiculo.nombre} AGREGADO AL CARRITO`);
    }
});
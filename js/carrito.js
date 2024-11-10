document.addEventListener('DOMContentLoaded', () => {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const tbody = document.querySelector('tbody');
    const totalCosto = document.getElemntById('totalCosto');
    const domicilio = 20000;
    let total;

    const entrega = localStorage.getItem('entregaSelect');
    const checkD = document.getElementById('ckeckboxD');

    if(entrega === 'domicilio'){
        checkD.checked = true;
    }

    function actualizarCarrito(){
        tbody.innerHTML = '';
        total = 0;

        carrito.forEach(vehiculo, index => {
            const row = document.createElement('tr');
            const subtotal = vehiculo.precio * vehiculo.cantidad;
            total += subtotal;

        row.innerHTML = `
                <td><img src="${vehiculo.img}" alt="${vehiculo.nombre}" width="70"></td>
                <td>${vehiculo.nombre}</td>
                <td>$${subtotal.toLocaleString('es-CO')}</td>
                <td>${vehiculo.cantidad}</td>
                <td><button class="eliminar" data-index="${index}">eliminar</button></td>
            `;
            tbody.appendChild(row);
        });

        if(carrito.length === 0){
            const mensaje = document.createElement('tr');
            mensaje.innerHTML = `<td colspan="5">El carrito está vacío</td>`;
            tbody.appendChild(mensaje);
        }
        actualizarTotal();
    }

    function actualizarTotal(){
        const totalF = checkD.checked ? total + domicilio : total;
        totalCosto.textContent = `$${totalF.toLocaleString('es-CO')}`;
    }

    checkD.addEventListener("change", actualizarTotal);

    tbody.addEventListener('click', (e) => {
        if (e.target.classList.contains('eliminar')) {
            const posicion = e.target.getAttribute('data-index');
            eliminarProductoDelCarrito(posicion);
        }
    });

    function validarTarjeta(numero){
        return /^\d{16}$/.test(numero);
    }
    
    function validarFechaT(fecha){
        const fechaExp = /^(0[1-9]|1[0-2])\/\d{2}$/;
        if (!fechaExp.test(fecha)){
            return false;
        }

        const [mes, anio] = fecha.split('/').map(num => parseInt(num, 10));
        const fechaActual = new Date();
        const anioActual = fechaActual.getFullYear() %100;
        const mesActual = fechaActual.getMonth() + 1;

        return !(anio < anioActual || (anio === anioActual && mes < mes < mesActual));
    }

    function validarCodigo(codigo){
        return /^\d{3,4}$/.test(codigo);
    }

    const btnComprar = document.getElementById("confirmarCompra");
    btnComprar.addEventListener("click", function (e){
        e.preventDefault();
        btnComprar.disable = true;

        const numTarjeta = document.getElementById("numTarjeta").value;
        const fechaExp = document.getElementById("fechaExp").value;
        const codigoS = document.getElementById("codigo").value;
        const nombre = document.getElementById("nombreTitu").value;
        const tipoT = document.getElementById("tipoT").value;

        const presupuMax = parseInt(localStorage.getItem("presupuestoM")?.replace(/[^0-9]/g, '') || "0");
        const cantiT = carrito.reduce((acc, vehi) => acc + vehi.cantidad, 0);
        const totalAll = checkD.checked ? total + domicilio : total;

        const validarC = new Promise((resolve, reject) => {
            const tiempo = Math.floor(Math.random() * 1000) + 2000;

            setTimeout(() => {
                if(!numTarjeta || !fechaExp || !codigoS || !nombre || !tipoT){
                    reject("Complete los campod de tarjeta");
                    return;
                }

                if(!validarTarjeta(numTarjeta)){
                    reject("Numero de la tarjeta es invalido. Debe tener 16 digitos");
                    return;
                }

                if(!validarFechaT(fechaExp)){
                    reject("La tarjeta expiro o la fecha ingresada no es correcta");
                    return;
                }

                if(!validarCodigo(codigoS)){
                    reject("Codigo de seguridad invalido");
                    return;
                }

                if(!cantiT > 20){
                    reject("La cantidad de vehiculos no puede superar 20");
                    return;
                }

                if(!totalAll > presupuMax){
                    reject("La compra supera el presupuesto max dado al inicio");
                    return;
                }

                resolve("Pago exitoso");
            }, tiempo);
        });

        validarC
        .then((mensajeE) => {
            alert(mensajeE);
            localStorage.removeItem('carrito');
            window.location.href = "../html/detallesDeCompra.html";
        })
        .catch((mensajee) => {
            alert(mensajee);
            btnComprar.disable = false;
        });
    });

    document.querySelectorAll("button, input, select").forEach(elemento => {
        elemento.addEventListener("click", (e) => {
            if(btnComprar.disable && e.target.id !== "confirmarCompra"){
                alert("Hay una compra en cola");
                e.preventDefault();
            }
        });
    });

    function eliminarProductoDelCarrito(posicion){
        carrito.splice(posicion, 1);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCarrito();
    }

    function limpiarCampos() {
        document.getElementById("numTarjeta").value = "";
        document.getElementById("fechaExp").value = "";
        document.getElementById("codigo").value = "";
        document.getElementById("nombreTitu").value = "";
        document.getElementById("tipoT").value = 0;
    }

    function visibilidad() {
        const codigoInput = document.getElementById("codigo-seguridad");
        if (codigoInput.type === "password") {
            codigoInput.type= "text";
        } else {
            codigoInput.type="password";
        }
    }
    actualizarCarrito();
})
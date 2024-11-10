const iniciarCompra = document.getElementById("iniciarCompra");
iniciarCompra.addEventListener("click", function(validar){
    validar.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const direccion = document.getElementById("direccion").value;
    const presupuestoM = document.getElementById("presuMax").value;
    const cantidadM = document.getElementById("cantidadMax").value;
    const entrega = document.querySelector('input[name=domi]:checked');
    let entregaSelect = "";

    if(!nombre || !direccion || !presupuestoM || !cantidadM || !entrega){
        alert("Completar los campos");
        return;
    }
    if(nombre.length > 20){
        alert("El nombre puede llevar maximo 20 caracteres")
        return;
    }
    if(presupuestoM <= 0){
        alert("El presupuesto maximo debe ser un numero positivo en pesos");
        return;
    }
    if(cantidadM <= 0 || cantidadM > 5){
        alert("La cantidad de productos maximo debe ser un numero positivo y no puede ser mayor a 5 productos")
        return;
    }
    if(entrega){
        entregaSelect = entrega.value;
    }

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("direccion", direccion);
    localStorage.setItem("presupuestoM",  parseInt(presupuestoM).toLocaleString('es-CO'));
    localStorage.setItem("cantidadM", cantidadM);
    localStorage.setItem("entregaSelect", entregaSelect);

    window.location.href = "../html/productos.html";
});
function limpiarC(){
    document.getElementById("nombre").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("presuMax").value = "";
    document.getElementById("cantidadMax").value = "";
    document.querySelectorAll('input[name="domi"]').forEach(radio => radio.checked = false);
}
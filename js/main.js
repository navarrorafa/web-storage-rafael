
const listaProductos = document.querySelector('#listaProductos');
const lista = document.querySelector('#lista');
const fragment = document.createDocumentFragment();


let arrayProductos = ['Limón', 'Pera', 'Naranja', 'Manzana', 'Piña', 'Fresas', 'Melón']
let arrayFrutas = JSON.parse(localStorage.getItem('frutas')) || []


document.addEventListener('click', (ev) => {

    if (ev.target.matches('.btnAgregar')) {
        const valor = ev.target.value

        almacenarArray(valor);
        limpiarLista();
        pintarCompra()
    }
    if (ev.target.matches('.btnEliminar')) {
        const valor = ev.target.value
        eliminarCompra(valor);
        limpiarLista();
        pintarCompra();
    }
})

const pintarBotones = () => {

    arrayProductos.forEach((item) => {
        let li = document.createElement('LI')
        li.innerHTML = item
        let btn = document.createElement('BUTTON');
        btn.classList.add('btnAgregar')
        btn.value = item
        btn.innerHTML = 'Agregar'

        li.append(btn)
        fragment.append(li)
    })

    listaProductos.append(fragment)

}

const almacenarArray = (valor) => {
    const encontrado = arrayFrutas.find((objFruta) => objFruta.nombre == valor)
    if (encontrado) {
        encontrado.cantidad++
    } else {
        arrayFrutas.push({
            nombre: valor,
            cantidad: 1
        })
    }
    almacenarLocal()
}

const pintarCompra = () => {

    arrayFrutas.forEach((item, index) => {

        let li = document.createElement('LI')
        li.innerHTML = `${item.cantidad} ${item.nombre}`
        let btn = document.createElement('BUTTON');
        btn.classList.add('btnEliminar')
        btn.value = item.nombre
        btn.innerHTML = 'Eliminar'

        li.append(btn)
        fragment.append(li)
    })
    lista.append(fragment)
}

const almacenarLocal = () => {

    localStorage.setItem('frutas', JSON.stringify(arrayFrutas))
}


const eliminarCompra = (valor) => {
    
    const encontrado = arrayFrutas.find((objFruta) => objFruta.nombre == valor)
    
    if (encontrado) {
        if (encontrado.cantidad > 1) {
            encontrado.cantidad--
        } else {
            arrayFrutas = arrayFrutas.filter((obj)=>{return obj.nombre!=valor})

        }
    } /*else {
        arrayFrutas = arrayFrutas.
    }*/
    almacenarLocal()
}

const limpiarLista = () => {
    lista.innerHTML = ''
}
//eliminar,IndexOf y un .splice y/o pasar el array de las frutas 
//a un array de objetos

pintarBotones();
pintarCompra();




const listaProductos = document.querySelector('#listaProductos');
const lista = document.querySelector('#lista');
const fragment = document.createDocumentFragment();


let arrayProductos = ['Limón', 'Pera', 'Naranja', 'Manzana', 'Piña', 'Fresas', 'Melón']
let arrayFrutas = JSON.parse(localStorage.getItem('arrayFrutas')) || []


document.addEventListener('click', (ev) => {

    if (ev.target.matches('.btnAgregar')) {
        const valor = ev.target.value

        almacenarArray(valor);
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
    localStorage.setItem('frutas', JSON.stringify(arrayFrutas))
}

const pintarCompra = () => {
    arrayFrutas.forEach((item) => {
        let li = document.createElement('LI')
        li.innerHTML = `${item.cantidad} ${item.nombre}`
        let btn = document.createElement('BUTTON');
        btn.classList.add('btnEliminar')
        btn.value = item
        btn.innerHTML = 'Eliminar'

        li.append(btn)
        fragment.append(li)
    })
    lista.append(fragment)
}

pintarBotones();




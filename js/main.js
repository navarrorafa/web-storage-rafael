
const listaProductos = document.querySelector('#listaProductos');
const lista = document.querySelector('#lista');
const fragment = document.createDocumentFragment();


let arrayProductos = ['Limón', 'Pera', 'Naranja', 'Manzana']

let arrayLocal = []


document.addEventListener('click', (ev) => {

    if (ev.target.matches('.btnAgregar')) {
        const valor = ev.target.value

        almacenarArray(valor)

    }
})

const pintarBotones = () => {

    arrayProductos.forEach((item) => {
        let li = document.createElement('LI')
        let btn = document.createElement('BUTTON');
        btn.classList.add('btnAgregar')
        btn.value = item
        btn.innerHTML = `Agregar ${item}`

        li.append(btn)
        fragment.append(li)
    })

    listaProductos.append(fragment)

}
const almacenarArray = (valor) => {

    arrayLocal.push(valor)
}

const agregarLocal = (valor) => {

    localStorage.setItem
}



pintarBotones()
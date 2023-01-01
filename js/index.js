document.addEventListener('DOMContentLoaded', function () {
    let imagenes = [
        {img: 'https://picsum.photos/1280/880'},
        {img: 'https://picsum.photos/1281/1681'},
        {img: 'https://picsum.photos/1282/1282'},
        {img: 'https://picsum.photos/1283/883'},
        {img: 'https://picsum.photos/1284/1884'},
        {img: 'https://picsum.photos/1285/1885'},
        {img: 'https://picsum.photos/1286/886'},
        {img: 'https://picsum.photos/1287/1287'},
        {img: 'https://picsum.photos/1288/1288'},
        {img: 'https://picsum.photos/1289/1289'},
        {img: 'https://picsum.photos/1290/1290'},
        {img: 'https://picsum.photos/1291/891'},
        {img: 'https://picsum.photos/1292/1292'},
        {img: 'https://picsum.photos/1293/1293'},
        {img: 'https://picsum.photos/1294/1894'},
        {img: 'https://picsum.photos/1295/895'},
        {img: 'https://picsum.photos/1296/1696'},
        {img: 'https://picsum.photos/1297/1297'},
        {img: 'https://picsum.photos/1298/1898'},
        {img: 'https://picsum.photos/1299/899'},
    ]
    let contador = 0
    const contenedor = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    const galeria_imagenes = document.querySelectorAll('.galeria img')
    const img_slideshow = document.querySelector('.slideshow img')

    contenedor.addEventListener('click',function(event){
        let atras = contenedor.querySelector('.atras'),
        adelante = contenedor.querySelector('.adelante'),
        img = contenedor.querySelector('img'),
        tgt = event.target
        if (tgt == atras) {
            if (contador > 0) {
                img.src = imagenes[contador - 1].img
                contador--
            } else {
                img.src = imagenes[imagenes.length - 1].img
                contador = imagenes.length - 1
            }            
        } else if (tgt == adelante){
            if (contador < imagenes.length - 1) {
                img.src = imagenes[contador + 1].img
                contador++
            } else {
                img.src = imagenes[0].img
                contador = 0
            }  
        }
    })

    Array.from(galeria_imagenes).forEach(img => {
        img.addEventListener('click',event => {
            const imagen_seleccionada = +event.target.dataset.imgMostrar
            img_slideshow.src = imagenes[imagen_seleccionada].img
            contador = imagen_seleccionada
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })

    document.querySelector('.btn_cerrar').addEventListener('click', () => {
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    })
})
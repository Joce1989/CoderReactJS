const productos = [
    {
        id: "01",
        name: "Remera",
        description: "Remera estampada con frases positivas",
        stock: 50,
        price: 29500,
        category: "Remeras Mujer",
        img: "../img/remera.jpg"
    },
    {
        id: "02",
        name: "Less",
        description: "Less regulable",
        stock: 35,
        price: 9500,
        category: "Bombachas",
        img: "../img/colaLess.jpeg"
    },
    {
        id: "03",
        name: "conjunto con liguero",
        description: "Bombachas",
        stock: 50,
        price: 7500,
        category: "conjunto con porta ligas y medias",
        img: "../img/products.4122.png"
    },
    {
        id: "04",
        name: "Bikini",
        description: "Bikini lisa",
        stock: 10,
        price: 29000,
        category: "Ofertas",
        img: "../img/malla.jpg"
    }
]

let error = false

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject("hubo un error intente luego")
            } else {
                resolve(productos)
            }
        }, 3000)
    })
}
const PRODUCTS = [
    {
        "id" : 1,
        "nombre" : "Big MAC",
        "ingredientes" : "Hamburguesa 100% carne con salsa especial Bigmac, cebolla, lechuga, pepinillo y queso",
        "descripción" : "Quizás sean las dos hamburguesas de carne 100% vacuna con esa salsa especial y queso derretido, el toque de cebolla y la frescura de la lechuga o el crocante del pepino, lo que la hace la hamburguesa más famosa del mundo. Un sabor único.",
        "calorias" : "505 kcal",
        "precio" : "$ 590",
        "img" : "./assets/img/Big-Mac.png"
        
    },
    {
        "id" : 2,
        "nombre" : "Cono Combinado",
        "ingredientes" : "Crema helada combinada con sabor vainilla y dulce de leche",
        "descripción" : "El helado para los que lo quieren todo. Para los que no se conforman con un sabor. Un helado que combina dulce de leche, vainilla y un delicioso cucurucho.",
        "calorias" : "184 kcal",
        "precio" : "$ 100",
        "img" : "./assets/img/Cono-Combinado.png"
        
    },
    {
        "id" : 3,
        "nombre" : "Cono de Dulce de Leche",
        "ingredientes" : "En este establecimiento se elaboran alimentos que contienen los siguientes alérgenos: Mostaza, Trigo, Avena, Cebada, Centeno, Huevo, Leche, Soja, Sésamo, Pescado, Sulfito > a 10 ppm, Pimienta, Frutos secos, Maní",
        "descripción" : "Si amás el dulce de leche, si amás el helado, si amás el cucurucho, si amás un postre que te refresque; este es tu postre.",
        "calorias" : "193 kcal",
        "precio" : "$ 100",
        "img" : "./assets/img/cono-de-dulce-de-leche.png"
        
    },
    {
        "id" : 4,
        "nombre" : "Cono de Vainilla",
        "ingresientes" : "En este establecimiento se elaboran alimentos que contienen los siguientes alérgenos: Mostaza, Trigo, Avena, Cebada, Centeno, Huevo, Leche, Soja, Sésamo, Pescado, Sulfito > a 10 ppm, Pimienta, Frutos secos, Maní",
        "descripción" : "Un clásico cono que nunca pasa de moda. La opción que todos aman por su sabor, su dulce cucurucho y su estilo tan cool.",
        "calorias" : "175 kcal",
        "precio" : "$ 100",
        "img" : "./assets/img/Cono-de-Vainilla.png"
        
    },
    {
        "id" : 5,
        "nombre" : "Cono Kit Kat",
        "ingredientes" : "En este establecimiento se elaboran alimentos que contienen los siguientes alérgenos: Mostaza, Trigo, Avena, Cebada, Centeno, Huevo, Leche, Soja, Sésamo, Pescado, Sulfito > a 10 ppm, Pimienta, Frutos secos, Maní",
        "descripción" : "Cremoso helado de vainilla, en un delicioso cucurucho, acompañado de la crujiente oblea de chocolate, la favorita de todos: Kit Kat. ¡Imposible resistirse!",
        "calorias" : "190 Kcal",
        "precio" : "$ 140",
        "img" : "./assets/img/cono-kitkat.png"
        
    },
    {
        "id" : 6,
        "nombre" : "Cono Relleno",
        "ingredientes" : "En este establecimiento se elaboran alimentos que contienen los siguientes alérgenos: Mostaza, Trigo, Avena, Cebada, Centeno, Huevo, Leche, Soja, Sésamo, Pescado, Sulfito > a 10 ppm, Pimienta, Frutos secos, Maní",
        "descripción" : "Helado de vainilla, dulce de leche o combinado, servido en cono de masa crocante y con relleno de chocolate, frutilla o dulce de leche. ¿Cuál elegis?",
        "calorias" : "225 Kcal",
        "precio" : "$ 130",
        "img" : "./assets/img/cono-relleno.png"
        
    },
    {
        "id" : 7,
        "nombre" : "Cuarto de Libra con Queso",
        "ingredientes" : "Hamburguesa de carne 100% vacuna, dos fetas de queso cheddar, kétchup, mostaza y cebolla fresca. Ahora podes pedirlo con y sin pepinos.",
        "descripción" : "La belleza radica en la simpleza de las cosas. Una hamburguesa que no se anda con vueltas. La perfecta combinación entre la mejor carne 100% vacuna y dos quesos que lo rodean, junto con el toque del kétchup, mostaza y la cebolla fresca.",
        "calorias" : "520 kcal",
        "precio" : "$ 590",
        "img" : "./assets/img/Cuarto-de-Libra-con-Queso.png"
        
    },
    {
        "id" : 8,
        "nombre" : "Doble Cuarto de Libra con Queso",
        "ingredientes" : "Hamburguesa con doble carne 100% vacuna, dos fetas de queso cheddar, kétchup, mostaza y cebolla fresca. Ahora podes pedirlo con y sin pepinos.",
        "descripción" : "Imaginá la sensación del clásico Cuarto de Libra. Imaginalo con un medallón de deliciosa carne 100% vacuna, queso cheddar, cebolla, kétchup y mostaza ¿Listo? Ahora duplicá esa sensación. Ya tenés el Doble Cuarto en la cabeza.",
        "calorias" : "771 kcal",
        "precio" : "$ 680",
        "img" : "./assets/img/Doble-Cuarto-de-Libra-con-Queso.png"
        
    },
    {
        "id" : 9,
        "nombre" : "Ensalada de la huerta",
        "ingredientes" : "Ensalada con ingredientes tradicionales: tomate cherry, lechuga, pepino una exquisita combinación entre los vegetales, texturas crocantes y dressing",
        "descripción" : "¡Los productos más frescos para nuestra ensalada más fresca! De lo mejor de nuestra huerta sale nuestra mejor ensalada, una base de ensalada acompañada con tomates cherry. Un complemento ideal para acompañar tu McMenú®. Nuestras ensaladas se elaboran diariamente con productos frescos de Florette®.",
        "calorias" : "31 Kcal",
        "precio" : "$ 360",
        "img" : "./assets/img/ensalada-huerta.png"
        
    },
    {
        "id" : 10,
        "nombre" : "Ensalada queso de cabra",
        "ingredientes" : "Ensalada con ingredientes de calidad: tomate cherry, lechuga, mix verdes, pepino, queso cabra y crutones una exquisita combinación entre los vegetales, texturas crocantes y dressing",
        "descripción" : "¡Saborea nuestra nueva ensalada de queso de cabra con mix de ensalada, cherritos y croutons! Nuestras ensaladas se elaboran diariamente con productos frescos de Florette®",
        "calorias" : "68 Kcal",
        "precio" : "$ 480",
        "img" : "./assets/img/ensalada-queso-cabra.png"
        
    },
    {
        "id" : 11,
        "nombre" : "Expresso",
        "ingredientes" : "Cafe expresso",
        "descripción" : "La mejor selección de finos granos de café arábicos en todo su esplendor, para que disfrutes sorbo a sorbo.",
        "calorias" : "25 Kcal",
        "precio" : "$ 150",
        "img" : "./assets/img/expresso.png"
        
    },
    {
        "id" : 12,
        "nombre" : "Espresso",
        "ingredientes" : "Cafe expresso",
        "descripción" : "La mejor selección de finos granos de café arábicos en todo su esplendor, para que disfrutes sorbo a sorbo.",
        "calorias" : "25 Kcal",
        "precio" : "$ 150",
        "img" : "./assets/img/frape-de-frutilla-banana.png"
        
    },
    {
        "id" : 13,
        "nombre" : "Frappé de Frutilla con Banana",
        "ingredientes" : "Bebida fresca combinada con un mix de frutilla, banana y helado sabor vainilla",
        "descripción" : "Probá tus frutas favoritas dentro de un mismo batido fresco. Acá está la bebida ideal que buscabas para ganarle al calor.",
        "calorias" : "387.78 Kcal",
        "precio" : "$ 350",
        "img" : "./assets/img/frappe.png"
        
    },
    {
        "id" : 14,
        "nombre" : "Frappé",
        "ingredientes" : "Bebida fresca hecha con cafe, acompañado con un suave colchon de crema y salsa de chocolate",
        "descripción" : "El mismo café que te ayuda a levantarte todos los días, ahora con una sensación refrescante, acompañado de crema e hilos de chocolate.",
        "calorias" : "146 Kcal",
        "precio" : "$ 310",
        "img" : "./assets/img/Grand-Doble-McBacon.png"
        
    },
    {
        "id" : 15,
        "nombre" : "Grand Doble McBacon",
        "ingredientes" : "Hamburguesa con doble carne 100% vacuna, bacon premium, queso cheddar, cebolla, kétchup y mostaza en un pan más grande con semillas",
        "descripción" : "¡NUEVO PAN! Dos carnes, inigualable queso cheddar, cebolla, kétchup y mostaza, y el increíble ingrediente que lo hace único: bacon premium.",
        "calorias" : "942 Kcal",
        "precio" : "$ 680",
        "img" : "./assets/img/GRAND-TASTY-DOBLE.png"
        
    },
    {
        "id" : 16,
        "nombre" : "Grand Tasty Triple",
        "ingredientes" : "Hamburguesa con triple carne 100% vacuna, salsa tasty, queso cheddar, lechuga, tomate, cebolla en un pan más grande con semillas",
        "descripción" : "Inigualable pan con semillas de sésamo, tres medallones de carne 100% vacuna, cuatro fetas de nuestro exclusivo Queso Cheddar, cebolla, lechuga y tomate frescos. Sumado a estos ingredientes la única e inigualable Salsa Tasty, un exclusivo sabor McDonald’s",
        "calorias" : "1153 Kcal",
        "precio" : "$ 840",
        "img" : "./assets/img/GRAND-TASTY-TRIPLE.png"
        
    },
    {
        "id" : 17,
        "nombre" : "Grand Triple McBacon",
        "ingredientes" : "Hamburguesa con triple carne 100% vacuna, bacon premium, queso cheddar, cebolla, kétchup y mostaza en un pan más grande con semillas",
        "descripción" : "¡NUEVO PAN! Triple carne, inigualable queso cheddar, cebolla, kétchup y mostaza, y el increíble ingrediente que lo hace único: bacon premium",
        "calorias" : "1233 Kcal",
        "precio" : "$ 840",
        "img" : "./assets/img/Grand-Triple-McBacon.png"
        
    },
    {
        "id" : 18,
        "nombre" : "Hamburguesa con Queso",
        "ingredientes" : "Hamburguesa 100% vacuna con queso cheddar, cebolla, mostaza y ketchup",
        "descripción" : "Carne 100% vacuna, queso derretido y mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar. Un clásico que nunca pasa de moda.",
        "calorias" : "289 kcal",
        "precio" : "$ 400",
        "img" : "./assets/img/Hamburguesa-con-Queso.png"
        
    },
    {
        "id" : 19,
        "nombre" : "Hamburguesa",
        "ingredientes" : "Hamburguesa 100% vacuna, cebolla, mostaza y ketchup",
        "descripción" : "El sabor de la carne 100% vacuna más deliciosa, acompañado del pan más esponjoso, kétchup, mostaza y cebolla triturada.",
        "calorias" : "243 kcal",
        "precio" : "$ 350",
        "img" : "./assets/img/Hamburguesa.png"
        
    },
    {
        "id" : 20,
        "nombre" : "Cajita Feliz",
        "ingredientes" : "Hamburgusa 100% vacuna, papas fritas kids, bebida, YogurKid.",
        "descripción" : "El sabor de la carne 100% vacuna más deliciosa, acompañado con las clásicas papas fritas crocantes realizadas en el momento, bebida fresca y un juguete ¡Elegí entre Libro o Juguete!",
        "calorias" : "228.8 Kcal",
        "precio" : "$ 750",
        "img" : "./assets/img/Hamburguesa(Cajita Feliz).png"
        
    },
    {
        "id" : 21,
        "nombre" : "Latte",
        "ingredientes" : "40% café americano y 60% de leche",
        "descripción" : "Delicioso espresso con vainilla, leche con espuma y por si fuera poco, acompañado de un increíble crocante de caramelo.",
        "calorias" : "40 Kcal",
        "precio" : "$ 180",
        "img" : "./assets/img/latte.png"
        
    },
    {
        "id" : 22,
        "nombre" : "McDuo",
        "ingredientes" : "Hamburguesa con doble carne 100% vacuna con queso cheddar, cebolla, mostaza y ketchup",
        "descripción" : "Una hamburguesa exquisita compuesta de dos carnes 100% vacuna, acompañadas del clásico pan, mostaza, kétchup, queso derretido, y un toque de cebolla que la hace única.",
        "calorias" : "389 Kcal",
        "precio" : "$650",
        "img" : "./assets/img/McDuo.png"
        
    },
    {
        "id" : 23,
        "nombre" : "McFiesta Jr",
        "ingredientes" : "Carne 100% vacuna, con mayonesa, lechuga y tomate",
        "descripción" : "Hamburguesa elaborada con carne 100% de carne vacuna, mayonesa, lechuga y tomate",
        "calorias" : "229 Kcal",
        "precio" : "$470 ",
        "img" : "./assets/img/McFiesta-Jr -cajita-feliz.png"
        
    },
    {
        "id" : 24,
        "nombre" : "McFiesta",
        "ingredientes" : "Carne 100% vacuna, con mayonesa, lechuga y tomate",
        "descripción" : "Hamburguesa elaborada con carne 100% de carne vacuna, mayonesa, lechuga y tomate",
        "calorias" : "421 Kcal",
        "precio" : "$620 ",
        "img" : "./assets/img/McFiesta.png"
        
    },
    {
        "id" : 25,
        "nombre" : "McFlurry Oreo",
        "ingredientes" : "Helado vainilla, galletitas Oreo, salsa de chocolate",
        "descripción" : "Un helado de vainilla que se banca compartir el protagonismo con trocitos de deliciosas galletitas Oreo y la salsa que elijas. Amalo hasta el final.",
        "calorias" : "424 Kcal",
        "precio" : "$450 ",
        "img" : "./assets/img/mcflurry-oreo.png"
        
    },
    {
        "id" : 26,
        "nombre" : "McFlurry Crocantella",
        "ingredientes" : "Helado vainilla, galletitas Oreo, salsa de chocoavellanas",
        "descripción" : "Helado de vainilla con trocitos de deliciosas galletitas Óreo, salsa de Chocoavellanas que al contacto con tu postre se transforma en un placer crocante",
        "calorias" : "610 Kcal",
        "precio" : "$450 ",
        "img" : "./assets/img/mcflury-crocantella.png"
        
    },
    {
        "id" : 27,
        "nombre" : "McFlurry KitKat",
        "ingredientes" : "Helado vainilla, trozos de KitKat, salsa de chocolate",
        "descripción" : "La crocante oblea de chocolate que todo el mundo conoce y ama, pero acompañada de un cremoso helado de vainilla y una deliciosa salsa tibia de chocolate. ¿Hace falta que te diga más? El break helado que esperabas.",
        "calorias" : "455 Kcal",
        "precio" : "$450 ",
        "img" : "./assets/img/mcflury-kitkat.png"
        
    },
    {
        "id" : 28,
        "nombre" : "McNifica",
        "ingredientes" : "Carne 100% vacuna, queso cheddar, tomate, lechuga y cebolla, acompañados de kétchup, mostaza y mayonesa",
        "descripción" : "En un mundo donde todos buscan lo nuevo todo el tiempo, la McNífica viene a rectificar lo bueno de ser clásico. Carne, queso cheddar, tomate, lechuga y cebolla, acompañados de kétchup, mostaza y mayonesa.",
        "calorias" : "513 Kcal",
        "precio" : "$650 ",
        "img" : "./assets/img/McNifica.png"
        
    },
    {
        "id" : 29,
        "nombre" : "McNuggets 4 Unidades",
        "ingredientes" : "Pollo, harina de maiz  y trigo",
        "descripción" : "Ligero sabor a empanado de harina de maíz y trigo frito con notas caramelizadas. Suave sabor a pollo que es ligeramente salado con un toque de pimienta negra y apio en el empanado",
        "calorias" : "117.12kcal",
        "precio" : "$250 ",
        "img" : "./assets/img/McNuggets-4unidades.png"
        
    },
    {
        "id" : 30,
        "nombre" : "Milshake Croccantella",
        "ingredientes" : "Chocalte amargo, leche, agua, avellanas y chocolate cronccantella",
        "descripción" : "Bebida frozen a base de leche y chocolate amargo con copos de maíz y pasta de avellanas, recubierta por finos hilos de chocolate Croccantella",
        "calorias" : "388kcal",
        "precio" : "$300 ",
        "img" : "./assets/img/milshake-croccantella.png"
        
    },
    {
        "id" : 31,
        "nombre" : "Ristretto",
        "ingredientes" : "Cafe, agua",
        "descripción" : "La mejor elección para disfrutar del sabor intenso del café.",
        "calorias" : "2kcal",
        "precio" : "$100 ",
        "img" : "./assets/img/ristretto.png"
        
    },
    {
        "id" : 32,
        "nombre" : "Sundae chocolate",
        "ingredientes" : "Salsa de chocolate y helado de vainilla",
        "descripción" : "La medida justa entre salsa de chocolate y helado de vainilla que pueden hacerte vivir una experiencia explosiva.",
        "calorias" : "264kcal",
        "precio" : "$ 220",
        "img" : "./assets/img/sundae-chocolate.png"
        
    },
    {
        "id" : 33,
        "nombre" : "Sundae croccantella",
        "ingredientes" : "Helado de vainilla y salsa de chocoavellanas",
        "descripción" : "Helado de vainilla, salsa caliente y recubierto con salsa de Chocoavellanas que al contacto con tu postre se transforma en un placer crocante",
        "calorias" : "399kcal",
        "precio" : "$250 ",
        "img" : "./assets/img/sundae-croncantella.png"
        
    },
    {
        "id" : 34,
        "nombre" : "Sundae dulce de leche",
        "ingredientes" : "Helado de vainilla y salsa de dulce de leche",
        "descripción" : "El exquisito helado de vainilla que ya conoces y te encanta, pero bañado de una salsa de dulce de leche que te encantará aún más.",
        "calorias" : "257kcal",
        "precio" : "$220 ",
        "img" : "./assets/img/sundae-dulce-de-leche.png"
    },
    {
        "id" : 35,
        "nombre" : "Sundae frutilla",
        "ingredientes" : "Helado de vainilla y salsa de frutilla",
        "descripción" : "El exquisito helado de vainilla que ya conoces y te encanta, pero bañado de una salsa de dulce de leche que te encantará aún más.",
        "calorias" : "257 kcal",
        "precio" : "$220 ",
        "img" : "./assets/img/sundae-frutilla.png"
        
    },
    {
        "id" : 36,
        "nombre" : "Super cono",
        "ingredientes" : "Helado McDonald's en sabor dulce de leche, vainilla o combinado, dentro del exquisito cono",
        "descripción" : "Como el tradicional, pero con mas helado! Deliciosa mezcla de helado McDonald's en sabor dulce de leche, vainilla o combinado, dentro del exquisito cono de siempre.",
        "calorias" : "385 kcal",
        "precio" : "$ 200",
        "img" : "./assets/img/super-cono.png"
        
    },
    {
        "id" : 37,
        "nombre" : "te",
        "ingredientes" : "Agua, te",
        "descripción" : "Un clásico para tomar en cualquier momento del día. Una infusión de aromas únicos, con exquisito sabor que seguro te alegrará el día.",
        "calorias" : "0 kcal",
        "precio" : "$ 160 ",
        "img" : "./assets/img/te.png"
        
    },
    {
        "id" : 38,
        "nombre" : "Triple Hamburguesa con Queso",
        "ingredientes" : "Tres medallones de carne 100% vacuna, queso derretido, mostaza, kétchup y cebolla triturada.",
        "descripción" : "Tres medallones de carne 100% vacuna, queso derretido, mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar.",
        "calorias" : "605 Kcal",
        "precio" : "$ 530 ",
        "img" : "./assets/img/Triple-Hamburguesa-con-Queso.png"
        
    },
    {
        "id" : 39,
        "nombre" : "Triple Mac",
        "ingredientes" : "tres carnes 100% vacuna, clásico pan McDonald’s, salsa especial, queso derretido, lechuga fresca, pepino crocante y el toque de cebolla.",
        "descripción" : "Una hamburguesa que no es para cualquiera. Sólo los más extremos están dispuestos a saborear tres carnes 100% vacuna acompañadas del clásico pan McDonald’s, su característica salsa especial, queso derretido, lechuga fresca, pepino crocante y el toque de cebolla que la hace única.",
        "calorias" : "541 kcal",
        "precio" : "$ 600 ",
        "img" : "./assets/img/Triple-Mac.png"
        
    },
    {
        "id" : 40,
        "nombre" : "YogurKid",
        "ingredientes" : "Yogur endulzado parcialmente descremado sabor a vainilla natural",
        "descripción" : "Yogur endulzado parcialmente descremado sabor a vainilla natural",
        "calorias" : "36 kcal",
        "precio" : "$ 150",
        "img" : "./assets/img/yogurkid.png"
    },
    {      
        "id" : 41,
        "nombre" : "Ensalada caesar con pollo crujiente",
        "ingredientes" : "Ensalada con pechuga de pollo, huevo, lechuga, salsa Worcestershire, tomate cherry",
        "descripción" : "Disfruta de esta deliciosa ensalada, creada con nuestra base más fresca! Base de ensalada acompañada de pollo crispy, queso en láminas y croutons.",
        "calorias" : "351 kcal",
        "precio" : "$ 300",
        "img" : "./assets/img/ensalada-cesar-con-pollo-crujiente.png"
        
    }
]
//este productos no deberia estar aca pero la importacion me tira errores
//quise hacer un archivo .json y aplicarle un fetch tmb tiraba errores xDD 


const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

//id, nombre, ingredientes, descripción, calorias, precio
const pintarCards = data => {
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.nombre
        templateCard.querySelector('img').setAttribute("src", producto.img)
        templateCard.querySelector('p').textContent = producto.precio
        templateCard.querySelector('.btn-dark').dataset.id = producto.id
        templateCard.querySelector('.btn-dark').href = `file:///C:/Users/gaston.fleitas/Desktop/MC-KING/McDonald's/verproducto.html?id=${producto.id}`
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}

pintarCards(PRODUCTS)
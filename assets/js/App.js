let products = [
    {
        id: 1,
        name: "Running shoe | Addidas",
        image: "https://img.freepik.com/free-photo/fashion-running-sneaker-shoes-isolated-beautiful-pastel-color-background-with-clipping-path_47469-448.jpg?w=740",
        price: 1299
    },
    {
        id: 2,
        name: "Formal shoes | RedTape",
        image: "https://img.freepik.com/free-photo/leather-boots-blue-background-shoe-concept_569346-12.jpg?w=740",
        price: 1789
    },
    {
        id: 3,
        name: "Iphone 12 Pro | Apple",
        image: "https://img.freepik.com/free-photo/mobile-phone-case-product-showcase-back-view_53876-97307.jpg?t=st=1655967476~exp=1655968076~hmac=68951eecc432e3235c1b0e0a7c998f80ef103cd29c32a342524e5e62c35e84ea&w=740",
        price: 65499
    },
    {
        id: 4,
        name: "Apple watch series 7  | Apple",
        image: "https://img.freepik.com/free-photo/smartwatch-screen-digital-device_53876-96809.jpg?t=st=1655967550~exp=1655968150~hmac=65a2c63302dff6a23a3fff62796988ea0554b500d28b739bac30f667607451bd&w=740",
        price: 25699
    },
    {
        id: 5,
        name: "Amazon Alexa  | Amazon",
        image: "https://img.freepik.com/free-vector/internet-things-isometric-composition_1284-23939.jpg?t=st=1655972276~exp=1655972876~hmac=bc7915a4bd7ab5b882fce8d56383ec73732218ffc4ed910b34dd889a5dcf41da&w=740",
        price: 8999
    },
    {
        id: 6,
        name: "VR Headset | Eefer",
        image: "https://img.freepik.com/free-photo/black-woman-experiencing-virtual-reality-with-vr-headset_53876-137559.jpg?t=st=1655967550~exp=1655968150~hmac=4cae95ced233ba20e7aff4e618bf03ced5d06c67423b32e7bfbaf4f012b5ce5a&w=740",
        price: 6749
    },
    {
        id: 7,
        name: "AirPods Pro | Apple",
        image: "https://img.freepik.com/free-photo/pink-wireless-earbuds-case-mockup-digital-earphones_53876-97319.jpg?t=st=1655968118~exp=1655968718~hmac=ad0efe12cb9a442dd6dd77b9505d6e4a1ff51788bd6ed26221a62f53b442246c&w=740",
        price: 10999
    },
    {
        id: 8,
        name: "Realme Narazo Pro | Realme",
        image: "https://img.freepik.com/free-psd/smartphone-with-weather-app-colorful-liquid-background_23-2148215468.jpg?t=st=1655972381~exp=1655972981~hmac=71798f403860d25df981b2850561b362c7f73102afadb7b2cd9636d6f30588c3&w=740",
        price: 28499
    },
]


let ProductsDisplay = document.querySelector('.productList');

products.forEach((products) => {

    ProductsDisplay.innerHTML += `
                    <div class="card m-1 " style="width: 15rem;">
                        <img class="card-img-top"
                            src="${products.image}"
                            alt="Card image cap">
                        <div class="card-body d-flex flex-column ">
                            <h5 class="card-title">${products.name}</h5>
                            <p class="card-text mt-auto">₹ ${products.price}</p>
                            <a href="#" class="btn btn-primary w-75 m-auto">Add to Cart</a>
                        </div>
                    </div>`
})

let category = [
    {
        name: "Smartphone"
    },
    {
        name: "Home Appliances"
    },
    {
        name: "Groceries"
    },
    {
        name: "Laptops"
    },
    {
        name: "SmartTV"
    },
    {
        name: "Voice Assistant"
    },
    {
        name: "Mobile Gadgets"
    },
    {
        name: "Accessories"
    },
    {
        name: "Riding Gear"
    },

]

let categoryDisplay = document.querySelector('.category-box');

category.forEach((category) => {

    categoryDisplay.innerHTML += `<h6 class="items px-5 py-2 bg-info text-light rounded m-2 d-flex justify-content-center align-items-center">${category.name}</h6>`
})
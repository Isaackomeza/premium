function toggleClass(elem, className) {
    if (elem.className.indexOf(className) !== -1) {
        elem.className = elem.className.replace(className, '');
    }
    else {
        elem.className = elem.className.replace(/\s+/g, ' ') + ' ' + className;
    }

    return elem;
}


function toggleMenuDisplay(e) {
    const dropdown = e.currentTarget.parentNode;
    const menu = dropdown.querySelector('.menu');
    const icon = dropdown.querySelector('.fa-angle-right');

    toggleClass(menu, 'hide');
    toggleClass(icon, 'rotate-180');
}

function toggleCheckBoxDisplay(e) {
    const dropdown = e.currentTarget.parentNode;
    const menu = dropdown.querySelector('.menu-two');
    const icon = dropdown.querySelector('.fa-angle-right');

    toggleClass(menu, 'hide');
    toggleClass(icon, 'rotate-180');
}

function toggleCheckBoxTwoDisplay(e) {
    const dropdown = e.currentTarget.parentNode;
    const menu = dropdown.querySelector('.menu-three');
    const icon = dropdown.querySelector('.fa-angle-right');

    toggleClass(menu, 'hide');
    toggleClass(icon, 'rotate-180');
}

function toggleCheckBoxThreeDisplay(e) {
    const dropdown = e.currentTarget.parentNode;
    const menu = dropdown.querySelector('.menu-four');
    const icon = dropdown.querySelector('.fa-angle-right');

    toggleClass(menu, 'hide');
    toggleClass(icon, 'rotate-180');
}

const dropdownTitle = document.querySelector('.dropdown .title');
const dropdownTitleTwo = document.querySelector('.dropdown-two .title');
const dropdownTitleThree = document.querySelector('.dropdown-three .title');
const dropdownTitleFour = document.querySelector('.dropdown-four .title');

dropdownTitle.addEventListener('click', toggleMenuDisplay);
dropdownTitleTwo.addEventListener('click', toggleCheckBoxDisplay);
dropdownTitleThree.addEventListener('click', toggleCheckBoxTwoDisplay);
dropdownTitleFour.addEventListener('click', toggleCheckBoxThreeDisplay);



const shopSection = document.querySelector('.shop')
const modal = document.querySelector("#myModal");
const cambioModal = document.querySelector("#cambioModal")
const prezziModal = document.querySelector("#prezziModal")
const modalElement = document.querySelector(".model-element")


const cars = [
    {
        id: 1,
        name: 'VOLKSWAGEN ECO UP!',
        description: 'move 5 porte',
        tipo: 'Berlina',
        cvPotenza: 150,
        kwPotenza: 110,
        cilindrata: 1395,
        model: 'GPL',
        price: '3,85',
        priceDesc: 'pounds per hour',
        img: './assets/img/cars/car1'
    },
    {
        id: 2,
        name: 'FORD FIESTA',
        description: '1.1 75 CV Gpl 5 porte',
        tipo: 'Berlina',
        cvPotenza: 150,
        kwPotenza: 110,
        cilindrata: 1395,
        model: 'GPL',
        price: '4.96',
        priceDesc: 'pounds per hour',
        img: './assets/img/cars/car2'
    },
    {
        id: 3,
        name: 'HYUNDAY IONIQ',
        description: 'ELECTRIC EV 38.3 kWh',
        tipo: 'Berlina',
        cvPotenza: 150,
        kwPotenza: 110,
        cilindrata: 1395,
        model: 'ELECTRICA',
        price: '3,40',
        priceDesc: 'pounds per hour',
        img: './assets/img/cars/car3'
    },
    {
        id: 4,
        name: 'TOYOTA PRIUS',
        description: 'Plug-in Hybrid',
        tipo: 'Berlina',
        cvPotenza: 150,
        kwPotenza: 110,
        cilindrata: 1395,
        model: 'PLUG-IN HYBRID',
        price: '6,97',
        priceDesc: 'pounds per hour',
        img: './assets/img/cars/car4'
    },
    {
        id: 5,
        name: 'VOLKSWAGEN ECO UP!',
        description: 'move 5 porte',
        tipo: 'Berlina',
        cvPotenza: 150,
        kwPotenza: 110,
        cilindrata: 1395,
        model: 'FULL HYBRID',
        price: '6,97',
        priceDesc: 'pounds per hour',
        img: './assets/img/cars/car5'
    },
    {
        id: 6,
        name: 'VOLKSWAGEN ECO UP!',
        description: 'move 5 porte',
        tipo: 'Berlina',
        cvPotenza: 150,
        kwPotenza: 110,
        cilindrata: 1395,
        model: 'Benzina',
        price: '8,54',
        priceDesc: 'pounds per hour',
        img: './assets/img/cars/car6'
    }
]
let productSection = ""
cars.forEach(car => {
    productSection += `<div 
    class="product-card"
    id="${car.id}"

    >
        <img src='${car.img}.png'/>
        <div class="product-content">
            <p class="product-title"><b>${car.name}</b> ${car.description}</p>
            <div class="product-body">
                <div class="product-details">
                    <p>Tipo: <b>${car.tipo}</b></p>
                    <p>Potenza: <b>${car.cvPotenza}</b>CV | <b>${car.kwPotenza}</b>kW </p>
                    <p>Cilindrata: <b>${car.cilindrata}</b> cm <sup>3</sup></p>                   

                </div>
                <div class="type">
                    <p><b class="type-txt">${car.model}</b></p>
                </div>
            </div>
            <div class="product-price">
                <p><b class="price">${car.price}</b> ${car.priceDesc}</p>
                <div class="info-img">
                    <img src="https://img.icons8.com/ios/15/000000/info.png"/>
                </div>
                
            </div>
            <div class="loaders">
                <progress id="file" value="100" max="100">  </progress>
                <progress id="file" value="10" max="100">  </progress>
                <progress id="file" value="0" max="100">  </progress>
                <progress id="file" value="0" max="100">  </progress>
                <progress id="file" value="0" max="100">  </progress>
                <progress id="file" value="0" max="100">  </progress>

            </div>
            
        </div>        
    </div>`
    shopSection.innerHTML = productSection
})

const btn1 = document.querySelectorAll(".product-card")[0];
const btn2 = document.querySelectorAll(".product-card")[1];
const btn3 = document.querySelectorAll(".product-card")[2];
const btn4 = document.querySelectorAll(".product-card")[3];
const btn5 = document.querySelectorAll(".product-card")[4];
const btn6 = document.querySelectorAll(".product-card")[5];
const cambiaBtn = document.querySelector(".section-one-middle-btn")
const prezziBtn = document.querySelector(".prezzi")


const span = document.querySelectorAll(".close")[0];
const span1 = document.querySelectorAll(".close")[1];
const span2 = document.querySelectorAll(".close")[2];



console.log(btn1, span)

cambiaBtn.onclick = function () {
    cambioModal.style.display = "block";
}
prezziBtn.onclick = function () {
    prezziModal.style.display = "block";
}

btn1.onclick = function () {
    modal.style.display = "block";
}
btn2.onclick = function () {
    modal.style.display = "block";

}
btn3.onclick = function () {
    modal.style.display = "block";

}
btn4.onclick = function () {
    modal.style.display = "block";

}
btn5.onclick = function () {
    modal.style.display = "block";

}
btn6.onclick = function () {
    modal.style.display = "block";
}


span.onclick = function () {
    modal.style.display = "none";
}
span1.onclick = function () {
    cambioModal.style.display = "none";
}
span2.onclick = function () {
    prezziModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const filteredCars = cars.filter(car => car.id === 1)

let modalSection = ""
filteredCars.forEach(car => {
    modalSection += `
    <div>
    <div 
    class="product-card modal-product-card"
    id="${car.id}"

    >
    <img src='./assets/img/cars/car7.png'/>
    <div class="product-content">
            <p class="product-title"><b>${car.name}</b> ${car.description}</p>
            <div class="product-body">
                <div class="product-details">
                    <p>Tipo: <b>${car.tipo}</b></p>
                    <p>Potenza: <b>${car.cvPotenza}</b>CV | <b>${car.kwPotenza}</b>kW </p>
                    <p>Cilindrata: <b>${car.cilindrata}</b> cm <sup>3</sup></p>                   

                </div>
                <div class="type">
                    <p><b class="type-txt">${car.model}</b></p>
                </div>
            </div>
            <div class="product-price">
                <p><b class="price">${car.price}</b> ${car.priceDesc}</p>
                <div class="info-img">
                    <img src="https://img.icons8.com/ios/15/000000/info.png"/>
                </div>
                
            </div>
            <div class="loaders">
                <progress id="file" value="100" max="100">  </progress>
                <progress id="file" value="10" max="100">  </progress>
                <progress id="file" value="0" max="100">  </progress>
                <progress id="file" value="0" max="100">  </progress>
                <progress id="file" value="0" max="100">  </progress>
                <progress id="file" value="0" max="100">  </progress>

            </div>
            
        </div>        
    </div>
    <div 
        class="border-top"
        id="${car.id}"
    >
        <h2 class="car-header">Prova su strada completa</h2>
        <div class="details">
            <img src='./assets/img/cars/car8.png'/>
            <div class="product-content">
                <p class="product-title">VOLKSWAGEN GOLF</p>
                <div class="product-body">
                    <p><b>Esclusiva Premium: la video-prova completa della 2.0 TDI Dsg Style</b></p>
                </div>          
            </div>
        </div>
                
    </div>
    <div>
        <h3 class="black-color border-top">Approfondimenti</h3>
    </div>
    <div class="flex-display border-top">
        <div class="flex-display full-width">
            <h3 class="car-header">LISTINO / SCHEDA</h3>
            <img src="./assets/img/popup.png" alt="popup-btn">
        </div>        
        <div class="flex-display full-width">
            <h3 class="car-header">confronta</h3>
            <img src="./assets/img/popup.png" alt="popup-btn">
        </div>
    </div>
    <div class="flex-display border-top">
        <div class="flex-display full-width">
            <h3 class="car-header">configura</h3>
            <img src="./assets/img/popup.png" alt="popup-btn">
        </div>        
        <div class="flex-display full-width">
            <h3 class="car-header">le alternative</h3>
            <img src="./assets/img/popup.png" alt="popup-btn">
        </div>
    </div>
    </div>
    `
    modalElement.innerHTML = modalSection
})

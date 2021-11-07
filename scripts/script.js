function toggleClass(elem, className) {
    if (elem.className.indexOf(className) !== -1) {
        elem.className = elem.className.replace(className, '');
        // console.log(elem.className)
    }
    else {
        elem.className = elem.className.replace(/\s+/g, ' ') + ' ' + className;
    }

    return elem;
}

// function toggleDisplay(elem) {
//     const curDisplayStyle = elem.style.display;

//     if (curDisplayStyle === 'none' || curDisplayStyle === '') {
//         elem.style.display = 'block';
//     }
//     else {
//         elem.style.display = 'none';
//     }
// }


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
// ipsum.innerHTML = 'Lorem ipsum'


const cars = [
    {
        name: 'This is the name',
        description: 'for description',
        tipo: 'made',
        cvPotenza: 300,
        kwPotenza: 200,
        cilindrata: 29303,
        model: 'GPL',
        price: '3,85',
        priceDesc: 'pounds per hour',
        img: '../assets/cars/car1'
    },
    {
        name: 'This is the name',
        description: 'for description',
        tipo: 'made',
        cvPotenza: 300,
        kwPotenza: 200,
        cilindrata: 29303,
        model: 'GPL',
        price: '3,85',
        priceDesc: 'pounds per hour',
        img: '../assets/cars/car1'
    }
]
let productSection = ``
cars.forEach(car => {
    productSection = `<div class="product-card">
              Hello from this car      
    </div>`
    shopSection.append(productSection)
    // return productSection
})


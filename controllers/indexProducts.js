import { clientService } from "../services/client-service.js";

const categoryName1 = 'StarWars';
const categoryName2 = 'Consolas';
const categoryName3 = 'Diversos';

const renderProducts = async () => {
    try {
        const dataProducts = await clientService.readProducts();
        console.log(dataProducts);
        filterProducts(dataProducts);
    } catch (error) {
        console.log(error);
    }
};

const filterProducts = (dataProducts) => {
    const categoryProducts1 = dataProducts.filter(product => product.category == categoryName1);
    showProducts(categoryProducts1, categoryName1);
    const categoryProducts2 = dataProducts.filter(product => product.category == categoryName2);
    showProducts(categoryProducts2, categoryName2);
    const categoryProducts3 = dataProducts.filter(product => product.category == categoryName3);
    showProducts(categoryProducts3, categoryName3);
};

const showProducts = (arrProducts, categoryName) => {
    if(arrProducts.length > 0) {
        const category = arrProducts[0]['category'].toLowerCase();
        const categoryCarousel = document.querySelector(`.${category} .category__carousel`);
        console.log(categoryCarousel);
        arrProducts.forEach(product => {
            const card = createCard(product);
            categoryCarousel.appendChild(card);
        });
    } else {
        console.log(`"${categoryName}" has not products`)
    }
};

const createCard = (product) => {
    const card = document.createElement('a');
    card.classList.add('category__product');
    card.href = `detail-product.html?id=${product.id}`;
    card.innerHTML = createContentCard(product);
    return card
}

const createContentCard = ({name, category, url, price}) => {
    // agregar ruta detail-product con ID
    return `<img class="category__img" src="${url}" alt="${category}">
            <div class="category__text">
                <p class="category__category">${category}</p>        
                <h4 class="category__name">${name}</h4>
                <p class="category__price">$ ${price}</p>
                <p class="category__detail">Ver producto <i class="fa-solid fa-arrow-right-to-bracket"></i></p>
            </div>`;
};

renderProducts()
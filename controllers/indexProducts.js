import { clientService } from "../services/client-service.js";

const categoryNames = ['Juegos', 'Consolas', 'Amiibo']

const renderProducts = async () => {
    try {
        const dataProducts = await clientService.readProducts();
        filterProducts(dataProducts);
    } catch (error) {
        console.log(error);
    }
};

const filterProducts = (dataProducts) => {
    categoryNames.forEach( (category, index) => {
        const categoryProducts = dataProducts.filter(product => product.category == category);
        if(categoryProducts.length > 0){
            const main = document.querySelector(`main`);
            const section = main.children[index];
            writeTitle(section, category);
            showProducts(categoryProducts, section, index)
        } else {
            console.log(`"${category}" has not products`)
        }    
    })
};

const writeTitle = (section, categoryName) => {
    const title = section.querySelector('.category__title');
    title.textContent = categoryName;
}

const showProducts = (arrProducts, section, index) => {
        const categoryCarousel = section.querySelector('.category__carousel');
        categoryCarousel.innerHTML = '';
        arrProducts.forEach(product => {
            const card = createCard(product);
            categoryCarousel.appendChild(card);
        });

};

const createCard = (product) => {
    const card = document.createElement('a');
    card.classList.add('category__product');
    card.href = `detail-product.html?id=${product.id}`;
    card.innerHTML = createContentCard(product)
    card.setAttribute("draggable", "false");
    return card
}

const createContentCard = ({name, category, url, price}) => {
    return `<img class="category__img" src="${url}" alt="${category}" onerror="imgErrorHTML(this)" draggable="false">
            <div class="category__text">
                <p class="category__category">${category}</p>        
                <h4 class="category__name">${name}</h4>
                <p class="category__price">$ ${price}</p>
                <p class="category__detail">Ver producto <i class="fa-solid fa-arrow-right-to-bracket"></i></p>
            </div>`;
};

renderProducts();

const seeMoreLinks = document.querySelectorAll('.category__seemore');
seeMoreLinks.forEach( seeMoreLink => {
    seeMoreLink.addEventListener('click', (e) => {
        const category = e.path[2].children[0].textContent;
        console.log(category)
        window.location.href = `./search.html?search=${category}`
    });
});

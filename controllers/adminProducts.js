import { clientService } from "../services/client-service.js"; 

const productsBox = document.querySelector('.all-products__stock')

const renderProducts = async () => {
    try {
        const dataProducts = await clientService.readProducts();
        showProducts(dataProducts);
    } catch (error) {
        console.log(error);
    }
};

const showProducts = (arrProducts) => {
    if(arrProducts.length > 0) {
        productsBox.innerHTML = '';
        arrProducts.forEach(product => {
            const card = createCard(product);
            productsBox.appendChild(card);
            const buttonDelete = document.getElementById(product.id);
            buttonDelete.addEventListener('click', deleteProduct);
        });
    } else {
        // mostrar mensaje que no hay productos
    }
};

const createCard = (product) => {
    const card = document.createElement('div');
    card.classList.add('category__product');
    card.innerHTML = createContentCard(product);
    return card
}

const createContentCard = ({id, name, category, url, price}) => {
    // agregar ruta detail-product con ID
    return `<img class="category__img" src="${url}" alt="${category}" onerror="imgErrorHTML(this)">
            <div class="category__text">        
                <p class="category__category">${category}</p>
                <h4 class="category__name">${name}</h4>
                <p class="category__price">$ ${price}</p>
                <div class="category__actions-box">
                    <a class="category__product-edit" href="edit-product.html?id=${id}"><i class="fa-solid fa-pen-to-square"></i></a>
                    <button id=${id} class="category__product-delete"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
            `;
};

const deleteProduct = (e) => {
    console.log(e)
    console.log(e.currentTarget.parentNode.parentNode.parentNode)
    const id = e.currentTarget.id;
    const card = e.currentTarget.parentNode.parentNode.parentNode;
    clientService.deleteProduct(id);
    card.remove();
    
}

renderProducts();

// delete
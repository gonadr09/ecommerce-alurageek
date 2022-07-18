import { clientService } from "../services/client-service.js";

const url = new URL(window.location);
const id = url.searchParams.get('id')

const getProduct = async (id) => {
    try {
        const arrProduct = await clientService.readProduct(id);
        createCard(arrProduct)

    } catch (error) {
        console.log(error)
    }
}

const createCard = ({name, category, url, price, description}) => {
    const imgTag = document.querySelector('.product img');
    const categoryTag = document.querySelector('.product__category');
    const nameTag = document.querySelector('.product__name');
    const priceTag = document.querySelector('.product__price');
    const descriptionTag = document.querySelector('.product__description');
    imgTag.src = url;
    categoryTag.textContent = `Categoría: ${category}`;
    nameTag.textContent = name;
    priceTag.textContent = `$ ${price}`;
    descriptionTag.textContent = description;
}

getProduct(id);
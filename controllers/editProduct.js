import { clientService } from "../services/client-service.js";

const url = new URL(window.location);
const id = url.searchParams.get('id')
const form = document.querySelector('.add-product__form');

const getProduct = async (id) => {
    try {
        const arrProduct = await clientService.readProduct(id);
        createCard(arrProduct)
    } catch (error) {
        console.log(error)
    }
}

const createCard = ({name, category, url, price, description}) => {
    const inputName = document.querySelector('#product-name');
    const inputcategory = document.querySelector('#category');
    const inputUrl = document.querySelector('#img');
    const inputPrice = document.querySelector('#price');
    const inputDescription = document.querySelector('#description');
    inputUrl.value = url;
    inputcategory.value = category;
    inputName.value = name;
    inputPrice.value = price;
    inputDescription.value = description;
}

const editProduct = async (e) => {
    e.preventDefault();
    const name = document.querySelector('#product-name').value;
    const category = document.querySelector('#category').value;
    const url = document.querySelector('#img').value;
    const price = document.querySelector('#price').value;
    const description = document.querySelector('#description').value;
    const jsonProduct = JSON.stringify({name, category, url, price, description});
    try {
        await clientService.updateProduct(id, jsonProduct);
        window.location.href = './completed.html'
    } catch (error) {
        console.log(error)
    }
}

getProduct(id);
form.addEventListener('submit', editProduct);


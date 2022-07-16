import { clientService } from "../services/client-service.js";

const url = new URL(window.location);
const id = url.searchParams.get('id')

const getProduct = async (id) => {
    try {
        const arrProduct = await clientService.readProduct(id);
        console.log(arrProduct.length)
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

const a = `
<section class="product container">
<img src="./img/prod-consolas1.png" alt="consolas">
<div class="product__detail-container">
    <h2 class="product__name">Producto xyz</h2>
    <p class="product__price">$ 2.499</p>
    <p class="product__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam soluta sint blanditiis iusto libero autem corporis voluptates odit nisi esse aperiam excepturi, dicta quisquam dignissimos ab commodi corrupti nulla quidem dolorum unde, obcaecati ullam explicabo facilis. Maiores reiciendis amet quo pariatur quibusdam inventore minus molestias? Dolores quibusdam magnam delectus cupiditate?</p>
</div>
</section>
`
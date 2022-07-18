
const createProduct = async (jsonProduct) => {
    try {
        const response = await fetch(`https://alura-geek-ecommerce.herokuapp.com/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonProduct
        });
        return response.json;
    } catch (error) {
        return console.log(error);
    }
}

const readProducts = () => fetch('https://alura-geek-ecommerce.herokuapp.com/products').then(response => response.json());

const readProduct = (id) => fetch(`https://alura-geek-ecommerce.herokuapp.com/products/${id}`).then(response => response.json());

const deleteProduct = (id) => {
    return fetch(`https://alura-geek-ecommerce.herokuapp.com/products/${id}`, {
        method: 'DELETE'
    });
};

const updateProduct = (id, jsonProduct) => {
    return fetch(`https://alura-geek-ecommerce.herokuapp.com/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonProduct
    })
    .then(response => response.json)
    .catch(error => console.log(error))
}


export const clientService = {
    createProduct,
    readProducts,
    readProduct,
    updateProduct,
    deleteProduct,
};
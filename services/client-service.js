
const createProduct = (id, jsonProduct) => {
    return fetch(`http://localhost:3000/products/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonProduct
    })
    .then(response => response.json)
    .catch(error => console.log(error))
}

const readProducts = () => fetch('http://localhost:3000/products').then(response => response.json());

const readProduct = (id) => fetch(`http://localhost:3000/products/${id}`).then(response => response.json());

const deleteProduct = (id) => {
    return fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE'
    });
};

const updateProduct = (id, jsonProduct) => {
    return fetch(`http://localhost:3000/products/${id}`, {
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
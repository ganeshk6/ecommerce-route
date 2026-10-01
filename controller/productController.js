const getProducts = (req, res) => {
    res.send('Fetching all products.');
}

const getProduct = (req, res) => {
    res.send(`Fetching product with ID: ${req.params.id}`)
}

const addProducts = (req, res) => {
    res.send('Adding a new product.');
}

module.exports = {
    getProduct,
    getProducts,
    addProducts
}
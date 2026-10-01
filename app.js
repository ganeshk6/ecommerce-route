const express = require('express');
const userRouter = require('./router/users')
const productRouter = require('./router/products')
const cartRouter = require('./router/cart')

const app = express()
const PORT = 3000

app.use((req, res, next)=>{
    console.log(req.method, req.url)
    next()
})

app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/cart', cartRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
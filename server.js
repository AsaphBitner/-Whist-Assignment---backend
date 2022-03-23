
// import {usersToUpload} from '1Users-List.js'
const express = require('express')
// const cookieParser = require('cookie-parser')
// const session = require('express-session')

const dataService = require('./services/data-service')
const app = express()
const port = process.env.PORT || 3001

var cors = require('cors')
app.use(cors())

// dataService.createProductsList()

app.use(express.static('public'))
app.use(express.json())




app.post('/product', async (req, res) => {
    try{
        let products = await dataService.addProduct(req.body)
        res.send(products)
    }
    catch (err) {
        console.log('Error! ', err)
        res.status(401).send('Sorry, error')
    }
    
})


app.post('/sale', async (req, res) => {
    try{
    let sales = await dataService.addSale(req.body)
    res.send(sales)
    }
    catch (err) {
        console.log('Error! ', err)
        res.status(401).send('Sorry, error')
    }
    
})

app.post('/unique_sale', async (req, res) => {
    try{
        let uniqueSales = await dataService.addUniqueSale(req.body)
        res.send(uniqueSales)
    }
    catch (err) {
        console.log('Error! ', err)
        res.status(401).send('Sorry, error')
    }
    
    })

    app.post('/cart_item', async (req, res) => {
        try{
            let cart = await dataService.addCartItem(req.body)
            res.send(cart)
        }
        catch (err) {
        console.log('Error! ', err)
        res.status(401).send('Sorry, error')
    }
    
})


app.get('/products',async (req, res) => {
    try{
        let products = await dataService.getProducts()
        res.send(products)
    }
catch (err) {
    console.log('Error! ', err)
    res.status(401).send('Sorry, error')
}

})


app.get('/cart', async (req, res) => {
    try{
        let cart = await dataService.getCart()
    res.send(cart)
    }
    catch (err) {
        console.log('Error! ', err)
        res.status(401).send('Sorry, error')
    }

})

app.get('/sales', async (req, res) => {
    try{
        let sales = await dataService.getSales()
        // console.log('SERVER JS ', user)
    res.send(sales)
    }
    catch (err) {
        console.log('Error! ', err)
        res.status(401).send('Sorry, error')
    }
    
    })

app.get('/unique_sales', async (req, res) => {
    try{
        let uniqueSales = await dataService.getUniqueSales()
        res.send(uniqueSales)
    }
    catch (err) {
        console.log('Error! ', err)
    res.status(401).send('Sorry, error')
    }
    
    })

app.put('/product', async (req, res) => {
    try{
        let user = await dataService.updateProduct(req.body)
    res.send(product)
    }
    catch (err) {
        console.log('Error! ', err)
res.status(401).send('Sorry, error')
    }
    
})

app.options('/product/:id', cors())
app.delete('/product/:id', async (req, res) => {
    try{
        let product = await dataService.deleteProduct(req.params.id)
        res.send(product)
    }
    catch (err) {
        console.log('Error! ', err)
res.status(401).send('Sorry, error')
    }
    
})

app.options('/cart_item/:id', cors())

app.delete('/cart_item/:id', async (req, res) => {
    try{
        let cartItem = await dataService.deleteCartItem(req.params.id)
    res.send(cartItem)
    }
    catch (err) {
        console.log('Error! ', err)
res.status(401).send('Sorry, error')
    }
    
})




app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})







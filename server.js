
// import {usersToUpload} from '1Users-List.js'
const express = require('express')
// const cookieParser = require('cookie-parser')
// const session = require('express-session')


// const userService = require('./services/user-service')
// const carService = require('./services/1OLDcar-service')
// const storyService = require('./services/story-service')
// const userService = require('./services/user-service')
// const loginService = require('./services/login-service')
const app = express()
const port = process.env.PORT || 3000

var cors = require('cors')
app.use(cors())



// Express App Configuration
// We ask Express.js to serve static files from the 'public' folder
// app.use(cookieParser())
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

app.get('/uniqueSales', async (req, res) => {
    try{
        let uniqueSales = await dataService.getUniqueSales()
        res.send(uniqueSales)
    }
    catch (err) {
        console.log('Error! ', err)
    res.status(401).send('Sorry, error')
    }
    
    })

app.put('/user', async (req, res) => {
    try{
        let user = await userService.update(req.body)
    res.send(user)
    }
    catch (err) {
        console.log('Error! ', err)
res.status(401).send('Sorry, error')
    }
    
})

app.delete('/product', async (req, res) => {
    try{
        let user = await dataService.deleteProduct(req.query)
    res.send(user)
    }
    catch (err) {
        console.log('Error! ', err)
res.status(401).send('Sorry, error')
    }
    
})


//==================================================================
// app.get('/user/:userId',async (req, res) => {
// 

app.get('/story/:storyId', async (req, res) => {
    try{
        let story = await storyService.getStoryById(req.params.storyId)
        res.send(story)
    }
    catch (err) {
        console.log('Error! ', err)
        res.status(401).send('Sorry, error')
    }

})

app.get('/storyAll', async (req, res) => {
    try{
        let stories = await storyService.getAll()
    res.send(stories)
    }
    catch (err) {
        console.log('Error! ', err)
    res.status(401).send('Sorry, error')
    }
    
    })

app.post('/story', async (req, res) => {
    let story = req.body
    try{
    newStory = await storyService.create(story)    
    res.send(newStory)
    }
    catch (err) {
        console.log('Error! ', err)
res.status(401).send('Sorry, error')
    }
    
})

app.put('/story', async (req, res) => {
    try{
        let story = await storyService.update(req.body)
    res.send(story)
    }
    catch (err) {
        console.log('Error! ', err)
res.status(401).send('Sorry, error')
    }
    
})

app.delete('/story/:storyId', async (req, res) => {
    try{
        let story = await storyService.remove(req.params.storyId)
            res.send(story)
    }
    catch (err) {
        console.log('Error! ', err)
        res.status(401).send('Sorry, error')
    }
})



app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})







const dbService = require('./db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    addProduct,
    addCartItem,
    addSale,
    addUniqueSale,
    getProductById,
    getProducts,
    getCart,
    getSales,
    getUniqueSales,
    updateProduct,
    deleteProduct,
    deleteCartItem,
}



async function addProduct(product) {
    try {
        const collection = await dbService.getCollection('products')
        const confirmation = await collection.insertOne(product)
        return 'SUCCESS!'
    } catch (err) {
        console.log(`ERROR: cannot insert story`)
        throw err
    }
}

async function addCartItem(cart_item) {
    try {
        const collection = await dbService.getCollection('cart')
        const confirmation = await collection.insertOne(cart_item)
        return 'SUCCESS!'
    } catch (err) {
        console.log(`ERROR: cannot insert story`)
        throw err
    }
}

async function addSale(sale) {
    try {
        const collection = await dbService.getCollection('sales')
        const confirmation = await collection.insertOne(sale)
        return 'SUCCESS!'
    } catch (err) {
        console.log(`ERROR: cannot insert story`)
        throw err
    }
}

async function addUniqueSale(unique_sale) {
    try {
        const collection = await dbService.getCollection('uniqueSales')
        const confirmation = await collection.insertOne(unique_sale)
        return 'SUCCESS!'
    } catch (err) {
        console.log(`ERROR: cannot insert story`)
        throw err
    }
}



// ================================================
// ================================================


async function getProductById(productId) {
    try {
        const collection = await dbService.getCollection('products')
        const product = await collection.findOne({ _id: ObjectId(productId) })
        return product
    } catch (err) {
        console.log(`ERROR: cannot find story ${storyId}`)
        throw err
    }
}

async function getProducts(){
    try {
        const collection = await dbService.getCollection('products')
        let products = await collection.find().toArray()        
        return products
    } catch (err) {
        console.log(`ERROR: cannot find collection`)
        throw err
    }
}

async function getCart(){
    try {
        const collection = await dbService.getCollection('cart')
        let cart = await collection.find().toArray()        
        return cart
    } catch (err) {
        console.log(`ERROR: cannot find collection`)
        throw err
    }
}

async function getSales(){
    try {
        const collection = await dbService.getCollection('sales')
        let sales = await collection.find().toArray()        
        return sales
    } catch (err) {
        console.log(`ERROR: cannot find collection`)
        throw err
    }
}

async function getUniqueSales(){
    try {
        const collection = await dbService.getCollection('uniqueSales')
        let uniqueSales = await collection.find().toArray()        
        return uniqueSales
    } catch (err) {
        console.log(`ERROR: cannot find collection`)
        throw err
    }
}







// ============================================================================


async function updateProduct(product) {
    try {
        let toUpdate = product
        const collection = await dbService.getCollection('products')
        delete toUpdate._id
        await collection.updateOne({ _id: ObjectId(product._id) }, { $set: toUpdate })
        return toUpdate
    } catch (err) {
        console.log(`ERROR: cannot update story ${story._id}`)
        throw err
    }
}


    async function deleteProduct(productId) {
        try {
            // const product = JSON.parse(Js/)
            const collection = await dbService.getCollection('products')
            // console.log(collection)
            return await collection.deleteOne({ _id: ObjectId(productId) })
    } catch (err) {
        console.log(`ERROR: cannot remove product ${productId}`)
        throw err
    }
}

async function deleteCartItem(itemId) {
    try {
        const collection = await dbService.getCollection('cart')
        return await collection.deleteOne({ _id: ObjectId(itemId) })
} catch (err) {
    console.log(`ERROR: cannot remove cart item ${itemId}`)
    throw err
}
}




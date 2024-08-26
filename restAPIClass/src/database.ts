import {Customer, Product} from './types'

const customer: Customer[] = [
    {id:1, name: "mingss", address:"abcabc", email:"eeee@eeee"},
    {id:2, name: "mingss", address:"abcabc", email:"eeee@eeee"},
    {id:3, name: "mingss", address:"abcabc", email:"eeee@eeee"},
]

const products: Product[] = [
    {id: 1, name: "product1", description: "product1_설명", price: 10000},
    {id: 2, name: "product2", description: "product2_설명", price: 20000},
    {id: 3, name: "product3", description: "product3_설명", price: 30000}
]


const databaseA = {
    customer,
    products
}

export default databaseA
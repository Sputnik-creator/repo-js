// Подумать над глобальными сущностями. К примеру, сущность «Продукт» в 
// интернет-магазине актуальна не только для корзины, но и для каталога. 
// Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для 
// различных модулей сайта, но в разных местах давал возможность вызывать разные методы.

'use strict'

let basket = []

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    addToBasket() {
        basket.push(this.name, this.price)
        console.log(basket)
    }


}



// function basketFiller(name, price) {
//     basket.push(
//         new Product(name, price))

//     // function calc(array){
//     //     let sum = 0;
//     //     for( let i in array) {
//     //         sum += i.name;
//     //     }
//     //     console.log(sum);

//     // }
new Product('scooter', 763).addToBasket
new Product('bicycle', 542).addToBasket
console.log(basket)
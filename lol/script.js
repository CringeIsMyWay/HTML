"use strict";

fetch('https://dummyjson.com/products')
.then((response) => response.json())
.then((json) => showProduct(json));
var n = 0;



function showProduct(json){
    // console.log(json);
    let arrProduct = json.products;
    let content = document.querySelector("#content");
    for (const product of arrProduct) {
        if(product.category == "smartphones") {
            n++;
            
            content.innerHTML += `
            <div class = "item">
            <img src=${product["images"][0]} class = "img">

            <div class = "Text">
            <p><a href= page.html id = ${n} onclick='check' >${product.title}</a><p>
            <p>Описание товра: ${product.description}</p>
            <p>Цена: ${product.price}</p>
            <p>Рейтинг: ${product.rating}</p>
            
            <button class="bt" id="bt">Купить</button>
            <div>
            </div>
            `;
        }
        }
    }

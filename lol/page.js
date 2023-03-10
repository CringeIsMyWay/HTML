"use strict";

fetch('https://dummyjson.com/products')
.then((response) => response.json())
.then((json) => showProduct(json));








function showProduct(json){
     

    let arrProduct = json.products;
    let content = document.querySelector("#content1");
    for (const product of arrProduct) {
        if(product.id == 1) {
            
            content.innerHTML += `
            <div class = "item">
            <img src=${product["images"][0]} class = "img">

            <div class = "Text">
            <p><a href= page.html >${product.title}</a><p>
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
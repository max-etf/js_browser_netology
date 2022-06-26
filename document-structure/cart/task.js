let quantity = document.querySelectorAll('.product')
let totalCart = document.querySelector('.cart')

quantity.forEach(element => {
    const btnDown = element.querySelector('.product__quantity-control_dec');
    const btnUp =  element.querySelector('.product__quantity-control_inc');
    const val = element.querySelector('.product__quantity-value');
    const cart = element.querySelector('.product__add');
    const image = element.querySelector(`.product__image`);
    const id = element.dataset.id;
    btnUp.addEventListener('click',() => increase(val));
    btnDown.addEventListener('click',() => decrease(val));
    cart.addEventListener('click',()=>addCart(val,image,id))

    //console.log(id);
    
    function increase(param) {
        param.innerText++;
    }
    function decrease(param) {
        param.innerText--;
        if (param.innerText < 0)
        param.innerText = 0;
    }

    
    function findincart (idr) {
        return Array.from(totalCart.querySelectorAll('.cart__product')).find((element)=>element.dataset.id === idr)       
    }

    function addCart(val,image,id) {
        if (findincart(id) === undefined){
            let cartelement = document.createElement('div')
            cartelement.innerHTML = `<img class="cart__product-image" src="${image.src}" alt="" class="product__image">`+`<div class="cart__product-count">${val.innerText}</div>`;
            cartelement.setAttribute('class','cart__product')  ;     
            cartelement.setAttribute('data-id',id);
            totalCart.querySelector('.cart__products').appendChild(cartelement)
        }
        else {
            findincart(id).querySelector('.cart__product-count').textContent = 
            parseInt(findincart(id).querySelector('.cart__product-count').textContent,10)
            + parseInt(val.textContent,10);
        }
    }
});

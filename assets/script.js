let add = document.querySelector('#quantity-up')
let totalQuantity = document.querySelector(".total-quantity")
let quantity = 0
let total = document.querySelector('.product-quantity')
let minus = document.getElementById('quantity-down')


add.addEventListener("click", function(){
    if (quantity >= 0)
    quantity += 1;
    totalQuantity.innerHTML = "Quantity = " + quantity
})

minus.addEventListener("click", function(){
    if (quantity >= 1)
    quantity -= 1;
    totalQuantity.innerHTML = "Quantity = " + quantity
})

let remove = document.querySelector(".remove")
let item = document.querySelector(".cart-item")
remove.addEventListener("click", function(){
    item.remove();
})


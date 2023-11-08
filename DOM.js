
//calling elements
const box =document.getElementsByClassName("box");
const shoppingCart = document.getElementsByClassName("section2");
const items = document.getElementsByClassName("item");
const totalPrice = document.getElementById("tot");

let total = 0;

for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const minus = item.getElementsByClassName("minus")[0];
    const plus = item.getElementsByClassName("plus")[0];
    const quantityInput = item.getElementsByTagName("input")[0];
    const deleteBtn = item.getElementsByClassName("delete-btn")[0];

    const price = parseInt(
        item.getElementsByClassName("price")[0].innerText.substring(1)
    );
//remove item's price from total
    minus.addEventListener("click", () => {
        if (quantityInput.value > 1) {
            quantityInput.value--;
            total -= price;
            totalPrice.innerText = `Total Price: €${total}`;
        }
    });
//add item's price to total
    plus.addEventListener("click", () => {
        quantityInput.value++;
        total += price;
        totalPrice.innerText = `Total Price: €${total}`;
    });
//remove item
    deleteBtn.addEventListener("click", () => {
        item.remove();
        total -= price * quantityInput.value;
        totalPrice.innerText = `Total Price: €${total}`;
    });

    total += price * quantityInput.value;
    totalPrice.innerText = `Total Price: €${total}`;
}
//styling
totalPrice.style.color="#ff69b4";
totalPrice.style.fontFamily="'Lilita One', sans-serif";
//heart toggle
$(".heart.fa").click(function() {  
 $(this).toggleClass("fa-heart fa-heart-o");     
                });

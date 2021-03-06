
// for update innerText of element 
function setAmount(elementid, amount){
    const elementField = document.getElementById(elementid);
    elementField.innerText = amount;
}

// for calculation of total cost

function totalAmount(){
    const bestPrice = document.getElementById('bestPrice');
    const bestPriceAmount = parseInt(bestPrice.innerText);
    const memoryCost = document.getElementById('memoryCost');
    const memoryCostAmount = parseInt(memoryCost.innerText);
    const storageCost = document.getElementById('storageCost');
    const storageCostAmount = parseInt(storageCost.innerText);
    const deliveryCost = document.getElementById('deliveryCost');
    const deliveryCostAmount = parseInt(deliveryCost.innerText);
    const totalPrice = document.getElementById('totalPrice');
    const totalPriceWithPromo = document.getElementById('totalPriceWithPromo');
    const totalAmount = bestPriceAmount + memoryCostAmount + storageCostAmount + deliveryCostAmount;
    totalPrice.innerText = totalAmount;
    totalPriceWithPromo.innerText = totalAmount;
}

// work with memory items
document.getElementById('8GbMemory').addEventListener('click', function() {
    setAmount('memoryCost', 0);
    totalAmount();
})
document.getElementById('16GbMemory').addEventListener('click', function() {
    setAmount('memoryCost', 180);
    totalAmount();
})
// work with storage items
document.getElementById('256GbStorage').addEventListener('click', function() {
    setAmount('storageCost', 0);
    totalAmount();
})
document.getElementById('512GbStorage').addEventListener('click', function() {
    setAmount('storageCost', 100);
    totalAmount();
})
document.getElementById('1TbStorage').addEventListener('click', function() {
    setAmount('storageCost', 180);
    totalAmount();
})

// work with delivery items
document.getElementById('freeDelivery').addEventListener('click', function() {
    setAmount('deliveryCost', 0);
    totalAmount();
})
document.getElementById('chargedDelivery').addEventListener('click', function() {
    setAmount('deliveryCost', 20);
    totalAmount();
})

// work with promo code 
document.getElementById('promoApplyButton').addEventListener('click', function() {
    const promoCode = document.getElementById('promoCode');
    const totalPrice = document.getElementById('totalPriceWithPromo');
    const totalPriceWithoutPromo = document.getElementById('totalPrice');
    const promoMassage = document.getElementById('promoMassage');
    const applyPromoBtn = document.getElementById('promoApplyButton');
    const promoCodeText = promoCode.value;
    if(promoCodeText == 'stevekaku'){
        const totalPriceWithoutPromoAmount = parseInt(totalPriceWithoutPromo.innerText)
        const totalPriceWithDiscount = Math.round((totalPriceWithoutPromoAmount/100) * 80);
        totalPrice.innerText = totalPriceWithDiscount;
        promoCode.value = ''
        promoMassage.innerText = 'Congratulation , You got 20% discount.';
        promoMassage.style.color = 'green';
        applyPromoBtn.setAttribute('disabled', true)
        applyPromoBtn.style.backgroundColor = 'gray'
    }
    else{
        promoMassage.innerText = "You input an invalid promo code";
        promoMassage.style.color = 'red';
        promoCode.value = ''
    }
})

